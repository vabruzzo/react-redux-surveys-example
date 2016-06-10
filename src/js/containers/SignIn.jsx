/**
 * External dependencies
 */
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { Panel, Form, FormGroup, Col, ControlLabel, FormControl, Button } from 'react-bootstrap';

/**
 * Internal dependencies
 */
import { signInUser } from '../actions/SessionActions';

const propTypes = {
  // signInUser: session action to sign in registered user
  signInUser: PropTypes.func.isRequired,
};

export class SignIn extends Component {
  constructor() {
    super();

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    const user = document.getElementById('userSelect').value;

    e.preventDefault();

    this.props.signInUser(user);

    user === 'rhaegar' ? browserHistory.push('/admin') : browserHistory.push('/surveys');
  }

  render() {
    return (
      <Panel className="signin-panel" header={<h2>Sign In</h2>}>
        <Form horizontal>
          <FormGroup controlId="userSelect">
            <Col componentClass={ControlLabel} sm={2}>
              Select User:
            </Col>
            <Col sm={10}>
              <FormControl componentClass="select" placeholder="select">
                <option value="jon">Jon</option>
                <option value="daenerys">Daenerys</option>
                <option value="tyrion">Tyrion</option>
                <option value="rhaegar">Rhaegar (admin)</option>
              </FormControl>
            </Col>
          </FormGroup>
          <Button type="submit" onClick={this.handleLogin}>
            Sign In
          </Button>
        </Form>
      </Panel>
    );
  }
}

SignIn.propTypes = propTypes;

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signInUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(SignIn);
