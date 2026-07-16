export default class InputManager {

	constructor(scene) {

		this.cursors =
			scene.input.keyboard.createCursorKeys();

	}

	isTurningLeft() {

		return this.cursors.left.isDown;

	}

	isTurningRight() {

		return this.cursors.right.isDown;

	}

	isThrusting() {

		return this.cursors.up.isDown;

	}

	isFiring() {

		return this.cursors.space.isDown;

	}

}