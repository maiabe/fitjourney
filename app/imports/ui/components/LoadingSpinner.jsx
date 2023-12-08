import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import { ComponentIDs } from '../utilities/ids';

const LoadingSpinner = () => (
  <Container>
    <Row className="justify-content-md-center">
      <Spinner id={ComponentIDs.loadingSpinner} animation="border" />
      Getting data
    </Row>
  </Container>
);

export default LoadingSpinner;
