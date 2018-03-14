# 断言库
断言可以看做是布尔表达式，如果表达式不符合预期，就抛出一个错误。也就是说当布尔表达式值为 ture 时，不做任何事情，当值为 false 时，抛出一个错误。

在 NodeJs 中内置了[断言模块 `assert`](https://nodejs.org/api/assert.html)，使用方法如下：

```
var assert = require('assert');
assert.equal(1, 2, 'fail');
console.log('ok');
```

> The assert module provides a simple set of assertion tests that can be used to test invariants.

NodeJs 内置的 `assert` 的可用于测试，但是使用起来并不是特别友好，在测试中可以选用其他一些断言库：

- [should.js](http://shouldjs.github.io/) - BDD 断言库

	```
	var should = require('should');
	
	var user = {
	    name: 'tj'
	  , pets: ['tobi', 'loki', 'jane', 'bandit']
	};
	
	user.should.have.property('name', 'tj');
	user.should.have.property('pets').with.lengthOf(4);
	
	// If the object was created with Object.create(null)
	// then it doesn't inherit `Object.prototype`, so it will not have `.should` getter
	// so you can do:
	should(user).have.property('name', 'tj');
	
	// also you can test in that way for null's
	should(null).not.be.ok();
	
	someAsyncTask(foo, function(err, result){
	  should.not.exist(err);
	  should.exist(result);
	  result.bar.should.equal(foo);
	});
	```

- [expect.js](https://github.com/Automattic/expect.js)  一个 BDD 断言库, 基于 should.js

	```
	var expect = require('expect.js');
	expect(window.r).to.be(undefined);
	expect({ a: 'b' }).to.eql({ a: 'b' })
	expect(5).to.be.a('number');
	expect([]).to.be.an('array');
	expect(window).not.to.be.an(Image);
	```

- [expect](https://github.com/mjackson/expect) - 已经用于 jest

	```
	var expect = require('expect');
	expect(null).toNotExist();
	expect(2).toBeA('number');
	expect([ 1, 2, 3 ]).toInclude(3);
	```

- [chai.js](http://chaijs.com/) - 支持 TDD / BDD, 提供三种风格的断言 `should`, `expect`, `assert`

	```
	chai.should();
	foo.should.be.a('string');
	  
	var expect = chai.expect;
	expect(foo).to.be.a('string');
	
	var assert = chai.assert;
	assert.typeOf(foo, 'string');
	```

