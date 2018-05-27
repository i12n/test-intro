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
