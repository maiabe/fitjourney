import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Alert, Card, Col, Container, Row } from 'react-bootstrap';
import SimpleSchema from 'simpl-schema';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { AutoForm, ErrorsField, SubmitField, TextField } from 'uniforms-bootstrap5';

const fonts = {
  fontFamily: 'Poppins',
};

const cardVisual = {
  backgroundColor: '#F8F8F8',
  border: 'none',
  borderRadius: 0,
  paddingTop: 5,
  paddingBottom: 5,
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
      <Row className="justify-content-center align-items-center" style={{ minHeight: '77vh' }}>
        <Col xs={5}>
          <AutoForm schema={bridge} onSubmit={data => submit(data)}>
            <Card style={cardVisual}>
              <Card.Body>
                <Col className="text-center">
                  <h2 style={fonts}>LOGIN</h2>
                </Col>
                <TextField id="signin-form-email" name="email" placeholder="E-mail address" />
                <TextField id="signin-form-password" name="password" placeholder="Password" type="password" />
                <ErrorsField />
                <SubmitField id="signin-form-submit" />
              </Card.Body>
              <p style={{ textAlign: 'center' }}>New to Envision Lahaina? <Link to="/signup">Sign Up</Link></p>
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
