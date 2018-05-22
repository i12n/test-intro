/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app';

const div = document.createElement('div');
div.setAttribute('id', 'app');
document.body.appendChild(div);

function render(Component) {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>, div
  );
}

render(App);

if (module.hot) {
  module.hot.accept('./app', () => {
    const NewApp = require('./app').default;
    render(NewApp);
  });
}

/* function render(App) {
  ReactDOM.render(<App />, div)
}

 if (module.hot) {
    module.hot.accept('./component', function() {
      const NewApp = require('./component').default
      render(NewApp)
    })
 }
 */
/*
if (module.hot) {
  module.hot.accept('./component', () => { console.log(1111111); render(App) })
}
*/
