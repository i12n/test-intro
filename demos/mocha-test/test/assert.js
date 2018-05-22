var assert = require('assert');

describe('a suite of assert', function() {
	it('assert() is ok', function() {
		assert(true, 'ok');
	});

	it('assert.equal() is ok', function(){
		assert.equal(-1, [1,2,3].indexOf(5));
	});
})

