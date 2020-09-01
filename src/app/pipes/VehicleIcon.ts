import { Pipe, PipeTransform } from "@angular/core";
import { Vehicle } from '../components/model/Vehicle';

@Pipe({ name: 'vehicleIcon' })
export class VehicleIconPipe implements PipeTransform {

	transform(vehicle: Vehicle): string {

		let icon: string = 'minimize';

		if (vehicle === null) {
			return icon;
		}

		switch (vehicle.maxVelocity) {
			case 3:
				icon = 'agriculture';
				break;

			case 5:
				icon = 'local_shipping';
				break;

			case 7:
				icon = 'two_wheeler';
				break;

		}
		return icon;
	}
}