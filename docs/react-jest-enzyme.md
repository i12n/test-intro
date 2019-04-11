# 使用 Jest 和 Enzyme 进行 React 测试

1. 准备工作

	```
	# 安装 jest
	npm install jest 

	# babel-jest 提供 babel 支持
	npm install babel-jest

	# 安装 enzyme
	npm install enzyme

	# enzyme-adapter-react-16 与 React 版本对应
	npm install enzyme-adapter-react-16

	# 用于快照
	npm install enzyme-to-json
	```

2. 设置 .babelrc
 
	```
	"env": {
    "test": {
      "presets": ["env", "react", "stage-0"]
    }
  }
	```

	启动 jest 之后，BABEL_ENV 为 test

3.  jest 配置文件

	```
	module.exports = {
	  moduleFileExtensions: [
	    'js',
	    'jsx',
	  ],
	  moduleNameMapper: {
	    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': './mocks/fileMock.js',
	    '.*\\.(css|less|scss)$': './mocks/styleMock.js',
	  },
	  transform: {
	    '^.+\\.jsx?$': 'babel-jest',
	  },
	  testRegex: '/test/.*(\\.test)\\.jsx?$', // '(/tests/.*|(\\.|/)(test|spec))\\.jsx?$'
	  setupFiles: [
	    './test/setup.js',
	  ],
	  snapshotSerializers: ['enzyme-to-json/serializer'],
	};
	```

4. setup

	```
	import { configure } from 'enzyme';
	import Adapter from 'enzyme-adapter-react-16';

	configure({ adapter: new Adapter() });
	```
5. 实现相关测试用例
6. 测试用例覆盖

	```
	jest --coverage
	```
