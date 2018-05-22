# Mocha

[Mocha](https://mochajs.org) 是一个JavaScript测试框架，可以支持 Node.js 和浏览器。

## Mocha API
- **describe** - 用于组织 test suite 结构
  
	```
	describe(string, callback)
	```
	
	> [what-is-the-role-of-describe-in-mocha](https://stackoverflow.com/questions/19298118/what-is-the-role-of-describe-in-mocha)

- **it** - 具体的测试用例
	
	```
	it(string, callback)
	```
	
## Mocha Hooks
Mocha 提供的 hooks 有四个： before/after/beforeEach/afterEach，用于设置测试的先决条件或者对测试进行清理，具体用法如下：

```
	describe('hooks', function() {	
		before(function() {
	        // 在这个区块内的所有测试之前运行
	    })
	    after(function () {
	        // 在这个区块内的所有测试之后运行
	    })
	    beforeEach(function () {
	        // 在这个区块内的每个测试运行之前运行
	    })
	    afterEach(function () {
	        // 在这个区块内的每个测试之后运行
	    })
	})
```

## Mocha 异步

Mocha 支持异步回调函数、Promise、await/async 三种异步调用方式：

- 异步回调函数

	```
	  it('readdir by callback should be ok', function(done) {
	    fs.readdir(__dirname, function(err, result) {
	      expect(result).to.include('tmp');
	      // 需要执行 done，否则会超时
	      done(err);
	    })
	  })
	```
需要执行 done 告知 用例已经执行完毕。

- Promise

	```
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
	```
	需要将 Promise 返回，这样才能处理断言不成立的情况。
	
- await/async
	
	```
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
	```

## 测试报告格式

Mocha 提供了多种输出格式：

- dot - dot matrix
- doc - html documentation
- spec - hierarchical spec list
- json - single json object
- progress - progress bar
- list - spec-style listing
- tap - test-anything-protocol
- landing - unicode landing strip
- xunit - xunit reporter
- min - minimal reporter (great with --watch)
- json-stream - newline delimited json events
- markdown - markdown documentation (github flavour)
- nyan - nyan cat!

Mocha 默认的输出格式为 spec，更改输出格式可以用 `--reporter`，例如：

```
	mocha --reporter <dot|json|markdown|...>
```

## 浏览器支持

Mocha 支持在浏览器环境下进行测试，并且支持自动生成相关的 HTML 等文件，命令如下：

```
mocha init <path>
``` 
会生成下列文件

- mocha.css - 样式文件
- tests.js  - 测试用例
- index.html - html 文件
- mocha.js - mocha 

这里面并没有提供断言库，需要自己去手动添加用到的断言库

浏览器运行 mocha 步骤下：

- mocha.setup 设置相关配置
- 加载测试用例文件
- mocha.run


## 其他
- timeout 设置超时时间(默认 2000 ms)：

	```
	describe('a suite of tests', function() {
	  this.timeout(500);
	
	  it('should take less than 500ms', function(done){
	    setTimeout(done, 300);
	  });
	
	  it('should take less than 500ms as well', function(done){
	    setTimeout(done, 250);
	  });
	})
	```
