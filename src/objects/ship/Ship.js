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

import {
	SHIP_ROTATION_SPEED,
	SHIP_THRUST_POWER,
	SHIP_FRICTION
} from "./shipConfig";

import Weapon from "../weapon/Weapon";

export default class Ship {

	constructor(scene, x, y) {

		this.scene = scene;

		this.x = x;
		this.y = y;

		this.angle = 0;

		this.velocityX = 0;
		this.velocityY = 0;

		this.rotationSpeed =
			SHIP_ROTATION_SPEED;

		this.thrustPower =
			SHIP_THRUST_POWER;

		this.friction =
			SHIP_FRICTION;

		this.graphics =
			createShipGraphics(scene);

		this.primaryWeapon =
			new Weapon(
				this,
				scene.bulletManager
			);

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

		this.primaryWeapon.update(input);

		this.draw(thrusting);

	}

	destroy() {

		this.graphics.destroy();

	}

}