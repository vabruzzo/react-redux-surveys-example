/**
 * External dependencies
 */
import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

/**
 * Internal dependencies
 */
import getRoutes from '../routes';

const propTypes = {
  // store: redux store
  store: PropTypes.object.isRequired,
};

/**
 * Component
 */
function App({ store }) {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        {getRoutes()}
      </Router>
    </Provider>
  );
}

App.propTypes = propTypes;

export default App;
