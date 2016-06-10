/**
 * External dependencies
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

/**
 * Internal dependencies
 */
import Header from '../components/Layout/Header.jsx';
import Footer from '../components/Layout/Footer.jsx';

const propTypes = {
  // children: child elements wrapped by Layout
  children: PropTypes.object.isRequired,
  // sessions: user session info
  session: PropTypes.object.isRequired,
};

export class Layout extends Component {
  constructor() {
    super();

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();

    window.location.assign('http://localhost:3000');
  }

  render() {
    return (
      <div>
        <Header session={this.props.session} handleLogout={this.handleLogout} />
        <div className="main">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

Layout.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    session: state.session,
  };
}

export default connect(mapStateToProps)(Layout);
