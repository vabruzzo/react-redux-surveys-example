/**
 * External dependencies
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';

/**
 * Internal dependencies
 */
import { Layout, SignIn, Admin, Surveys } from '../containers';
import AddSurvey from '../components/Admin/AddSurvey.jsx';
import ResponsesList from '../components/Admin/ResponsesList.jsx';
import Response from '../components/Admin/Response.jsx';
import SurveysList from '../components/Surveys/SurveysList.jsx';
import Survey from '../components/Surveys/Survey.jsx';
import NotFound from '../components/NotFound.jsx';

export default function getRoutes() {
  return (
    <Route path="/" component={Layout}>
      <IndexRoute component={SignIn} />
      <Route path="/admin" component={Admin} >
        <IndexRoute component={ResponsesList} />
        <Route path="/admin/addsurvey" component={AddSurvey} />
        <Route path="/admin/:surveyIndex/:index" component={Response} />
      </Route>
      <Route path="/surveys" component={Surveys}>
        <IndexRoute component={SurveysList} />
        <Route path="/surveys/:index" component={Survey} />
      </Route>
      <Route path="*" component={NotFound} />
    </Route>
  );
}
