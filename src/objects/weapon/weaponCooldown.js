export function updateWeaponCooldown(weapon) {

	if (weapon.cooldownRemaining > 0) {
		weapon.cooldownRemaining--;
	}

}

export function isWeaponReady(weapon) {

	return weapon.cooldownRemaining <= 0;

}

export function resetWeaponCooldown(weapon) {

	weapon.cooldownRemaining =
		weapon.cooldownFrames;

}