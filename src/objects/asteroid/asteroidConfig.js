export const ASTEROID_TYPES = {

	LARGE: 3,

	MEDIUM: 2,

	SMALL: 1

};

export const ASTEROID_SIZES = {

	[ASTEROID_TYPES.LARGE]: {

		radius: 40,
		speed: 1.5,
		score: 20

	},

	[ASTEROID_TYPES.MEDIUM]: {

		radius: 22,
		speed: 2.2,
		score: 50

	},

	[ASTEROID_TYPES.SMALL]: {

		radius: 12,
		speed: 3.0,
		score: 100

	}

};

export const ASTEROID_LINE_WIDTH = 2;

export const ASTEROID_ROTATION_SPEED = 0.5;