import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row } from 'react-bootstrap';
import swal from 'sweetalert';
import { Comments } from '../../api/comment/comment';

// const bridge = new SimpleSchema2Bridge(Comments.schema);

const DeleteComment = ({ commentId }) => {
  // const [imageFile, setImageFile] = useState(null);
  // eslint-disable-next-line no-shadow
  const deleteComment = () => {
    Comments.collection.remove({ _id: commentId }, (error) => {
      if (error) {
        swal('Error', error.message, 'error');
      } else {
        swal('Success', 'Comment DELETED successfully', 'success');
      }
    });
  };

  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={10}>
          <button type="button" onClick={deleteComment}>Delete</button>
        </Col>
      </Row>
    </Container>
  );
};

DeleteComment.propTypes = {
  commentId: PropTypes.string.isRequired,
};

export default DeleteComment;
