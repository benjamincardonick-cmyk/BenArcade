import {
	createBulletGraphics,
	drawBulletSkin
} from "./bulletSkin";

import {
	updateBulletMovement
} from "./bulletMovement";

import {
	wrapBullet
} from "./bulletCollision";

import {
	BULLET_SPEED,
	BULLET_LIFETIME
} from "./bulletConfig";

export default class Bullet {

	constructor(scene, config) {

		this.scene = scene;

		this.x = config.x;
		this.y = config.y;

		this.angle = config.angle ?? 0;

		this.speed =
			config.speed ??
			BULLET_SPEED;

		const angleInRadians =
			this.angle *
			Math.PI / 180;

		this.velocityX =
			Math.sin(angleInRadians) *
			this.speed;

		this.velocityY =
			-Math.cos(angleInRadians) *
			this.speed;

		this.lifetime =
			config.lifetime ??
			BULLET_LIFETIME;

		this.isActive = true;

		this.graphics =
			createBulletGraphics(scene);

		this.draw();

	}

	draw() {

		drawBulletSkin(this);

	}

	update() {

		updateBulletMovement(this);

		wrapBullet(this);

		this.lifetime--;

		if (this.lifetime <= 0) {

			this.destroy();
			return;

		}

		this.draw();

	}

	destroy() {

		this.isActive = false;

		this.graphics.destroy();

	}

}