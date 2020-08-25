import { Injectable, OnDestroy } from '@angular/core';
import { Client, IFrame, Message, StompConfig, StompSubscription } from '@stomp/stompjs';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import { filter, first, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class SocketClientService implements OnDestroy {

	private client: Client;
	private state: BehaviorSubject<SocketState>;

	private config: StompConfig = {
		brokerURL: environment.ws,
		reconnectDelay: 5000,
		heartbeatIncoming: 4000,
		heartbeatOutgoing: 4000
	}

	constructor() {

		this.state = new BehaviorSubject<SocketState>(SocketState.ATTEMPTING);
		this.client = new Client(this.config);

		this.client.onConnect = this.onConnect.bind(this);
		this.client.onStompError = this.onStompError.bind(this);

		this.client.activate();
	}

	onMessage(destination: string): Observable<any> {

		const func = (client: Client) => {

			return new Observable<any>(observer => {

				const parse = (message: Message) => JSON.parse(message.body);
				const callback = (message) => observer.next(parse(message));

				const subscription: StompSubscription = client.subscribe(destination, callback);
				const unsubscribe = () => client.unsubscribe(subscription.id);

				return unsubscribe;
			})
		}

		return this.connect().pipe(first(), switchMap(func));
	}

	ngOnDestroy() {

		this.connect().pipe(first()).subscribe(client => client.deactivate());
	}

	private onConnect() {

		this.state.next(SocketState.CONNECTED);
		console.log('Broker connected!');
	}

	private onStompError(frame: IFrame) {

		console.log('Broker reported error: ' + frame.headers['message']);
		console.log('Additional details: ' + frame.body);
	}

	private connect(): Observable<Client> {

		const observer = (observer: Subscriber<Client>) => {

			const next = () => observer.next(this.client);

			this.state.pipe(filter(isConnected)).subscribe(next);
		}

		return new Observable<Client>(observer);
	}
}

enum SocketState {
	ATTEMPTING, CONNECTED
}

function isConnected(state: SocketState) {

	return state === SocketState.CONNECTED;
}