import {
	createShipGraphics,
	drawShipSkin
} from "./shipSkin";

export default class Ship {

	constructor(scene, x, y) {

		this.scene = scene;

		this.x = x;
		this.y = y;

		this.angle = 0;

		this.velocityX = 0;
		this.velocityY = 0;

		this.graphics = createShipGraphics(scene);

		this.draw();

	}

	draw(thrusting = false) {

		drawShipSkin(
			this,
			thrusting
		);

	}

	update() {

		this.draw();

	}

	destroy() {

		this.graphics.destroy();

	}

}