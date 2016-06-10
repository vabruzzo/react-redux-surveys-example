/**
 * External dependencies
 */
import React, { PropTypes } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Panel, Table, Button } from 'react-bootstrap';
import map from 'lodash.map';

const propTypes = {
  // surveys: survey data including responses
  surveys: PropTypes.array,
};

/**
 * Component
 */
function ResponsesList({ surveys }) {
  return (
    <div>
      <h2>Responses</h2>
      {surveys.length === 0
      ?
        <p>No surveys yet!</p>
      :
        <div>
          {map(surveys, (survey, surveyIndex) =>
            <Panel key={surveyIndex} header={<h3>{`Survey title: ${survey.title}`}</h3>}>
              {survey.responses.length === 0 ?
                <p>No responses filled out yet!</p> :
                // TODO: refactor parts of table into their own render functions
                // or possible their own components
                <Table responsive striped fill>
                  <caption className="sr-only">
                    Response list with buttons to view responses for survey {survey.title}
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">User</th>
                      <th scope="col">Timestamp</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {map(survey.responses, (response, index) =>
                      <tr key={index}>
                        <td>{response.user}</td>
                        <td>{response.timestamp}</td>
                        <td className="view-response">
                          <LinkContainer to={{ pathname: `/admin/${surveyIndex}/${index}` }}>
                            <Button type="submit" bsStyle="primary">
                              View Response
                            </Button>
                          </LinkContainer>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              }
            </Panel>
          )}
        </div>
      }
    </div>
  );
}

ResponsesList.propTypes = propTypes;

export default ResponsesList;
