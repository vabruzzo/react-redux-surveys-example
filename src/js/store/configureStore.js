/**
 * External dependencies
 */
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

/**
 * Internal dependencies
 */
import rootReducer from '../reducers';

const enhancer = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers').default)
    );
  }

  return store;
}
