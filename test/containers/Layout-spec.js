/**
 * External dependencies
 */
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { expect } from 'chai';

/**
 * Internal dependencies
 */
import Layout from '../../src/js/containers/Layout.jsx';
import Header from '../../src/js/components/Layout/Header.jsx';

const mockStore = configureStore();

describe('<Layout />', () => {
  it('renders <Header />', () => {
    const getState = {
      session: {
        isLoggedIn: false,
        isAdmin: false,
        userName: '',
      },
    };
    const store = mockStore(getState);
    const wrapper = mount(
      <Provider store={store}>
        <Layout />
      </Provider>
    );

    expect(wrapper.find(Header)).to.have.length(1);
  });
});
