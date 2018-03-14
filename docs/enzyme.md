Enzyme 是一个 React 测试类库，它是在 React TestUtils 基础上，实现了一套与 jQuery 访问 DOM 相似的 API，最终使 React 组件的断言、操作和遍历等操作更加方便。Enzyme 依赖的 [cheerio](https://www.npmjs.com/package/cheerio) 可在 server 端实现类似 jQuery 的 API。

使用 Enzyme 需要通过 npm 将 `enzyme` 安装到项目中，除此之外还要根据 React 的版本安装对应的 adapter，如果使用 React 15 还需要安装测试的工具 `react-test-renderer`. 具体的安装细节可以参考 [Enzyme 安装文档](http://airbnb.io/enzyme/docs/installation/)

Enzyme 并没有限制测试工具和断言库的选择，它可以与 Mocha、Jest、Karma 等测试工具搭配使用。


Enzyme 提供三种[渲染模式](http://airbnb.io/enzyme/docs/api/) ：

- [`shallow`](http://airbnb.io/enzyme/docs/api/shallow.html)

	对单个组件做单元测试时，不需关注它的子组件，因为它的子组件也会有自己的单元测试。为了提高测试的效率，可以只对当前组件的交互进行测试，`shallow` 将父子组件进行隔离，只对当前组件进行渲染，而且不需要生成 DOM（[react-shallow-render](https://reactjs.org/docs/shallow-renderer.html)）。建议 React 组件的单元测试使用 `shallow`([whats-the-prefered-way-to-test-react-js-components](https://discuss.reactjs.org/t/whats-the-prefered-way-to-test-react-js-components/26))，花费的代价比较低。
	
- [`mount`](http://airbnb.io/enzyme/docs/api/mount.html)

	如果组件用例中需要使用 DOM API 或者 对组件的生命周期进行测试，这时就需要通过 `mount` 将组件整个DOM结构渲染出来（[react-test-renderer](https://reactjs.org/docs/test-renderer.html)），

- [`render`](http://airbnb.io/enzyme/docs/api/render.html)
	
	与前两者的不同的是，`render` 关注的是组件渲染出静态的 HTML。
	
	
相关资料

- [https://jonbellah.com/articles/intro-react-testing/](https://jonbellah.com/articles/intro-react-testing/)
- [https://www.toptal.com/react/tdd-react-unit-testing-enzyme-jest](https://www.toptal.com/react/tdd-react-unit-testing-enzyme-jest)
- [https://www.fullstackreact.com/30-days-of-react/day-25/](https://www.fullstackreact.com/30-days-of-react/day-25/)
- [React应用下的单元测试](http://www.aliued.com/?p=4095)
- [Enzyme： 测试React](https://www.jianshu.com/p/2e6a34f83f0f)