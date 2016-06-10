/**
 * External dependencies
 */
import React, { PropTypes } from 'react';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import { Navbar, NavItem, Nav } from 'react-bootstrap';

const propTypes = {
  // sessions: user session info
  session: PropTypes.object.isRequired,
  // handleLogout: sign out link handler
  handleLogout: PropTypes.func.isRequired,
};

/**
 * Component
 */
function Header({ session, handleLogout }) {
  return (
    <header>
      <Navbar inverse staticTop fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Abruzzo Everplans Surveys!</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        {session.isLoggedIn &&
          <Navbar.Collapse>
            {session.isAdmin
            ?
              <Nav pullRight>
                <IndexLinkContainer to={{ pathname: '/admin' }}>
                  <NavItem eventKey={1} href="#">View Responses</NavItem>
                </IndexLinkContainer>
                <LinkContainer to={{ pathname: '/admin/addsurvey' }}>
                  <NavItem eventKey={2} href="#">Add Survey</NavItem>
                </LinkContainer>
                <NavItem eventKey={3} href="#" onClick={handleLogout}>
                  Sign Out
                </NavItem>
              </Nav>
            :
              <Nav pullRight>
                <LinkContainer to={{ pathname: '/surveys' }}>
                  <NavItem eventKey={1} href="#">Surveys</NavItem>
                </LinkContainer>
                <NavItem eventKey={2} href="#" onClick={handleLogout}>
                  Sign Out
                </NavItem>
              </Nav>
            }
          </Navbar.Collapse>
        }
      </Navbar>
    </header>
  );
}

Header.propTypes = propTypes;

export default Header;
