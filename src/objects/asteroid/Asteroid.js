import Phaser from "phaser";

import {
	createAsteroidGraphics,
	drawAsteroidSkin
} from "./asteroidSkin";

import {
	updateAsteroidMovement
} from "./asteroidMovement";

import {
	wrapAsteroid
} from "./asteroidCollision";

import {
	ASTEROID_TYPES,
	ASTEROID_SIZES,
	ASTEROID_ROTATION_SPEED
} from "./asteroidConfig";

export default class Asteroid {

	constructor(scene, config) {

		this.scene = scene;

		this.x = config.x;
		this.y = config.y;

		this.size =
			config.size ??
			ASTEROID_TYPES.LARGE;

		const sizeSettings =
			ASTEROID_SIZES[this.size];

		this.radius =
			sizeSettings.radius;

		this.scoreValue =
			sizeSettings.score;

		this.angle =
			config.angle ??
			0;

		const movementAngle =
			Phaser.Math.DegToRad(
				config.movementAngle ??
				Phaser.Math.Between(
					0,
					359
				)
			);

		const speed =
			config.speed ??
			sizeSettings.speed;

		this.velocityX =
			Math.cos(movementAngle) *
			speed;

		this.velocityY =
			Math.sin(movementAngle) *
			speed;

		this.rotationSpeed =
			config.rotationSpeed ??
			ASTEROID_ROTATION_SPEED;

		this.isActive = true;

		this.points =
			this.createRandomShape();

		this.graphics =
			createAsteroidGraphics(scene);

		this.draw();

	}

	createRandomShape() {

		const points = [];

		const pointCount =
			Phaser.Math.Between(
				9,
				12
			);

		for (
			let index = 0;
			index < pointCount;
			index++
		) {

			const angle =
				(index / pointCount) *
				Math.PI *
				2;

			const radiusVariation =
				Phaser.Math.FloatBetween(
					0.72,
					1
				);

			const radius =
				this.radius *
				radiusVariation;

			points.push({

				x:
					Math.cos(angle) *
					radius,

				y:
					Math.sin(angle) *
					radius

			});

		}

		return points;

	}

	draw() {

		drawAsteroidSkin(this);

	}

	update() {

		updateAsteroidMovement(this);

		wrapAsteroid(this);

		this.draw();

	}

	destroy() {

		this.isActive = false;

		this.graphics.destroy();

	}

}