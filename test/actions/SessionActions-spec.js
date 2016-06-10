/**
 * External dependencies
 */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { expect } from 'chai';
import nock from 'nock';

/**
 * Internal dependencies
 */
import * as actions from '../../src/js/actions/SessionActions';
import * as types from '../../src/js/constants/ActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('session actions', () => {
  it('creates an action to request sign in', () => {
    const expectedAction = {
      type: types.SIGN_IN_REQUEST,
      name: 'Ned',
    };

    expect(actions.signInRequest('Ned')).to.eql(expectedAction);
  });

  it('creates an action to handle sign in success', () => {
    const expectedAction = {
      type: types.SIGN_IN_SUCCESS,
      name: 'Ned',
      isAdmin: false,
    };

    expect(actions.signInSuccess('Ned', false)).to.eql(expectedAction);
  });
});

// this is what a test would look like, but I'm not actually making an http request
// for this action, see SurveyActions async test
// describe('session async actions', () => {
//   afterEach(() => {
//     nock.cleanAll();
//   });
//
//   it('creates SIGN_IN_SUCCESS when signInUser(user) is successful', () => {
//     nock('http://localhost:3000/api')
//       .reply(200);
//
//     const expectedActions = [
//       { type: types.SIGN_IN_REQUEST, name: 'Ned' },
//       { type: types.SIGN_IN_SUCCESS, name: 'Ned', isAdmin: true },
//     ];
//     const store = mockStore({ session: {} });
//
//     return store.dispatch(actions.signInUser('Ned'))
//       .then(() => { // return of async actions
//         expect(store.getActions()).toEqual(expectedActions);
//       });
//   });
// });
