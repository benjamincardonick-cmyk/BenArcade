import {
	createShipGraphics,
	drawShipSkin
} from "./shipSkin";

import {
	updateShipMovement
} from "./shipMovement";

import {
	wrapShip
} from "./shipCollision";

export default class Ship {

	constructor(scene, x, y) {

		this.scene = scene;

		this.x = x;
		this.y = y;

		this.angle = 0;

		this.velocityX = 0;
		this.velocityY = 0;

		this.rotationSpeed = 3;
		this.thrustPower = 0.12;
		this.friction = 0.995;

		this.graphics =
			createShipGraphics(scene);

		this.draw();

	}

	draw(thrusting = false) {

		drawShipSkin(
			this,
			thrusting
		);

	}

	update(input) {

		const thrusting =
			updateShipMovement(
				this,
				input
			);

		wrapShip(this);

		this.draw(thrusting);

	}

	destroy() {

		this.graphics.destroy();

	}

}