var chai = require('chai');
var fs = require('fs');
var path = require('path');
var expect = chai.expect;
var tmpDir = path.join(__dirname, 'tmp');

describe('readdir(path, callback)', function() {
	this.timeout(10000);

	before(function(done) {
		fs.mkdir(tmpDir, function(err) {
			done(err);
		});
	});

	after(function(done) {
		fs.rmdir(tmpDir, function(err) {
			done(err);
		});
	});

	it('readdir by callback should be ok', function(done) {
		fs.readdir(__dirname, function(err, result) {
			expect(result).to.include('tmp');
			// 需要执行 done，否则会超时
			done(err);
		})
	})

	it('readdir by promise should be ok', function() {
		// 需要将 Promise 返回，否则无法错误处理 
		return new Promise(function(resolve, reject) {
			fs.readdir(__dirname, function(err, result) {
				if (err) {
					reject(err);
				} else {
					resolve(result)
				}
			})
		})
		.then(function(result) {
			expect(result).to.include('tmp');
		})
	})

	it('readdir by async/await should be ok', async function() {
		var result = await new Promise(function(resolve, reject) {
			fs.readdir(__dirname, function(err, result) {
				if (err) {
					reject(err);
				} else {
					resolve(result)
				}
			})
		})
		
		expect(result).to.include('tmp');
	})
}) 


