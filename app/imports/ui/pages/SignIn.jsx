import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Alert, Card, Col, Container, Row } from 'react-bootstrap';
import SimpleSchema from 'simpl-schema';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { AutoForm, ErrorsField, SubmitField, TextField } from 'uniforms-bootstrap5';

const cardVisual = {
  backgroundColor: 'white',
  border: 'none',
};

const SignIn = () => {
  const [error, setError] = useState('');
  const [redirect, setRedirect] = useState(false);
  const schema = new SimpleSchema({
    email: String,
    password: String,
  });
  const bridge = new SimpleSchema2Bridge(schema);

  const submit = (doc) => {
    const { email, password } = doc;
    Meteor.loginWithPassword(email, password, (err) => {
      if (err) {
        setError(err.reason);
      } else {
        setRedirect(true);
      }
    });
  };

  if (redirect) {
    return (<Navigate to="/" />);
  }
  return (
    <Container id="signin-page">
      <Row className="justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
        <Col xs={4}>
          <AutoForm schema={bridge} onSubmit={data => submit(data)}>
            <Card style={cardVisual}>
              <Card.Body>
                <Col className="text-center">
                  <h2 style={{ fontFamily: 'Poppins' }}>Login</h2>
                </Col>
                <TextField inputClassName="border-dark" id="signin-form-email" name="email" placeholder="" />
                <TextField inputClassName="border-dark" id="signin-form-password" name="password" placeholder="" type="password" />
                <ErrorsField />
                <SubmitField id="signin-form-submit" inputClassName="p-2 bg-white border-1 rounded-1 mt-1" />
              </Card.Body>
              <p style={{ textAlign: 'center' }}>New to Envision Lahaina? <Link style={{ color: 'black' }} to="/signup">Sign Up</Link></p>
            </Card>
          </AutoForm>
          {error === '' ? (
            ''
          ) : (
            <Alert variant="danger">
              <Alert.Heading>Login was not successful</Alert.Heading>
              {error}
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
