import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col } from 'react-bootstrap';
import { PageIDs } from '../utilities/ids';

const SignOut = () => {
  Meteor.logout();
  return (
    <div id={PageIDs.signOut}>
      <Col className="text-center py-3">
        <h2 style={{ marginTop: '5em' }}>You are signed out.</h2>
      </Col>
    </div>
  );
};

export default SignOut;
