/**
 * External dependencies
 */
import React, { PropTypes } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button } from 'react-bootstrap';
import map from 'lodash.map';

const propTypes = {
  // surveys: survey data including responses
  surveys: PropTypes.array,
};

/**
 * Component
 */
function SurveysList({ surveys }) {
  return (
    <div>
      <h2>Surveys</h2>
      {surveys.length === 0
      ?
        <p>No surveys yet!</p>
      :
        <Table responsive striped>
          <caption className="sr-only">Survey list with buttons to take surveys</caption>
          <thead>
            <tr>
              <th scope="col">Survey Title</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {map(surveys, (survey, index) =>
              <tr key={index}>
                <td>{survey.title}</td>
                <td className="take-survey">
                  <LinkContainer to={{ pathname: `/surveys/${index}` }}>
                    <Button type="submit" bsStyle="primary">
                      Take Survey
                    </Button>
                  </LinkContainer>
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      }
    </div>
  );
}

SurveysList.propTypes = propTypes;

export default SurveysList;
