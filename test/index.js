const expect = require('chai').expect;
const Rand0m = require('../index');

describe('Rand0m', () => {

	describe('.int()', () => {

		it('should return the right values', () => {
			const rand = new Rand0m(4711);
			expect(rand.int()).to.equal(79194583);
			expect(rand.int()).to.equal(1730995794);
			expect(rand.int()).to.equal(885360655);
		});

		it('should respect the min and max value', () => {
			const rand = new Rand0m(12847);
			let belowTwenty = 0;
			let twenty = 0;
			let overFortyfive = 0;
			let fortyfive = 0;
			for (let i = 0; i < 10000; i++) {
				const val = rand.int(20, 45);
				if (val < 20) belowTwenty++;
				if (val === 20) twenty++;
				if (val > 45) overFortyfive++;
				if (val === 45) fortyfive++;
			}
			expect(belowTwenty).to.equal(0);
			expect(twenty).to.equal(359);
			expect(overFortyfive).to.equal(0);
			expect(fortyfive).to.equal(404);

		});

		it('should have a good distribution between selected min and max', () => {

			const rand = new Rand0m(1337);

			const dist = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
			for (let i = 0; i < 10000; i++) {
				const val = rand.int(0, 9);
				dist[val]++;
			}
			expect(dist)
				.to.deep.equal(
					[ 960, 982, 986, 970, 1062, 994, 956, 1034, 1019, 1037 ]
				);

		});

	});

	describe('.float()', () => {

		it('should return the right values', () => {
			const rand = new Rand0m(14636);
			expect(rand.float()).to.equal(0.11455456643789501);
			expect(rand.float()).to.equal(0.31860505120698834);
			expect(rand.float()).to.equal(0.7951009686059327);
		});

		it('should only return values between 0 and 1 if no arguments', () => {

			const rand = new Rand0m(12841);
			for (let i = 0; i < 1000; i++) {
				const val = rand.float();
				expect(val).to.be.least(0);
				expect(val).to.be.most(1);
			}

		});

		it('should respect min and max', () => {

			const rand = new Rand0m(12841);
			for (let i = 0; i < 1000; i++) {
				const val = rand.float(35.5, 42.2);
				expect(val).to.be.least(35.5);
				expect(val).to.be.most(42.2);
			}

		});

	});

});
