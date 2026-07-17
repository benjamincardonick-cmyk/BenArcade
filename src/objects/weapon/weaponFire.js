import Phaser from "phaser";

import {
	isWeaponReady,
	resetWeaponCooldown
} from "./weaponCooldown";

export function fireWeapon(weapon) {

	if (!isWeaponReady(weapon)) {
		return;
	}

	const angleInRadians =
		Phaser.Math.DegToRad(
			weapon.host.angle
		);

	weapon.bulletManager.createBullet({

		x:
			weapon.host.x +
			Math.sin(angleInRadians) * 30,

		y:
			weapon.host.y -
			Math.cos(angleInRadians) * 30,

		angle:
			weapon.host.angle

	});

	resetWeaponCooldown(weapon);

}