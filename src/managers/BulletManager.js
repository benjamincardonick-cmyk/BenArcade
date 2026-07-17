import Bullet from "../objects/bullet/Bullet";

export default class BulletManager {

	constructor(scene) {

		this.scene = scene;

		this.bullets = [];

	}

	createBullet(config) {

		const bullet =
			new Bullet(
				this.scene,
				config
			);

		this.bullets.push(bullet);

		return bullet;

	}

	update() {

		for (const bullet of this.bullets) {

			if (bullet.isActive) {
				bullet.update();
			}

		}

		this.bullets =
			this.bullets.filter(
				bullet => bullet.isActive
			);

	}

}