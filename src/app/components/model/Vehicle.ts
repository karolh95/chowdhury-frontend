
export class Vehicle implements IVehicle {

	constructor(
		readonly velocity: number,
		readonly maxVelocity: number,
		readonly lane: number,
		readonly position: number
	) { }

	public getTooltip(): string {

		return `Velocity: ${this.velocity}, Max: ${this.maxVelocity}`;
	}
}

export interface IVehicle {

	velocity: number;
	maxVelocity: number;
	lane: number;
	position: number;
}