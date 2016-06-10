/**
 * External dependencies
 */
import React from 'react';
import { Panel } from 'react-bootstrap';
import { shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Internal dependencies
 */
import Response from '../../../src/js/components/Admin/Response.jsx';

function setup() {
  const props = {
    // TODO: make all these mock data consts DRYer
    surveys: [
      { title: 'survey one', survey: [], responses: [] },
      { title: 'survey two',
        survey: [
          { id: 'q1', label: 'q1' }, { id: 'q2', label: 'q2' }, { id: 'q3', label: 'q3' },
        ],
        responses: [
          { user: 'Ned', timestamp: 0, answers: ['0', '1', '2'] },
        ],
      },
      { title: 'survey three', survey: [], responses: [] },
    ],
    params: { surveyIndex: 1, index: 0 },
  };

  return props;
}

describe('<Response />', () => {
  it('renders responses[0].answers.length <Panel /> components', () => {
    const props = setup();
    const wrapper = shallow(<Response {...props} />);

    expect(wrapper.find(Panel)).to.have.length(props.surveys[1].responses[0].answers.length);
  });

  it('renders correct <h2> title content', () => {
    const props = setup();
    const wrapper = shallow(<Response {...props} />);
    const survey = props.surveys[1];
    const response = props.surveys[1].responses[0];
    const expectedTitle = `${survey.title}: response of ${response.user} - ${response.timestamp}`;

    expect(wrapper.find('h2').text()).to.eql(expectedTitle);
  });
});
