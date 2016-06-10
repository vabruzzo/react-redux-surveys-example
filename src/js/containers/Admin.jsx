/**
 * External dependencies
 */
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/**
 * Internal dependencies
 */
import { fetchSurveys, addSurvey } from '../actions/SurveyActions';

const propTypes = {
  // children: child elements wrapped by Admin
  children: PropTypes.object.isRequired,
  // fetchSurveys: fetches survey & responses object
  fetchSurveys: PropTypes.func.isRequired,
  // addSurvey: adds admin submitted survey
  addSurvey: PropTypes.func.isRequired,
  // surveys: survey data including responses
  surveys: PropTypes.object.isRequired,
};

export class Admin extends Component {
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
          surveys: this.props.surveys.surveys,
          addSurvey: this.props.addSurvey,
        })}
      </div>
    );
  }
}

Admin.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    surveys: state.surveys,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchSurveys, addSurvey }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
