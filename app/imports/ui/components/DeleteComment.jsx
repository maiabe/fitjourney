import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row } from 'react-bootstrap';
import swal from 'sweetalert';
import { Comments } from '../../api/comment/comment';
import { ComponentIDs } from '../utilities/ids';

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
    <div id={ComponentIDs.deleteComment}>
      <Container className="pb-3">
        <Row className="justify-content-lg-start">
          <Col>
            <button type="button" className="btn btn-outline-info" onClick={deleteComment}>Delete Comment</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

DeleteComment.propTypes = {
  commentId: PropTypes.string.isRequired,
};

export default DeleteComment;
