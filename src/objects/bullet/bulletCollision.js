export function wrapBullet(bullet) {

	const width = bullet.scene.scale.width;
	const height = bullet.scene.scale.height;

	if (bullet.x < 0) {
		bullet.x = width;
	}

	if (bullet.x > width) {
		bullet.x = 0;
	}

	if (bullet.y < 0) {
		bullet.y = height;
	}

	if (bullet.y > height) {
		bullet.y = 0;
	}

}