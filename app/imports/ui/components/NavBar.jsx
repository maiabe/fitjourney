import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { PencilSquare, BoxArrowRight, PersonFill, PersonPlusFill, PlusSquare } from 'react-bootstrap-icons';
import { ComponentIDs } from '../utilities/ids';

const NavBar = () => {
  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user() ? Meteor.user().username : '',
    loggedIn: !!Meteor.user(),
  }), []);
  const navStyle = { boxShadow: '0 6px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.2)' };

  return (
    <Navbar expand="lg" style={navStyle}>
      <div className="navbar-wrapper">
        <Navbar.Brand as={NavLink} to="/" className="align-items-center">
          <img src="/images/FitJourney_horizontal.png" alt="navbar logo" />
        </Navbar.Brand>
        <Navbar.Toggle id={ComponentIDs.navBar} />
        <Navbar.Collapse id={ComponentIDs.navBar}>
          <Nav className="me-auto">
            {currentUser ? (
              <NavDropdown id={ComponentIDs.navBarCivicEngagementItem} title="Civic Engagement" style={{ marginRight: '1em' }} className="white-text-dropdown">
                <NavDropdown.Item as={NavLink} to="/forum">
                  <Nav.Link id={ComponentIDs.navBarToForum} as={NavLink} to="/forum" key="forum" style={{ color: 'black' }}>Forum</Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/survey">
                  <Nav.Link id={ComponentIDs.navBarToSurvey} as={NavLink} to="/survey" key="survey" style={{ color: 'black' }}>Survey</Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/community">
                  <Nav.Link id={ComponentIDs.navBarToCommunity} as={NavLink} to="/community" key="community" style={{ color: 'black' }}>Community</Nav.Link>
                </NavDropdown.Item>
              </NavDropdown>
            ) : ''}
            {currentUser ? (
              <NavDropdown id={ComponentIDs.navBarVisualizeToolsetItem} title="Visualize Toolset" className="white-text-dropdown">
                <NavDropdown.Item as={NavLink} to="/model">
                  <Nav.Link id={ComponentIDs.navBarToModel} as={NavLink} to="/model" key="model" style={{ color: 'black' }}>Model</Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/dalle3">
                  <Nav.Link id={ComponentIDs.navBarToDalle3} as={NavLink} to="/dalle3" key="dalle" style={{ color: 'black' }}>Dall-E3</Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/mapping">
                  <Nav.Link id={ComponentIDs.navBarToMapping} as={NavLink} to="/mapping" key="gis" style={{ color: 'black' }}>Gis-Map</Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/external">
                  <Nav.Link id={ComponentIDs.navBarToExternal} as={NavLink} to="/external" key="external" style={{ color: 'black' }}>External</Nav.Link>
                </NavDropdown.Item>
              </NavDropdown>
            ) : ''}
          </Nav>

          <Nav className="justify-content-end">
            {currentUser === '' ? (
              <NavDropdown id={ComponentIDs.loginDropDown} title="Login" className="mx-1 white-text-dropdown">
                <NavDropdown.Item id={ComponentIDs.navBarSignIn} as={NavLink} to="/signin">
                  <PersonFill />
                  Sign
                  in
                </NavDropdown.Item>
                <NavDropdown.Item id={ComponentIDs.navBarSignUp} as={NavLink} to="/signup">
                  <PersonPlusFill />
                  Sign
                  up
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown id={ComponentIDs.currentUserDropDown} title={currentUser} className="mx-1 white-text-dropdown">
                <NavDropdown.Item id={ComponentIDs.navBarAddProfile} as={NavLink} to="/addprofile">
                  <PlusSquare />
                  {' '}
                  Add
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item id={ComponentIDs.navBarEditProfile} as={NavLink} to="/editprofile">
                  <PencilSquare />
                  {' '}
                  Edit
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item id={ComponentIDs.navBarSignOut} as={NavLink} to="/signout">
                  <BoxArrowRight />
                  {' '}
                  Sign
                  out
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavBar;
