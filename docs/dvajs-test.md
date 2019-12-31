# dvajs test

对于 [umijs](https://umijs.org) 框架下的一些组件，会用到 [dvajs](https://dvajs.com) 进行状态管理：

```js
import React from 'react';
import { connect } from 'dva';

@connect(({ model }) => ({ model }))
class ABC extends React.Component {
 /// ... ...
}
```

对于这类组件单元测试用例的编写需要处理全局的状态，解决方式如下：

```js
import dva from 'dva';

/// 编写测试用例
test('ABC test', () => {
  // 参照 https://github.com/dvajs/dva/tree/master/packages/dva/test
  const app = dva();
  app.model({ ...tags });
  app.router(() => <ABC />);

  const wrapper = mount(React.createElement(app.start()));
})
```
