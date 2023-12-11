import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { PageIDs } from '../utilities/ids';

const NotFound = () => (
  <div id={PageIDs.notFound}>
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={4} className="text-center">
          <h2>
            <p>Page not found</p>
          </h2>
        </Col>
      </Row>
    </Container>
  </div>
);

export default NotFound;
