export function wrapShip(ship) {

	const width = ship.scene.scale.width;
	const height = ship.scene.scale.height;

	if (ship.x < 0) {
		ship.x = width;
	}

	if (ship.x > width) {
		ship.x = 0;
	}

	if (ship.y < 0) {
		ship.y = height;
	}

	if (ship.y > height) {
		ship.y = 0;
	}

}