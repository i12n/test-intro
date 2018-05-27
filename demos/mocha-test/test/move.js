var chai = require('chai');
var expect = chai.expect;

function move(v, t) {
	if (typeof v == 'number' && typeof t == 'number') {
		return v * t;
	}
	return NaN;
}

describe('move(t: number, v: number) :number', function() {
  it('should return 12 when v = 2, t = 6', function() {
    expect(move(2, 6)).be.equal(13);
  });

	it('should return NaN when v = 2, t is undefined', function() {
		expect(isNaN(move(2))).be.equal(true);
	});

	it('should return NaN when v is undefined, t is undefined', function() {
		expect(isNaN(move())).be.equal(true);
	});
});
