import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { EmojiSmile } from 'react-bootstrap-icons';

const Landing = () => (
  <div>
    <div className="py-5 landing-white-background">
      <Container className="justify-content-center text-center">
        <Row md={1} lg={2} className="justify-content-center d-flex">
          <Col xs={6}>
            <br />
            <h2 style={{ fontSize: '4em', marginTop: '1em', color: 'black', fontWeight: 'bold' }}>
              <EmojiSmile style={{ color: 'black', marginRight: '10px' }} size="10%" />
              Our Mission.
            </h2>
            {/* eslint-disable-next-line max-len */}
            <p style={{ color: 'black', fontSize: '110%' }}>We want to create a web portal that facilitates the civic engagement around how to rebuild Lahaina, Maui, including surveys, forums, sharing design concepts with visual and mappinig models for economic, environmental, etc. analysis.</p>
          </Col>
          {/* eslint-disable-next-line max-len */}
          <iframe width="500" height="400" src="https://www.youtube.com/embed/fgE0OuY0J84?si=cZSjfNZRzep10EOO" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        </Row>
      </Container>
    </div>

    <div className="bg-black py-4">
      <Container className="justify-content-center text-center">
        <h2 className="py-5" style={{ color: 'white' }}>Visualization</h2>
        <Row md={1} lg={2}>
          <Col xs={6}>
            <Image
              src="/images/Generative-AI.png"
              width="80%"
              height="80%"
              className="image-spacing"
              style={{
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }}
            />
            <h5 className="m-1 text-white">Dalle-3</h5>
            <p className="m-1 text-white">Generate text into an image</p>
          </Col>
          <Col xs={6}>
            <Image
              src="/images/Embedded-VR.png"
              width="80%"
              height="80%"
              className="image-spacing"
              style={{
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }}
            />
            <h5 className="m-1 text-white">GIS-Maps</h5>
            <p className="m-1 text-white">Show current damages in Lahaina</p>
          </Col>
        </Row>
      </Container>
    </div>

    <div className="py-5 landing-white-background  text-center">
      <h2 className="p-4" style={{ color: 'black' }}>
        Civic Engagement
      </h2>
      <Container>
        <Row md={1} lg={2}>
          <Col xs={6}>
            <h5 className="m-1 text-dark">Forums</h5>
            <p className="m-1 text-dark">Interact with the community</p>
            <Image
              src="/images/forum-page2.png"
              width="80%"
              height="80%"
              className="image-spacing"
              style={{
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }}
            />
          </Col>
          <Col xs={6}>
            <h5 className="m-1 text-dark">Surveys</h5>
            <p className="m-1 text-dark">Poll people on different topics</p>
            <Image
              src="/images/Survey-Page.png"
              width="80%"
              height="80%"
              className="image-spacing"
              style={{
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  </div>
);

export default Landing;
