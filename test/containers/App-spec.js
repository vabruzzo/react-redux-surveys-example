/**
 * External dependencies
 */
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Router } from 'react-router';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

/**
 * Internal dependencies
 */
import App from '../../src/js/containers/App.jsx';
import { SignIn } from '../../src/js/containers/SignIn.jsx';

const mockStore = configureStore();

describe('<App />', () => {
  it('renders <Provider /> and <Router />', () => {
    const wrapper = shallow(<App store={{}} />);

    expect(wrapper.find(Provider)).to.have.length(1);
    expect(wrapper.find(Router)).to.have.length(1);
  });

  // This test fails; the idea is to mock the store and test
  // if the connected component renders the right child component...
  // testing a redux connected conponent with react-router is a little
  // tricky and I'm still working it out. The idea is to test this and then to
  // test that the right child container components are being rendered
  // depending on isAdmin.
  it('renders <SignIn /> if isLoggedIn === false', () => {
    const getState = {
      session: {
        isLoggedIn: false,
        isAdmin: false,
        userName: '',
      },
    };
    const store = mockStore(getState);
    const wrapper = mount(<App store={store} />);

    expect(wrapper.find(SignIn)).to.have.length(1);
  });
});
