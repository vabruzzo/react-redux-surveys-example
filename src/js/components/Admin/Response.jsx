/**
 * External dependencies
 */
import React, { PropTypes } from 'react';
import { Panel } from 'react-bootstrap';
import map from 'lodash.map';

const propTypes = {
  // surveys: survey data including responses
  surveys: PropTypes.array,
  // params: route params that specify particular response, e.g. /0/1
  // 0 is the index of the survey, 1 is the index of the response
  params: PropTypes.object.isRequired,
};

/**
 * Component
 */
function Response({ surveys, params }) {
  const response = surveys[params.surveyIndex].responses[params.index];

  return (
    <div>
      <h2>
        {surveys[params.surveyIndex].title}: response of {response.user} - {response.timestamp}
      </h2>
      {map(response.answers, (answer, index) =>
        <Panel
          key={index}
          header={<h3>Question id: {surveys[params.surveyIndex].survey[index].id}</h3>}
        >
          <p>Question: {surveys[params.surveyIndex].survey[index].label}</p>
          <p>Answer: {answer}</p>
        </Panel>
      )}
    </div>
  );
}

Response.propTypes = propTypes;

export default Response;
