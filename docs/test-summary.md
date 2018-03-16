# 前端自动化测试介绍

## 测试必要性

开发过程往往不会一蹴而就，通常会经过一系列的迭代，包括功能迭代、bug 的修复、优化重构等。那么在持续迭代过程中，如何保证新功能的可靠性以及已有功能的稳定性呢？

<img src="https://github.com/gewenmao/test-intro/blob/master/images/iterative-development.png" width="431px" height="230px" />

这时就需要通过测试来保证质量，对于新增功能进行测试可确保功能被正确实现；对于原有功能进行回归测试，确保已有功能不受影响。

<img src="https://github.com/gewenmao/test-intro/blob/master/images/iterative-development-with-test.png" width="431px" height="256px" />

## 测试相关概念

- 单元测试：对一个小的单元模块（可以是一个函数或者一个类）进行测试。

- 集成测试：将多个模块一起测试，保证各个模块之间配合正确。

- 端到端测试：也称作E2E 测试，模拟真实用户场景进行测试。

其中，[三种测试关系呈金字塔形](https://testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html), [建议比例为 70% 20% %10](https://codeahoy.com/2016/07/05/unit-integration-and-end-to-end-tests-finding-the-right-balance/)：

![testing pyramid ](https://2.bp.blogspot.com/-YTzv_O4TnkA/VTgexlumP1I/AAAAAAAAAJ8/57-rnwyvP6g/s1600/image02.png)

而前端需要关注的是 **单元测试** 和 **E2E 测试**

## 测试方式

测试方式主要有两种，手工测试和自动化测试。与手工测试相比，自动化测试优点在于可以减少人工维护成本，并且测试过程更加可控。自动化测试依赖测试工具，需要编写测试用例脚本，以供测试工具使用。

```
自动化的收益 = 迭代次数 * 全手动执行成本 - 首次自动化成本 - 维护次数 * 维护成本
```

## 测试工具

工具分类

- **test runner**: 测试管理工具，用来组织和运行整个测试的工具，它能够将测试框架、断言库、测试浏览器、测试代码和被测试代码组织起来，并运行被测试代码进行测试。
相关工具如下：

	- [Selenium](https://www.seleniumhq.org/) - Automating web applications for testing purposes
	- [WebDriver/Selenium 2](https://www.seleniumhq.org/projects/webdriver/) - WebDriver + Selenium 1.0
	- [JsTestDriver](https://code.google.com/archive/p/js-test-driver/) - JsTestDriver aims to help javascript developers use good TDD practices and aims to make writing unit tests as easy as what already exists today for java with JUnit
	- [Karma](http://karma-runner.github.io/2.0/index.html) - he main purpose of Karma is to make your test-driven development easy, fast, and fun.
	
	>
	> 相关资料
	>
	> - [Karma 介绍](https://github.com/karma-runner/karma/raw/master/thesis.pdf) / [中文简介](http://taobaofed.org/blog/2016/01/08/karma-origin/)
	> - [前端自动化单元测试初探 (Karma)](https://www.jianshu.com/p/6726c0410650)

- **test framework**: 测试框架，是单元测试的核心，它提供了单元测试所需的各种API，你可以使用它们来对你的代码进行单元测试。相关工具如下：
	- [Mocha](https://mochajs.org/) - Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun.
	- [Ava](https://github.com/avajs/ava) - Futuristic JavaScript test runner.
	- [Jasmine](https://jasmine.github.io/) - Jasmine is a Behavior Driven Development testing framework for JavaScript.
	- [Jest](https://facebook.github.io/jest/) - Jest is used to test all JavaScript code including React applications. 
	- [Tape](https://github.com/substack/tape) - Tap-producing test harness for node and browsers

	>
	> 相关资料
	>
	> - [JavaScript 测试框架列表](https://en.wikipedia.org/wiki/List_of_unit_testing_frameworks#JavaScript)
	> - [前端测试框架介绍](https://raygun.com/blog/javascript-unit-testing-frameworks/)
	> - [React 与 单元测试 （Ava）](http://insights.thoughtworks.cn/react-and-unit-testing/)
	> - [前端自动化测试探析 （mocha）](http://imweb.io/topic/5833d14cf8a1d5546059a301)
	> - [React 单元测试（Jest Enzyme）](https://www.toptal.com/react/tdd-react-unit-testing-enzyme-jest)
	> - [Mocha/Ava/Jest 对比](https://github.com/koajs/koa/issues/703)

- **assertion library**: 断言库，为单元测试描述具体的测试用例。相关工具如下：
	- [shoud.js](https://github.com/shouldjs/should.js) - should is an expressive, readable, framework-agnostic assertion library. 
	- [expect.js](https://github.com/Automattic/expect.js) - Minimalistic BDD assertion toolkit based on should.js.
	- [chai.js](http://www.chaijs.com/) - Chai is a BDD / TDD assertion library for node and the browser.

- **test coverage**: 测试覆盖率统计。相关工具如下：
	- [Istanbul](https://istanbul.js.org/) - JavaScript test coverage made simple.

- **test utility**: 测试工具，在测试中提供一些额外的功能，可以帮助开发者更高效的进行单元测试。相关工具如下：
	- [Enzyme](https://github.com/airbnb/enzyme) - JavaScript Testing utilities for React.
	- [CasperJs](http://casperjs.org/) - Navigation scripting & testing for PhantomJS and SlimerJS

- **mock library**: mock 库，进行数据、资源等仿造。相关工具如下：
	- [Sinon](http://sinonjs.org/) - Standalone test spies, stubs and mocks for JavaScript.

- **headless browser**: 无头浏览器，提供浏览器环境。相关工具如下：
	- [PhantomJS](http://phantomjs.org/) - PhantomJS is a headless WebKit scriptable with a JavaScript API. 
	- [Puppeteer](https://github.com/GoogleChrome/puppeteer) - Puppeteer is a Node library which provides a high-level API to control headless Chrome or Chromium over the DevTools Protocol.
	
	>
	> 相关资料
	>
	> - [无头浏览器测试介绍](https://www.joecolantonio.com/2017/09/21/headless-browser-testing-pros-cons/)

- **automated browser**: 浏览器自动化测试，端到端测试。相关工具如下：
	- [Nightwatch](http://nightwatchjs.org/) - Write End-to-End tests in Node.js quickly and effortlessly that run against a Selenium/WebDriver server.
	- [Nightmare](http://www.nightmarejs.org/) - A high-level browser automation library.
	
	>
	> 相关资料
	>
	> - [Nightmare 测试简介](http://gewenmao.github.io/2016/web/how-to-use-nightmare-for-web-page-test)
	
## 测试内容

- 类库单元测试
	- browser
	- node
- UI组件测试
	- UI 展示 - 像素对比、DOM 对比
	- 交互 - 事件模拟
- 多端适配
	- 多浏览器兼容
	- 多设备支持

## 相关资料

- [http://fex.baidu.com/blog/2015/07/front-end-test/](http://fex.baidu.com/blog/2015/07/front-end-test/)
- [https://www.zhihu.com/question/29922082](https://www.zhihu.com/question/29922082)
- [https://rupl.github.io/frontend-testing/#/](https://rupl.github.io/frontend-testing/#/)

