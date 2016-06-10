/**
 * Internal dependencies
 */
import * as types from '../constants/ActionTypes';

export function signInRequest(name) {
  return {
    type: types.SIGN_IN_REQUEST,
    name,
  };
}

export function signInSuccess(name, isAdmin) {
  return {
    type: types.SIGN_IN_SUCCESS,
    name,
    isAdmin,
  };
}

export function signInFailure() {
  return {
    type: types.SIGN_IN_FAILURE,
  };
}

export function signInUser(name) {
  // normally this would make an AJAX request for signing in
  return dispatch => {
    const isAdmin = (name === 'rhaegar');

    dispatch(signInRequest(name));
    dispatch(signInSuccess(name, isAdmin));

    // error handling for normal sign ins via AJAX, catch err =>
    // dispatch(signInFailure());
  };
}
