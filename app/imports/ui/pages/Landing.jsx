import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { PageIDs } from '../utilities/ids';

const Landing = () => (
  <div id={PageIDs.landing}>
    <div className="py-5 landing-white-background">
      <Container className="justify-content-center text-center">
        <Row md={1} lg={2} className="justify-content-center d-flex">
          {/* eslint-disable-next-line max-len */}
          <Col xs={6}>
            <br />
            <h2 style={{ fontSize: '4em', marginTop: '1em', color: 'black', fontWeight: 'bold' }}>
              Our Mission.
            </h2>
            {/* eslint-disable-next-line max-len */}
            <p style={{ color: 'black', fontSize: '110%' }}>With your health in mind, we have created this web application to aid you in tracking your current lifestyle. Through our app, you are able to use our tracker section to log how long you were physically active for the day and also add personal notes about your workout!</p>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
);

export default Landing;
