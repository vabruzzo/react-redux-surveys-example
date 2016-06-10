/**
 * External dependencies
 */
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/**
 * Internal dependencies
 */
import { fetchSurveys, submitResponse } from '../actions/SurveyActions';

const propTypes = {
  // children: child elements wrapped by Surveys
  children: PropTypes.object.isRequired,
  // surveys: survey data including responses
  surveys: PropTypes.object.isRequired,
  // sessions: user session info
  session: PropTypes.object.isRequired,
  // fetchSurveys: fetches survey & responses object
  fetchSurveys: PropTypes.func.isRequired,
  // submitResponse: submits response, duh
  submitResponse: PropTypes.func.isRequired,
};

export class Surveys extends Component {
  componentWillMount() {
    this.props.fetchSurveys();
  }

  render() {
    return (
      <div>
        {this.props.surveys.isFetching &&
          <p>Loading spinner goes here...</p>
        }
        {this.props.children && React.cloneElement(this.props.children, {
          session: this.props.session,
          surveys: this.props.surveys.surveys,
          submitResponse: this.props.submitResponse,
        })}
      </div>
    );
  }
}

Surveys.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    session: state.session,
    surveys: state.surveys,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchSurveys, submitResponse }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Surveys);
