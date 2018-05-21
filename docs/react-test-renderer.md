# React Test Renderer

[React TestRenderer](https://reactjs.org/docs/test-renderer.html) 将 React 组件渲染成 JavaScript 对象，而且不需要 DOM 环境支持。
使用这个库可以非常方便的获取组件渲染的层级快照（类似于 DOM 树）。

React TestRenderer 提供了如下API：

1. **TestRenderer**
	- **TestRenderer.create(element, options)**: 在内存中将组件进行渲染，返回一个 TestRenderer instance
		
		```
		import TestRenderer from 'react-test-renderer';
		const testRenderer = TestRenderer.create(<MyComponent />);
		```

2. **TestRenderer instance**
	- **testRenderer.toJSON()**: 用于产生快照
	
		```
		{ 
			type: 'div',
			props: { className: 'plus-container' },
			children: [ 
				{ type: 'span', props: [Object], children: [Array] },
			 	{ type: 'button', props: [Object], children: [Array] }
			] 
		}
		```
	- **testRenderer.toTree()**: 返回组件渲染树
	- **testRenderer.update(element)**: 触发更新
	- **testRenderer.unmount()**: 卸载
	- **testRenderer.getInstance()**: root 元素对应的实例
		
		```
		Button {
		  props: { count: 0, onClick: [Function: onClick] },
		  context: {},
		  refs: {},
		  updater:
		   { isMounted: [Function: isMounted],
		     enqueueSetState: [Function: enqueueSetState],
		     enqueueReplaceState: [Function: enqueueReplaceState],
		     enqueueForceUpdate: [Function: enqueueForceUpdate] },
		  state: { count: 0 },
		  _reactInternalFiber:
		   FiberNode {
		     tag: 2,
		     key: null,
		     type: { [Function: Button] defaultProps: [Object], propTypes: [Object] },
		     stateNode: [Circular],
		     return:
		      FiberNode {
		        tag: 3,
		        key: null,
		        type: null,
		        stateNode: [Object],
		        return: null,
		        child: [Circular],
		        sibling: null,
		        index: 0,
		        ref: null,
		        pendingProps: null,
		        memoizedProps: null,
		        updateQueue: null,
		        memoizedState: [Object],
		        mode: 0,
		        effectTag: 0,
		        nextEffect: null,
		        firstEffect: [Circular],
		        lastEffect: [Circular],
		        expirationTime: 0,
		        alternate: [Object],
		        _debugID: 1,
		        _debugSource: null,
		        _debugOwner: null,
		        _debugIsCurrentlyTiming: false },
		     child:
		      FiberNode {
		        tag: 5,
		        key: null,
		        type: 'div',
		        stateNode: [Object],
		        return: [Circular],
		        child: [Object],
		        sibling: null,
		        index: 0,
		        ref: null,
		        pendingProps: [Object],
		        memoizedProps: [Object],
		        updateQueue: null,
		        memoizedState: null,
		        mode: 0,
		        effectTag: 0,
		        nextEffect: null,
		        firstEffect: null,
		        lastEffect: null,
		        expirationTime: 0,
		        alternate: null,
		        _debugID: 4,
		        _debugSource: null,
		        _debugOwner: [Circular],
		        _debugIsCurrentlyTiming: false },
		     sibling: null,
		     index: 0,
		     ref: null,
		     pendingProps: { count: 0, onClick: [Function: onClick] },
		     memoizedProps: { count: 0, onClick: [Function: onClick] },
		     updateQueue: null,
		     memoizedState: { count: 0 },
		     mode: 0,
		     effectTag: 1,
		     nextEffect: null,
		     firstEffect: null,
		     lastEffect: null,
		     expirationTime: 0,
		     alternate: null,
		     _debugID: 3,
		     _debugSource: null,
		     _debugOwner: null,
		     _debugIsCurrentlyTiming: false },
		  _reactInternalInstance: {} }
		```
	
	- **testRenderer.root**: root test instance

		```
		ReactTestInstance {
		  _fiber:
		   FiberNode {
		     tag: 2,
		     key: null,
		     type: { [Function: Button] defaultProps: [Object], propTypes: [Object] },
		     stateNode:
		      Button {
		        props: [Object],
		        context: {},
		        refs: {},
		        updater: [Object],
		        state: [Object],
		        _reactInternalFiber: [Circular],
		        _reactInternalInstance: {} },
		     return:
		      FiberNode {
		        tag: 3,
		        key: null,
		        type: null,
		        stateNode: [Object],
		        return: null,
		        child: [Circular],
		        sibling: null,
		        index: 0,
		        ref: null,
		        pendingProps: null,
		        memoizedProps: null,
		        updateQueue: null,
		        memoizedState: [Object],
		        mode: 0,
		        effectTag: 0,
		        nextEffect: null,
		        firstEffect: [Circular],
		        lastEffect: [Circular],
		        expirationTime: 0,
		        alternate: [Object],
		        _debugID: 1,
		        _debugSource: null,
		        _debugOwner: null,
		        _debugIsCurrentlyTiming: false },
		     child:
		      FiberNode {
		        tag: 5,
		        key: null,
		        type: 'div',
		        stateNode: [Object],
		        return: [Circular],
		        child: [Object],
		        sibling: null,
		        index: 0,
		        ref: null,
		        pendingProps: [Object],
		        memoizedProps: [Object],
		        updateQueue: null,
		        memoizedState: null,
		        mode: 0,
		        effectTag: 0,
		        nextEffect: null,
		        firstEffect: null,
		        lastEffect: null,
		        expirationTime: 0,
		        alternate: null,
		        _debugID: 4,
		        _debugSource: null,
		        _debugOwner: [Circular],
		        _debugIsCurrentlyTiming: false },
		     sibling: null,
		     index: 0,
		     ref: null,
		     pendingProps: { count: 0, onClick: [Function: onClick] },
		     memoizedProps: { count: 0, onClick: [Function: onClick] },
		     updateQueue: null,
		     memoizedState: { count: 0 },
		     mode: 0,
		     effectTag: 1,
		     nextEffect: null,
		     firstEffect: null,
		     lastEffect: null,
		     expirationTime: 0,
		     alternate: null,
		     _debugID: 3,
		     _debugSource: null,
		     _debugOwner: null,
		     _debugIsCurrentlyTiming: false }
		}
		```
	
3. **TestInstance** 
	- **testInstance.find()**
	- **testInstance.findByType()**
	- **testInstance.findByProps()**
	- **testInstance.findAll()**
	- **testInstance.findAllByType()**
	- **testInstance.findAllByProps()**
	- **testInstance.instance**
	- **testInstance.type**
	- **testInstance.props**
	- **testInstance.parent**
	- **testInstance.children**