import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const EditPost = ({ postId }) => (
  <div>
    <Container className="pb-3">
      <Row className="justify-content-lg-start">
        <Col>
          <button type="button" className="btn btn-secondary"><Link to={`/editpost/${postId}`} style={{ color: 'white', textDecoration: 'none' }}>Edit Post</Link></button>
        </Col>
      </Row>
    </Container>
  </div>
);

EditPost.propTypes = {
  postId: PropTypes.string.isRequired,
};

export default EditPost;
