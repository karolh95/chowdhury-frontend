import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ModelService } from 'src/app/services/model.service';
import { SchedulingService } from 'src/app/services/scheduling.service';
import { VehiclesService } from 'src/app/services/vehicles.service';
import { Vehicle } from './Vehicle';

@Component({
	selector: 'model',
	templateUrl: './model.component.html',
	styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

	private unsubscribeSubject: Subject<void> = new Subject();

	vehicles: Vehicle[][];

	constructor(
		private socket: VehiclesService,
		private scheduling: SchedulingService,
		private model: ModelService
	) { }

	ngOnInit(): void {

		this.socket.fetchVehicles()
			.pipe(takeUntil(this.unsubscribeSubject))
			.subscribe(this.next.bind(this));
	}

	private next(vehicles: Vehicle[][]): void {

		this.vehicles = vehicles;
	}

	run(): void {
		this.scheduling.run();
	}

	pause(): void {
		this.scheduling.pause();
	}

	reset() {
		this.model.reset();
	}
}
