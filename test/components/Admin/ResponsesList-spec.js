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
import ResponsesList from '../../../src/js/components/Admin/ResponsesList.jsx';

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

describe('<ResponsesList />', () => {
  it('renders props.surveys.length <Panel /> components', () => {
    const props = setup();
    const wrapper = shallow(<ResponsesList {...props} />);

    expect(wrapper.find(Panel)).to.have.length(Object.keys(props.surveys).length);
  });
});
