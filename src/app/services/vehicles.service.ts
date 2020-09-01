import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SocketClientService } from './socket-client.service';
import { Vehicle, IVehicle } from '../components/model/Vehicle';

@Injectable({ providedIn: 'root' })
export class VehiclesService {

	constructor(private socket: SocketClientService) { }

	fetchVehicles(): Observable<Vehicle[][]> {

		return this.socket.onMessage("/model/vehicles")
			.pipe(map(this.toVehicles));
	}

	toVehicles(obj: IVehicle[][]): Vehicle[][] {

		const array: Vehicle[][] = new Array(0);

		obj.forEach(subArray => {

			let lane: Vehicle[] = new Array(0);

			subArray.forEach(v => {

				let vehicle = new Vehicle(v.velocity, v.maxVelocity, v.lane, v.lane);

				lane.push(vehicle);
			});

			array.push(lane);
		});

		return array;
	}
}
