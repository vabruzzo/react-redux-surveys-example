/**
 * External dependencies
 */
import { expect } from 'chai';

/**
 * Internal dependencies
 */
import reducer from '../../src/js/reducers/surveys.js';
import * as types from '../../src/js/constants/ActionTypes.js';

describe('session reducer', () => {
  it('returns initial state if passed undefined action', () => {
    expect(reducer(
      undefined, {})
    ).to.eql({
      isFetching: false,
      surveys: [],
    });
  });

  it('should handle ADD_SURVEY_SUCCESS', () => {
    expect(reducer(
      {
        isFetching: false,
        surveys: [],
      }, {
        type: types.ADD_SURVEY_SUCCESS,
        surveys: [
          {
            title: 'survey one',
            survey: [],
            responses: [],
          },
        ],
      })
    ).to.eql({
      isFetching: false,
      surveys: [
        {
          title: 'survey one',
          survey: [],
          responses: [],
        },
      ],
    });
  });
});
