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
import * as actions from '../../src/js/actions/SurveyActions';
import * as types from '../../src/js/constants/ActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('survey actions', () => {
  it('creates an action to request surveys', () => {
    const expectedAction = {
      type: types.SURVEYS_REQUEST,
    };

    expect(actions.surveysRequest()).to.eql(expectedAction);
  });
});

// this test fails because of the hacky local storage stuff going on
// otherwise the test is written properly, if you set surveys to {} in
// the async action itself this test will pass; actual htpp req test would look
// very similiar
describe('survey async actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('creates SURVEYS_REQUEST_SUCCESS when fetchSurveys() is successful', () => {
    nock('http://localhost:3000')
      .get('/api')
      .reply(200, 'data');

    const expectedActions = [
      { type: types.SURVEYS_REQUEST },
      { type: types.SURVEYS_REQUEST_SUCCESS, surveys: {} },
    ];
    const store = mockStore({ surveys: {} });

    return store.dispatch(actions.fetchSurveys())
      .then(() => { // return of async actions
        expect(store.getActions()).to.eql(expectedActions);
      });
  });
});
