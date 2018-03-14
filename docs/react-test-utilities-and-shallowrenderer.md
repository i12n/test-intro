# React Test Utilities & ShallowRenderer

ReactTestUtils 和 ShallowRenderer 在测试中比较常用。

## ReactTestUtils
[ReactTestUtils](https://reactjs.org/docs/test-utils.html) 为 React 测试提供一些 API, 这些 API 可以在其他测试框架中使用。

- Simulate.{eventName}(element, [eventData]): 用于模拟事件，如 click、change 等，[代码示例](https://codepen.io/anon/pen/geOzXL?editors=0111) [事件类型](https://reactjs.org/docs/events.html#keyboard-events)
- renderIntoDocument(): 将React元素渲染到一个独立的DOM节点，需要DOM的支持
	> 
	```
	renderIntoDocument: function(element) {
      var div = document.createElement('div');
      // None of our tests actually require attaching the container to the
      // DOM, and doing so creates a mess that we rely on test isolation to
      // clean up, so we're going to stop honoring the name of this method
      // (and probably rename it eventually) if no problems arise.
      // document.documentElement.appendChild(div);
      return ReactDOM.render(element, div);
  	}
	```
	
  > [renderIntoDocument 实现源码](https://github.com/facebook/react/blob/v16.2.0/packages/react-dom/src/test-utils/ReactTestUtils.js#L92)
  

- mockComponent(): 废弃，建议用[shallow-renderer](https://reactjs.org/docs/shallow-renderer.html)
- isElement(element): 判断是否是 React 元素
- isElementOfType(element, componentClass): 判断 `element` 是否是 `componentClass` 类型
- isDOMComponent(instance): 判断 `instance` 是否是 DOM component（div、span 等）
- isCompositeComponent(instance): 判断 `instance` 是否是 composite component (用户自定义组件)
- isCompositeComponentWithType(instance, componentClass): 判断 `instance` 是否是 `componentClass` 类型
- findAllInRenderedTree(tree, test): 遍历 `tree`, 匹配出符合 `test(component)` 为true 的组件 (instances & elements)
- scryRenderedDOMComponentsWithClass(tree, className): 匹配出 `tree` 中匹配 `className` 的 DOM elements（DOM components'）
- findRenderedDOMComponentWithClass(): 与 scryRenderedDOMComponentsWithClass 功能类似, 只返回一个 element, 多于一个报异常
- scryRenderedDOMComponentsWithTag(tree, tagName): 匹配出 `tree` 中匹配 `tagName` 的 DOM elements (DOM components')
- findRenderedDOMComponentWithTag(tree, tagName): 与 scryRenderedDOMComponentsWithTag 类似, 只返回一个 element, 多于一个报异常
- scryRenderedComponentsWithType(tree, componentClass): 匹配出 `tree` 中与 `componentClass` 一致的组件 (composite component instance)
- findRenderedComponentWithType(tree, componentClass): 与 scryRenderedComponentsWithType 类似, 只返回一个 component, 多于一个报异常

具体的示例可以参考 [ReactTestUtils test](https://github.com/facebook/react/blob/v16.2.0/packages/react-dom/src/__tests__/ReactTestUtils-test.js)

明确几个概念：

1. **instance** - 组件 render 之后的得到结果是 instance
	
	```
	const container = document.createElement('div');
	const instance = ReactDOM.render(
	  <input type="text" />,
	  container,
	);

	const instance = ReactTestUtils.renderIntoDocument(<MyComponent />);
	```
2. **element** - DOM element (DOM node)
	
	```
	const node = ReactDOM.findDOMNode(instance)
	```
	> When the `ref` attribute is used on a custom component declared as a class, the ref callback receives the mounted instance of the component as its argument.
	> When the `ref` attribute is used on an HTML element, the ref callback receives the underlying DOM element as its argument.
	
3. **Composite Component** - 用户定义的组件 (custom component)
4. **DOM Component** - HTML element 对应的组件



## ShallowRenderer

[ShallowRenderer](https://reactjs.org/docs/shallow-renderer.html) 用于单元测试渲染组件。特点如下：

1. 只将当前组件渲染成虚拟 DOM 对象，所有子组件不进行渲染（单元测试不需要关注子组件）
2. 不需要 DOM 环境 （提升了测试速度）



