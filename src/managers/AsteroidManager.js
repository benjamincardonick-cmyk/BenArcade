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