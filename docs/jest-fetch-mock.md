# jest-fetch-mock

在做测试用例的时候，某些组件会用 [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) 请求数据，那么如何处理数据请求呢？
很直观的两种方式是：

- **Mock Server** 启动 Server，Mock 接口请求的数据 
- **Mock Fetch** 对 Fetch 做 Mock，重写 Fetch 实现

Mock Server 方式存在的问题在于：1. 启动 Server 增加维护成本；2. 通常 NodeJS 不支持 Fetch。
因此方法二才是更好的选择，Mock Fetch 已经有现成的工具支持，例如 [jest-fetch-mock](https://www.npmjs.com/package/jest-fetch-mock)

jest-fetch-mock 用 `jest.fn` 将 fetch 方法重新实现，返回一个自定义的 [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response/Response)，具体可见[源码实现](https://github.com/jefflau/jest-fetch-mock/blob/master/src/index.js)。

使用示例如下：

```js
// 配置 jest 的 setupFile，开启 fetch mock
require('jest-fetch-mock').enableMocks();
```

```js
// mock 接口返回的 Response
fetch.mockResponse(req => {
  const path = req.url.split('?')[0];
  if (path === '/api/abc/xyz') {
    const body = {
      data: 'this is body data'
    }

    // Promise.resolve 的参数会作为请求响应 Response 中的 body 进行处理
    // 该参数是 String 类型时，会解析生产 body 类型为 [ReadableStream](https://developer.mozilla.org/en-US/docs/Web/API/Response/Response)Read
    // 其他的解析逻辑还要参考源码
    return Promise.resolve(JSON.stringify(body));
  }
  return Promise.resolve(JSON.stringify({}));
});
```

```js

fetch('/api/abc/xyz')
  .then(res => res.json())
  .then(res => {
    console.log(res.data); // this is body data
  })
```
