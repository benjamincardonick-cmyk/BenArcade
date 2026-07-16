import Phaser from "phaser";

import "./style.css";

import BootScene from "./scenes/BootScene";
import GameScene from "./scenes/GameScene";

import {
	GAME_WIDTH,
	GAME_HEIGHT,
	COLORS
} from "./engine/Constants";

const config = {
	type: Phaser.AUTO,

	width: GAME_WIDTH,
	height: GAME_HEIGHT,

	backgroundColor: COLORS.BACKGROUND,

	parent: "app",

	scene: [
		BootScene,
		GameScene
	]
};

new Phaser.Game(config);