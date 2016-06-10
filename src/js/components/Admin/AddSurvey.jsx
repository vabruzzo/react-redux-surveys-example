// FIXME: There is a bug somewhere in this componenet that prevents hot reloading.
// I suspect it has to do with react-router.
/**
 * External dependencies
 */
import React, { Component, PropTypes } from 'react';
import { Alert, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

/**
 * Internal dependencies
 */
import Question from './Question.jsx';

const propTypes = {
  // addSurvey: adds admin submitted survey
  addSurvey: PropTypes.func,
  // surveys: survey data including responses
  surveys: PropTypes.array,
};

export class AddSurvey extends Component {
  constructor() {
    super();

    // Not everything needs to be in redux,
    // not every dumb component should be stateless.
    // With that said, to properly handle network errors after
    // a survey is submitted, I'd refactor flash msgs out to redux
    this.state = {
      questions: [{ id: 'q1' }],
      flashMsg: { type: '', msg: '' },
    };

    this.handleRemoveQuestion = this.handleRemoveQuestion.bind(this);
    this.handleAddQuestion = this.handleAddQuestion.bind(this);
    this.handleSubmitSurvey = this.handleSubmitSurvey.bind(this);
    this.handleAddSurveySuccess = this.handleAddSurveySuccess.bind(this);
  }

  handleRemoveQuestion(e) {
    const currentQuestions = this.state.questions;

    e.preventDefault();

    if (currentQuestions.length > 1) {
      currentQuestions.pop();
      this.setState({ questions: currentQuestions });
    }
  }

  handleAddQuestion(e) {
    const newQuestion = { id: `q${this.state.questions.length + 1}`, label: '' };
    const currentQuestions = this.state.questions;

    e.preventDefault();
    currentQuestions.push(newQuestion);
    this.setState({ questions: currentQuestions });
  }

  handleSubmitSurvey(e) {
    const surveyTitle = document.getElementById('survey-title').value;
    const currentQuestions = this.state.questions.map((question) => {
      const questionLabel = document.getElementById(`question-${question.id}`).value;
      const questionObj = { id: question.id, label: questionLabel };

      return questionObj;
    });
    const currentSurveys = this.props.surveys;

    e.preventDefault();

    if (window.localStorage.getItem(surveyTitle) || surveyTitle === '') {
      this.setState({
        flashMsg: {
          type: 'danger',
          msg: 'There appears to be a survey with this title already or the title is empty. Please choose another title.',
        },
      });
    } else {
      this.props.addSurvey(surveyTitle, currentQuestions, currentSurveys);
      this.handleAddSurveySuccess(surveyTitle);
    }
  }

  handleAddSurveySuccess(title) {
    document.getElementById('survey-title').value = '';
    document.getElementById('question-q1').value = '';
    this.setState({
      questions: [{ id: 'q1' }],
      flashMsg: { type: 'success', msg: `Survey ${title} was successfully added.` },
    });
  }

  render() {
    return (
      <form>
        <h2>Add Survey</h2>
        {this.state.flashMsg.type !== '' &&
          <Alert bsStyle={this.state.flashMsg.type}>
            {this.state.flashMsg.msg}
          </Alert>
        }
        {/* if this form grew much more I'd refactor out, possible make
        this a connected container component */}
        <FormGroup controlId="survey-title">
          <ControlLabel>Survey Name:</ControlLabel>
          <FormControl type="text" placeholder="Enter survey name, must be unique" />
        </FormGroup>
        <Button className="remove-question" type="submit" onClick={this.handleRemoveQuestion}>
          Remove last question
        </Button>
        <Button className="add-question" type="submit" onClick={this.handleAddQuestion}>
          Add question
        </Button>
        {this.state.questions.map((question, index) =>
          <Question key={index} id={question.id} />
        )}
        <Button type="submit" bsStyle="primary" onClick={this.handleSubmitSurvey}>
          Add Survey
        </Button>
      </form>
    );
  }
}

AddSurvey.propTypes = propTypes;

export default AddSurvey;
