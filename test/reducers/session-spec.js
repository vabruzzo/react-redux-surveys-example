/**
 * External dependencies
 */
import { expect } from 'chai';

/**
 * Internal dependencies
 */
import reducer from '../../src/js/reducers/session';
import * as types from '../../src/js/constants/ActionTypes.js';

describe('session reducer', () => {
  it('returns initial state if passed undefined action', () => {
    expect(reducer(
      undefined, {})
    ).to.eql({
      isLoggedIn: false,
      isAdmin: false,
      userName: '',
    });
  });

  it('should handle SIGN_IN_SUCCESS', () => {
    expect(reducer(
      {
        isLoggedIn: false,
        isAdmin: false,
        userName: '',
      }, {
        type: types.SIGN_IN_SUCCESS,
        isAdmin: false,
        name: 'Arya',
      })
    ).to.eql({
      isLoggedIn: true,
      isAdmin: false,
      userName: 'Arya',
    });
  });

  it('should handle SIGN_IN_FAILURE', () => {
    expect(reducer(
      {
        isLoggedIn: false,
        isAdmin: false,
        userName: '',
      }, {
        type: types.SIGN_IN_FAILURE,
        isAdmin: false,
        name: 'Arya',
      })
    ).to.eql({
      isLoggedIn: false,
      isAdmin: false,
      userName: '',
    });
  });
});
