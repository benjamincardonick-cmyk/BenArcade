import {
	BULLET_RADIUS
} from "../objects/bullet/bulletConfig";

export default class CollisionManager {

	checkBulletAsteroidCollisions(
		bulletManager,
		asteroidManager
	) {

		for (const bullet of bulletManager.bullets) {

			if (!bullet.isActive) {
				continue;
			}

			for (const asteroid of asteroidManager.asteroids) {

				if (!asteroid.isActive) {
					continue;
				}

				const collisionDistance =
					BULLET_RADIUS +
					asteroid.radius;

				const collisionDistanceSquared =
					collisionDistance *
					collisionDistance;

				const differenceX =
					bullet.x -
					asteroid.x;

				const differenceY =
					bullet.y -
					asteroid.y;

				const distanceSquared =
					differenceX *
					differenceX +
					differenceY *
					differenceY;

				if (
					distanceSquared <=
					collisionDistanceSquared
				) {

					bullet.destroy();

					asteroidManager
						.destroyAsteroid(
							asteroid
						);

					break;

				}

			}

		}

	}

}