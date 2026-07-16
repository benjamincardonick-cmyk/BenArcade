import Phaser from "phaser";

import Ship from "../objects/ship/Ship";
import InputManager from "../managers/InputManager";

import {
	GAME_WIDTH,
	GAME_HEIGHT
} from "../engine/Constants";

export default class GameScene extends Phaser.Scene {

	constructor() {

		super("GameScene");

	}

	create() {

		this.inputManager =
			new InputManager(this);

		this.ship =
			new Ship(
				this,
				GAME_WIDTH / 2,
				GAME_HEIGHT / 2
			);

	}

	update() {

		this.ship.update(
			this.inputManager
		);

	}

}