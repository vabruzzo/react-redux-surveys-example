/**
 * External dependencies
 */
import React from 'react';
import { Table } from 'react-bootstrap';
import { shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Internal dependencies
 */
import SurveysList from '../../../src/js/components/Surveys/SurveysList.jsx';

function setup() {
  const props = {
    surveys: [
      { title: 'survey one', survey: [], responses: [] },
      { title: 'survey two', survey: [], responses: [] },
      { title: 'survey three', survey: [], responses: [] },
    ],
  };

  return props;
}

describe('<SurveysList />', () => {
  it('does not render <Tabel /> if props.surveys.length === 0', () => {
    const wrapper = shallow(<SurveysList surveys={[]} />);

    expect(wrapper.find(Table)).to.have.length(0);
  });

  it('renders one <Table /> component if props.surveys.length > 0', () => {
    const props = setup();
    const wrapper = shallow(<SurveysList {...props} />);

    expect(wrapper.find(Table)).to.have.length(1);
  });

  it('renders props.surveys.length + 1 tr elements', () => {
    const props = setup();
    const wrapper = shallow(<SurveysList {...props} />);

    expect(wrapper.find('tr')).to.have.length(props.surveys.length + 1);
  });
});
