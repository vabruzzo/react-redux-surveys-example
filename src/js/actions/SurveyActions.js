/**
 * External dependencies
 */
import map from 'lodash.map';
import fetch from 'isomorphic-fetch';

/**
 * Internal dependencies
 */
import * as types from '../constants/ActionTypes';

export function surveysRequest() {
  return {
    type: types.SURVEYS_REQUEST,
  };
}

export function surveysRequestSuccess(surveys) {
  return {
    type: types.SURVEYS_REQUEST_SUCCESS,
    surveys,
  };
}

// none of the error handling is really implemented, the reducers don't
// do anything but we dispatch the action anyway
export function surveysRequestFailure() {
  return {
    type: types.SURVEYS_REQUEST_FAILURE,
  };
}

export function fetchSurveys() {
  return dispatch => {
    dispatch(surveysRequest());

    // this is just a sample of redux-thunk async handling
    return fetch('http://localhost:3000/api')
      .then(() => {
        const surveys = map(Object.keys(window.localStorage), (key) =>
          JSON.parse(window.localStorage.getItem(key))
        );
        dispatch(surveysRequestSuccess(surveys));
      }).catch(() => {
        dispatch(surveysRequestFailure());
      });
  };
}

export function addSurveyRequest() {
  return {
    type: types.ADD_SURVEY_REQUEST,
  };
}

export function addSurveyRequestSuccess(surveys) {
  return {
    type: types.ADD_SURVEY_SUCCESS,
    surveys,
  };
}

export function addSurveyRequestFailure() {
  return {
    type: types.ADD_SURVEY_FAILURE,
  };
}

export function addSurvey(title, survey, surveys) {
  return dispatch => {
    // Ran into tiny bug when assigning surveys to newSurveys
    // without slicing. This seems like a good use case for immutable.js.
    // I don't like using tools before I need them and I hadn't really
    // needed immutable.js before since I have always been disciplined about
    // not mutating state in reducers. Without slicing the surveys array I was
    // inadvertantly mutating it here in the action.
    const newSurveys = surveys.slice(0);
    const responses = [];
    // we need to add the new survey object to storage
    const surveyObj = { title, survey, responses };

    dispatch(addSurveyRequest());

    // add survey to surveys, which we send to reducer
    newSurveys.push(surveyObj);

    return fetch('http://localhost:3000/api')
      .then(() => {
        window.localStorage[title] = JSON.stringify(surveyObj);
        dispatch(addSurveyRequestSuccess(newSurveys));
      }).catch(() => {
        dispatch(addSurveyRequestFailure());
      });
  };
}

export function submitResponseRequest() {
  return {
    type: types.SUBMIT_RESPONSE_REQUEST,
  };
}

export function submitResponseRequestSuccess(surveys) {
  return {
    type: types.SUBMIT_RESPONSE_SUCCESS,
    surveys,
  };
}

// for error handing, not implemented
export function submitResponseRequestFailure() {
  return {
    type: types.SUBMIT_RESPONSE_FAILURE,
  };
}

export function submitResponse(id, title, survey, surveys, updatedResponses) {
  return dispatch => {
    const newSurveys = surveys.slice(0);
    // we need to set the updated survey object in storage
    const surveyObj = { title, survey, responses: updatedResponses };

    dispatch(submitResponseRequest());

    // and add our updated responses to the main surveys object to send to reducer
    newSurveys[id].responses = updatedResponses;

    return fetch('http://localhost:3000/api')
      .then(() => {
        window.localStorage[title] = JSON.stringify(surveyObj);
        dispatch(submitResponseRequestSuccess(newSurveys));
      }).catch(() => {
        dispatch(submitResponseRequestFailure());
      });
  };
}
