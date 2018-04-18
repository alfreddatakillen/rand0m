class Rand0m {

	constructor(seed) {
		this._seed = (Math.abs(Math.round(seed)) % 2147483646) + 1;
	}

	float(min, max) {
		return (this.int() / 2147483646)
			* Math.abs((max || 1) - (min || 0)) + (min || 0);
	}

	int(min, max) {
		if (typeof min !== 'undefined' || typeof max !== 'undefined') {
			return Math.floor(this.float(min, max + 1));
		}
		this._seed = this._seed * 16807 % 2147483647;
		return this._seed - 1;
	}

}

module.exports = Rand0m;
