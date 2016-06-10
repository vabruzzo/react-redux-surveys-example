/**
 * External dependencies
 */
import { combineReducers } from 'redux';

/**
 * Internal dependencies
 */
import session from './session';
import surveys from './surveys';

const reducers = combineReducers({
  session,
  surveys,
});

export default reducers;
