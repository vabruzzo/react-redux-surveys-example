/**
 * External dependencies
 */
import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { Panel, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import map from 'lodash.map';
import moment from 'moment';

const propTypes = {
  // surveys: survey data including responses
  surveys: PropTypes.array,
  // sessions: user session info
  session: PropTypes.object,
  // params: route params that specify particular response, e.g. /1
  // 1 is the index of the survey
  params: PropTypes.object.isRequired,
  // submitResponse: function to submit response...
  submitResponse: PropTypes.func,
};

export class Survey extends Component {
  constructor(props) {
    super(props);

    this.surveys = this.props.surveys;
    this.currentSurvey = this.props.surveys[this.props.params.index];
    this.handleSubmitAnswers = this.handleSubmitAnswers.bind(this);
  }

  handleSubmitAnswers(e) {
    const user = this.props.session.userName;
    const currentResponses = this.currentSurvey.responses.slice(0);
    const answers = map(this.currentSurvey.survey, (question) => {
      const answer = document.getElementById(`question-${question.id}`).value;

      return answer;
    });
    const timestamp = moment().format('MMMM Do YYYY, h:mma');
    const responseObj = { user, timestamp, answers };

    currentResponses.push(responseObj);

    e.preventDefault();

    this.props.submitResponse(
      this.props.params.index,
      this.currentSurvey.title,
      this.currentSurvey.survey,
      this.surveys,
      currentResponses
    );

    browserHistory.push('/surveys');
  }

  render() {
    return (
      <div>
        <h2>Survey Title: {this.currentSurvey.title}</h2>
        <form>
          {map(this.currentSurvey.survey, (question, index) =>
            <Panel key={index} header={<h3>Question id: {question.id}</h3>}>
              <FormGroup controlId={`question-${question.id}`}>
                <ControlLabel>Question: {question.label}</ControlLabel>
                <FormControl type="text" placeholder="Enter your answer" />
              </FormGroup>
            </Panel>
          )}
          <Button type="submit" bsStyle="primary" onClick={this.handleSubmitAnswers}>
            Submit Answers
          </Button>
        </form>
      </div>
    );
  }
}

Survey.propTypes = propTypes;

export default Survey;
