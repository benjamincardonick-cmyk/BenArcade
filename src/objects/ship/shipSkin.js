import Phaser from "phaser";

import {
	COLORS
} from "../../engine/Constants";

export function createShipGraphics(scene) {

	return scene.add.graphics();

}

export function drawShipSkin(ship, thrusting = false) {

	ship.graphics.clear();

	ship.graphics.lineStyle(
		3,
		COLORS.SHIP
	);

	// Ship body
	ship.graphics.beginPath();

	ship.graphics.moveTo(0, -25);
	ship.graphics.lineTo(-18, 20);
	ship.graphics.lineTo(0, 10);
	ship.graphics.lineTo(18, 20);

	ship.graphics.closePath();
	ship.graphics.strokePath();

	// Engine flame
	if (thrusting) {

		ship.graphics.beginPath();

		ship.graphics.moveTo(-8, 18);
		ship.graphics.lineTo(0, 34);
		ship.graphics.lineTo(8, 18);

		ship.graphics.strokePath();

	}

	ship.graphics.setPosition(
		ship.x,
		ship.y
	);

	ship.graphics.setRotation(
		Phaser.Math.DegToRad(ship.angle)
	);

}