## ShallowRenderer

[ShallowRenderer](https://reactjs.org/docs/shallow-renderer.html) 用于单元测试渲染组件。特点如下：

1. 只将当前组件进行渲染，所有子组件不进行渲染（单元测试不需要关注子组件）
2. 不需要 DOM 环境 （提升了测试速度）

ShallowRenderer 提供了以下几个 API：

- createRenderer(element)
	
	```
	import ShallowRenderer from 'react-test-renderer/shallow';
	const shallowRenderer = ShallowRenderer.createRenderer();
  shallowRenderer.render(<SomeComponent foo={1} />);
	```
	与下面的等价：

	```
	import ShallowRenderer from 'react-test-renderer/shallow';
	const shallowRenderer = new ShallowRenderer();
	shallowRenderer.render(<MyComponent />);
	```

	createRenderer 是 ShowRenderer 的一个 static 方法，返回的是 ShallowRenderer 的一个实例，[具体细节见源码](https://github.com/facebook/react/blob/399b14d1907508c9a1a26ef4b24afc381bb76783/packages/react-test-renderer/src/ReactShallowRenderer.js#L40)

- getRenderOutput()

	将渲染的结果输出，要注意的是，一旦渲染发生变化，都要通过 getRenderOutput 获取最新的渲染结果。

	```
	shallowRenderer.getRenderOutput()
	```
	渲染结果：
	
	```
	{ 
	  '$$typeof': Symbol(react.element),
	  type: 'div',
	  key: null,
	  ref: null,
	  props:
	   { className: 'plus-container',
	     children: [ [Object], [Object] ] },
	  _owner: null,
	  _store: {} 
  }
	```

- getMountedInstance()

	获取元素对应的实例对象

	```
	shallowRenderer.getMountedInstance()
	```
	实例对象：
	
	```
	Button {
	  props: { count: 0, onClick: [Function: onClick] },
	  context: {},
	  refs: {},
	  updater:
	   Updater {
	     _renderer:
	      ReactShallowRenderer {
	        _context: {},
	        _element: [Object],
	        _instance: [Circular],
	        _newState: null,
	        _rendered: [Object],
	        _rendering: false,
	        _forcedUpdate: false,
	        _updater: [Circular] },
	     _callbacks: [] },
	  state: { count: 0 }
	 }
	```
	
	
