class Rand0m {

	constructor(seed) {
		this._seed = (Math.abs(Math.round(seed)) % 2147483646) + 1;
	}

	char(validChars) {
		if (typeof validChars !== 'string' || validChars.length === 0) {
			validChars = 'abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789';
		}
		return validChars[this.int(0, validChars.length - 1)];
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

	str(min, max, validChars) {
		if (typeof min === 'undefined') {
			min = 16;
		}
		if (typeof max === 'undefined') {
			max = 32;
		}
		let str = '';
		const len = this.int(min, max);
		while (str.length < len) {
			str += this.char(validChars);
		}
		return str;
	}

}

module.exports = Rand0m;
