/**
 * External dependencies
 */
import {
  SURVEYS_REQUEST, SURVEYS_REQUEST_SUCCESS, SURVEYS_REQUEST_FAILURE, ADD_SURVEY_REQUEST,
  ADD_SURVEY_SUCCESS, SUBMIT_RESPONSE_REQUEST, SUBMIT_RESPONSE_SUCCESS,
} from '../constants/ActionTypes';

export default function surveys(
  state = {
    isFetching: false,
    surveys: [],
  }, action) {
  if (action === undefined) return state;

  switch (action.type) {
    case SURVEYS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case SURVEYS_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        surveys: action.surveys,
      });
    case SURVEYS_REQUEST_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
      });
    case ADD_SURVEY_REQUEST:
      return state;
    case ADD_SURVEY_SUCCESS:
      return Object.assign({}, state, {
        surveys: action.surveys,
      });
    case SUBMIT_RESPONSE_REQUEST:
      return state;
    case SUBMIT_RESPONSE_SUCCESS:
      return Object.assign({}, state, {
        surveys: action.surveys,
      });
    default:
      return state;
  }
}
