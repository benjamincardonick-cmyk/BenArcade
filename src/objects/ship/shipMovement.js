export function updateShipRotation(ship, input) {

	if (input.isTurningLeft()) {

		ship.angle -= ship.rotationSpeed;

	}

	if (input.isTurningRight()) {

		ship.angle += ship.rotationSpeed;

	}

}