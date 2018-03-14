# 前端测试相关介绍

## 前端需要测试

开发过程往往不会一蹴而就，通常会经过一系列的迭代，包括功能迭代、bug 的修复、优化重构等。那么在持续迭代过程中，如何保证新功能的可靠性以及已有功能的稳定性呢？



这时就需要通过测试来保证质量，对于新增功能进行测试可确保功能被正确实现；对于原有功能进行回归测试，确保已有功能不受影响。

## 测试相关概念

- 单元测试：对一个小的单元模块（可以是一个函数或者一个类）进行测试。

- 集成测试：将多个模块一起测试，保证各个模块之间配合正确。

- 端到端测试：也称作E2E 测试，模拟真实用户场景进行测试。

其中，[三种测试关系呈金字塔形](https://testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html), [建议比例为 70% 20% %10](https://codeahoy.com/2016/07/05/unit-integration-and-end-to-end-tests-finding-the-right-balance/)：

![testing pyramid ](https://2.bp.blogspot.com/-YTzv_O4TnkA/VTgexlumP1I/AAAAAAAAAJ8/57-rnwyvP6g/s1600/image02.png)

而前端需要关注的是 **单元测试** 和 **E2E 测试**

## 测试工具

工具分类

- **test runner**: 测试管理工具，用来组织和运行整个测试的工具，它能够将测试框架、断言库、测试浏览器、测试代码和被测试代码组织起来，并运行被测试代码进行测试。
相关工具如下：

	- Selenium
	- WebDriver/Selenium 2
	- JsTestDriver
	- HTML Runners
	- Karma 

	
	>
	相关资料
	>
	- [Karma 介绍](https://github.com/karma-runner/karma/raw/master/thesis.pdf) / [中文简介](http://taobaofed.org/blog/2016/01/08/karma-origin/)
	- [前端自动化单元测试初探 (Karma)](https://www.jianshu.com/p/6726c0410650)

- **test framework**: 测试框架，是单元测试的核心，它提供了单元测试所需的各种API，你可以使用它们来对你的代码进行单元测试。相关工具如下：
	- Mocha 
	- Ava
	- Jasmine
	- Jest

	>
	相关资料
	>
	- [JavaScript 测试框架列表](https://en.wikipedia.org/wiki/List_of_unit_testing_frameworks#JavaScript)
	- [前端测试框架介绍](https://raygun.com/blog/javascript-unit-testing-frameworks/)
	- [React 与 单元测试 （Ava）](http://insights.thoughtworks.cn/react-and-unit-testing/)
	- [前端自动化测试探析 （mocha）](http://imweb.io/topic/5833d14cf8a1d5546059a301)
	- [React 单元测试（Jest Enzyme）](https://www.toptal.com/react/tdd-react-unit-testing-enzyme-jest)
	- [Mocha/Ava/Jest 对比](https://github.com/koajs/koa/issues/703)

- **assertion library**: 断言库，为单元测试描述具体的测试用例。相关工具如下：
	- Should.js
	- Expect.js
	- Chai.js
- **test coverage**: 测试覆盖率统计。相关工具如下：
	- Istanbul

- **test utility**: 测试工具，在测试中提供一些额外的功能，可以帮助开发者更高效的进行单元测试。相关工具如下：
	- Enzyme
	- CasperJs

- **mock library**: mock 库，进行数据、资源等仿造。相关工具如下：
	- Sinon

- **headless browser**: 无头浏览器，提供浏览器环境。相关工具如下：
	- PhantomJS
	- Puppeteer
	
	>
	相关资料
	>
	- [无头浏览器测试介绍](https://www.joecolantonio.com/2017/09/21/headless-browser-testing-pros-cons/)

- **automated browser**: 浏览器自动化测试，端到端测试。相关工具如下：
	- Nightwatch
	- Nightmare
	
	>
	相关资料
	>
	- [Nightmare 测试简介](http://gewenmao.github.io/2016/web/how-to-use-nightmare-for-web-page-test)

