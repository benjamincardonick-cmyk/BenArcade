import Phaser from "phaser";

import {
	ASTEROID_LINE_WIDTH
} from "./asteroidConfig";

export function createAsteroidGraphics(scene) {

	return scene.add.graphics();

}

export function drawAsteroidSkin(asteroid) {

	const g = asteroid.graphics;

	g.clear();

	g.lineStyle(
		ASTEROID_LINE_WIDTH,
		0xffffff
	);

	g.beginPath();

	const firstPoint =
		asteroid.points[0];

	g.moveTo(
		firstPoint.x,
		firstPoint.y
	);

	for (
		let index = 1;
		index < asteroid.points.length;
		index++
	) {

		const point =
			asteroid.points[index];

		g.lineTo(
			point.x,
			point.y
		);

	}

	g.closePath();

	g.strokePath();

	g.setPosition(
		asteroid.x,
		asteroid.y
	);

	g.setRotation(
		Phaser.Math.DegToRad(
			asteroid.angle
		)
	);

}