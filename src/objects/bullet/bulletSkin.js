import {
	BULLET_RADIUS
} from "./bulletConfig";

export function createBulletGraphics(scene) {

	return scene.add.graphics();

}

export function drawBulletSkin(bullet) {

	bullet.graphics.clear();

	bullet.graphics.fillStyle(
		0xffffff
	);

	bullet.graphics.fillCircle(
		0,
		0,
		BULLET_RADIUS
	);

	bullet.graphics.setPosition(
		bullet.x,
		bullet.y
	);

}