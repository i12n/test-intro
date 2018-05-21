# React 测试

React 提供了三种测试方法：react-dom/test-utils、react-test-render、react-test-renderer/shallow, 三种方法对应了不同的测试场景。

|                             | DOM          | Event     | Snapshot | Render
| --------                    | :----:       | :----:    | :----:   | ----
| react-dom/test-utils        | Require      | Simulate  | --       | Full Deep, DOM Tree
| react-test-renderer         | --           | --        | JSON     | Full Deep, JavaScript Object
| react-test-renderer/shallow | --           | --        | --       | One Level Deep, JavaScript Object


react-dom/test-utils 可以将 React 组件渲染成 DOM 树，并且提供了在 DOM 树上的查找节点的 API，以及查找组件 instance 的 API; 由于 react-dom/test-utils 需要渲染 DOM 树，所以在执行速度上会有影响。

react-test-renderer 将 React 组件渲染成一个 JavaScript 对象（类似于 DOM 树），通过 API 个已查找各个组件的 instance，不提供 DOM 节点信息

react-test-renderer/shallow 只 render 最高层的组件，其余部分则存在于 React elements tree 中。