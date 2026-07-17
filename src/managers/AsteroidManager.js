import Phaser from "phaser";

import Asteroid from "../objects/asteroid/Asteroid";

export default class AsteroidManager {

	constructor(scene) {

		this.scene = scene;

		this.asteroids = [];

	}

	createAsteroid(config) {

		const asteroid =
			new Asteroid(
				this.scene,
				config
			);

		this.asteroids.push(asteroid);

		return asteroid;

	}

	destroyAsteroid(asteroid) {

		if (!asteroid.isActive) {
			return;
		}

		const childSize =
			asteroid.size - 1;

		const x =
			asteroid.x;

		const y =
			asteroid.y;

		asteroid.destroy();

		if (childSize < 1) {
			return;
		}

		const firstDirection =
			Phaser.Math.Between(
				0,
				359
			);

		const secondDirection =
			firstDirection +
			Phaser.Math.Between(
				120,
				240
			);

		this.createAsteroid({

			x,
			y,

			size:
				childSize,

			movementAngle:
				firstDirection,

			rotationSpeed:
				Phaser.Math.FloatBetween(
					-1,
					1
				)

		});

		this.createAsteroid({

			x,
			y,

			size:
				childSize,

			movementAngle:
				secondDirection,

			rotationSpeed:
				Phaser.Math.FloatBetween(
					-1,
					1
				)

		});

	}

	update() {

		for (const asteroid of this.asteroids) {

			if (asteroid.isActive) {
				asteroid.update();
			}

		}

		this.asteroids =
			this.asteroids.filter(
				asteroid => asteroid.isActive
			);

	}

}