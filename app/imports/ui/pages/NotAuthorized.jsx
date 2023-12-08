import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { PageIDs } from '../utilities/ids';

const NotAuthorized = () => (
  <div id={PageIDs.notAuthorized}>
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={4} className="text-center">
          <h2>
            <p>Not Authorized</p>
          </h2>
        </Col>
      </Row>
    </Container>
  </div>
);

export default NotAuthorized;
