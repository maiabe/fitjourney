import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Navigate } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';
import { Alert, Card, Col, Container, Row } from 'react-bootstrap';
import SimpleSchema from 'simpl-schema';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { AutoForm, ErrorsField, SubmitField, TextField } from 'uniforms-bootstrap5';
import { Roles } from 'meteor/alanning:roles';
import { ComponentIDs, PageIDs } from '../utilities/ids';

const SignUp = () => {
  const [error, setError] = useState('');
  const [redirectToReferer, setRedirectToRef] = useState(false);

  const schema = new SimpleSchema({
    email: String,
    username: String,
    password: String,
  });
  const bridge = new SimpleSchema2Bridge(schema);

  const submit = (doc) => {
    const { email, username, password } = doc;
    // eslint-disable-next-line no-shadow
    const userID = Accounts.createUser({ email, username, password }, (err) => {
      if (err) {
        setError(err.reason);
      } else {
        setError('');
        setRedirectToRef(true);
      }
    });
    Roles.addUsersToRoles(userID, 'user');
  };

  if (redirectToReferer) {
    return (<Navigate to="/" />);
  }
  return (
    <div id={PageIDs.signUp}>
      <Container className="py-3">
        <Row className="justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
          <Col xs={4}>
            <Col className="text-center" />
            <AutoForm schema={bridge} onSubmit={data => submit(data)}>
              <Card style={{ backgroundColor: 'white', border: 'none' }}>
                <Card.Body>
                  <Col className="text-center">
                    <h2>Create Account</h2>
                  </Col>
                  <TextField id={ComponentIDs.signupEmail} inputClassName="border-dark" name="email" placeholder="" />
                  <TextField id={ComponentIDs.signupUser} inputClassName="border-dark" name="username" placeholder="" />
                  <TextField id={ComponentIDs.signupPass} inputClassName="border-dark" name="password" placeholder="" type="password" />
                  <ErrorsField />
                  <SubmitField id={ComponentIDs.signupSubmit} inputClassName="p-2 bg-white border-1 rounded-1 mt-1" />
                </Card.Body>
                <p style={{ textAlign: 'center' }}>Already have an account? <Link style={{ color: 'black' }} to="/signin">Login</Link></p>
              </Card>
            </AutoForm>
            {error === '' ? (
              ''
            ) : (
              <Alert variant="danger">
                <Alert.Heading>Registration was not successful</Alert.Heading>
                {error}
              </Alert>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

SignUp.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.string,
  }),
};

SignUp.defaultProps = {
  location: { state: '' },
};

export default SignUp;
