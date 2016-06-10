/**
 * External dependencies
 */
import React, { PropTypes } from 'react';
import { Panel, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const propTypes = {
  // id: question id
  id: PropTypes.string.isRequired,
};

/**
 * Component
 */
function Question({ id }) {
  return (
    <Panel className="question-panel" header={<h3>Question id: {id}</h3>}>
      <FormGroup controlId={`question-${id}`}>
        <ControlLabel>Question content/label:</ControlLabel>
        <FormControl type="text" placeholder="Enter question" />
      </FormGroup>
    </Panel>
  );
}

Question.propTypes = propTypes;

export default Question;
