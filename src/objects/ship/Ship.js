import {
	createShipGraphics,
	drawShipSkin
} from "./shipSkin";

import {
	updateShipRotation
} from "./shipMovement";

export default class Ship {

	constructor(scene, x, y) {

		this.scene = scene;

		this.x = x;
		this.y = y;

		this.angle = 0;

		this.rotationSpeed = 3;

		this.graphics =
			createShipGraphics(scene);

		this.draw();

	}

	draw() {

		drawShipSkin(this);

	}

	update(input) {

		updateShipRotation(
			this,
			input
		);

		this.draw();

	}

	destroy() {

		this.graphics.destroy();

	}

}