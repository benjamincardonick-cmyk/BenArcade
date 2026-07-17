export function wrapAsteroid(asteroid) {

	const width = asteroid.scene.scale.width;
	const height = asteroid.scene.scale.height;

	if (asteroid.x < 0) {
		asteroid.x = width;
	}

	if (asteroid.x > width) {
		asteroid.x = 0;
	}

	if (asteroid.y < 0) {
		asteroid.y = height;
	}

	if (asteroid.y > height) {
		asteroid.y = 0;
	}

}