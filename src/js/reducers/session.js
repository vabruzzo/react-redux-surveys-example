/**
 * Internal dependencies
 */
import { SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAILURE } from '../constants/ActionTypes';

export default function session(
  state = {
    isLoggedIn: false,
    isAdmin: false,
    userName: '',
  }, action) {
  if (action === undefined || action === {}) return state;

  switch (action.type) {
    case SIGN_IN_REQUEST:
      return Object.assign({}, state, {
        userName: action.name,
      });
    case SIGN_IN_SUCCESS:
      return Object.assign({}, state, {
        isLoggedIn: true,
        isAdmin: action.isAdmin,
        userName: action.name,
      });
    case SIGN_IN_FAILURE:
      return Object.assign({}, state, {
        isLoggedIn: false,
        isAdmin: false,
        userName: '',
      });
    default:
      return state;
  }
}
