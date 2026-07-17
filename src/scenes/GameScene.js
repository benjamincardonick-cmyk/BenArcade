import Phaser from "phaser";

import Ship from "../objects/ship/Ship";

import InputManager from "../managers/InputManager";
import BulletManager from "../managers/BulletManager";
import AsteroidManager from "../managers/AsteroidManager";
import CollisionManager from "../managers/CollisionManager";

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

		this.bulletManager =
			new BulletManager(this);

		this.asteroidManager =
			new AsteroidManager(this);

		this.collisionManager =
			new CollisionManager();

		this.ship =
			new Ship(
				this,
				GAME_WIDTH / 2,
				GAME_HEIGHT / 2
			);

		this.asteroidManager.createAsteroid({

			x: GAME_WIDTH / 2 + 250,

			y: GAME_HEIGHT / 2,

			angle: 0

		});

	}

	update() {

		this.ship.update(
			this.inputManager
		);

		this.bulletManager.update();

		this.asteroidManager.update();

		this.collisionManager
			.checkBulletAsteroidCollisions(
				this.bulletManager,
				this.asteroidManager
			);

	}

}