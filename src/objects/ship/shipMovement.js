import Phaser from "phaser";

export function updateShipMovement(ship, input) {

	if (input.isTurningLeft()) {
		ship.angle -= ship.rotationSpeed;
	}

	if (input.isTurningRight()) {
		ship.angle += ship.rotationSpeed;
	}

	const thrusting = input.isThrusting();

	if (thrusting) {

		const angleInRadians =
			Phaser.Math.DegToRad(ship.angle);

		ship.velocityX +=
			Math.sin(angleInRadians) *
			ship.thrustPower;

		ship.velocityY -=
			Math.cos(angleInRadians) *
			ship.thrustPower;

	}

	ship.x += ship.velocityX;
	ship.y += ship.velocityY;

	ship.velocityX *= ship.friction;
	ship.velocityY *= ship.friction;

	return thrusting;

}