import {
	updateWeaponCooldown
} from "./weaponCooldown";

import {
	fireWeapon
} from "./weaponFire";

export default class Weapon {

	constructor(host, bulletManager) {

		this.host = host;

		this.bulletManager = bulletManager;

		this.cooldownFrames = 15;

		this.cooldownRemaining = 0;

	}

	update(input) {

		updateWeaponCooldown(this);

		if (input.isFiring()) {

			fireWeapon(this);

		}

	}

}