import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class SchedulingService {

	constructor(private http: HttpClient) { }

	run(): void {
		this.get('run');
	}

	pause(): void {
		this.get('pause');
	}

	private get(uri: string): void {

		const target: string = `${environment.api}/task/${uri}`;

		this.http.get(target).toPromise();
	}
}
