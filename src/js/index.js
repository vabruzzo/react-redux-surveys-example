/**
 * External dependencies
 */
import 'react-hot-loader/patch';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

/**
 * Internal dependencies
 */
import configureStore from './store/configureStore';
import App from './containers/App.jsx';
import '../css/app.css';

const store = configureStore();
const app = document.getElementById('app');

render(
  <AppContainer>
    <App store={store} />
  </AppContainer>,
  app
);

// TODO: webpack 2 will allow us to remove the NextApp/require ugliness
if (module.hot) {
  module.hot.accept('./containers/App.jsx', () => {
    const NextApp = require('./containers/App.jsx').default;

    render(
      <AppContainer>
        <NextApp store={store} />
      </AppContainer>,
      app
    );
  });
}
