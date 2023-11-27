import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row } from 'react-bootstrap';
import swal from 'sweetalert';
import { Posts } from '../../api/post/post';

const DeletePost = ({ postId }) => {
  // const [imageFile, setImageFile] = useState(null);
  // eslint-disable-next-line no-shadow
  const deletePost = () => {
    Posts.collection.remove({ _id: postId }, (error) => {
      if (error) {
        swal('Error', error.message, 'error');
      } else {
        swal('Success', 'Comment DELETED successfully', 'success');
      }
    });
  };

  return (
    <Container className="pb-3">
      <Row className="justify-content-lg-start">
        <Col>
          <button type="button" className="btn btn-danger" onClick={deletePost}>Delete Post</button>
        </Col>
      </Row>
    </Container>
  );
};

DeletePost.propTypes = {
  postId: PropTypes.string.isRequired,
};

export default DeletePost;
