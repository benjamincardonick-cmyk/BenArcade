export function updateAsteroidMovement(asteroid) {

	asteroid.x += asteroid.velocityX;
	asteroid.y += asteroid.velocityY;

	asteroid.angle +=
		asteroid.rotationSpeed;

}