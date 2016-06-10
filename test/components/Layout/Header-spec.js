/**
 * External dependencies
 */
import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Internal dependencies
 */
import Header from '../../../src/js/components/Layout/Header.jsx';

describe('<Header />', () => {
  it('renders <NavBar />', () => {
    const wrapper = shallow(<Header session={{ isLoggedIn: false, isAdmin: false }} />);

    expect(wrapper.find(Navbar)).to.have.length(1);
  });

  it('does not render <Nav /> if isLoggedIn === false', () => {
    const wrapper = shallow(<Header session={{ isLoggedIn: false, isAdmin: false }} />);

    expect(wrapper.find(Nav)).to.have.length(0);
  });

  it('renders admin navbar if isAdmin === true', () => {
    const wrapper = shallow(<Header session={{ isLoggedIn: true, isAdmin: true }} />);

    expect(wrapper.find(IndexLinkContainer)).to.have.length(1);
    expect(wrapper.find(LinkContainer)).to.have.length(1);
    expect(wrapper.find(NavItem)).to.have.length(3);
  });

  it('renders user navbar if isAdmin === false', () => {
    const wrapper = shallow(<Header session={{ isLoggedIn: true, isAdmin: false }} />);

    expect(wrapper.find(IndexLinkContainer)).to.have.length(0);
    expect(wrapper.find(LinkContainer)).to.have.length(1);
    expect(wrapper.find(NavItem)).to.have.length(2);
  });
});
