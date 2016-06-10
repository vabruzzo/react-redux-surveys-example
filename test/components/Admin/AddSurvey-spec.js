/**
 * External dependencies
 */
import React from 'react';
import { Panel } from 'react-bootstrap';
import { mount } from 'enzyme';
import { expect } from 'chai';

/**
 * Internal dependencies
 */
import AddSurvey from '../../../src/js/components/Admin/AddSurvey.jsx';

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

describe('<AddSurvey />', () => {
  it('renders props.surveys.length <Panel /> components when remove and add question buttons clicked', () => {
    const props = setup();
    const wrapper = mount(<AddSurvey {...props} />);
    const addQuestionButton = wrapper.find('.add-question').first();
    const removeQuestionButton = wrapper.find('.remove-question').first();

    expect(wrapper.find(Panel)).to.have.length(1);

    addQuestionButton.simulate('click');
    expect(wrapper.find(Panel)).to.have.length(2);

    addQuestionButton.simulate('click');
    addQuestionButton.simulate('click');
    expect(wrapper.find(Panel)).to.have.length(4);

    removeQuestionButton.simulate('click');
    removeQuestionButton.simulate('click');
    expect(wrapper.find(Panel)).to.have.length(2);

    removeQuestionButton.simulate('click');
    removeQuestionButton.simulate('click');
    removeQuestionButton.simulate('click');
    expect(wrapper.find(Panel)).to.have.length(1);
  });
});
