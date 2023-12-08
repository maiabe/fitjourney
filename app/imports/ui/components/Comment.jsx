import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, Image } from 'react-bootstrap';
import DeleteComment from './DeleteComment';
import { ComponentIDs } from '../utilities/ids';

const Comment = ({ comment }) => (
  <div id={ComponentIDs.comment}>
    <ListGroup.Item>
      <p className="fw-lighter">{comment.owner} @ {comment.createdAt.toLocaleDateString('en-US')}</p>
      {comment.image && <Image src={comment.image} width={150} />}
      <p className="p-1">{comment.comment}</p>
      <DeleteComment commentId={comment._id} />
    </ListGroup.Item>
  </div>
);

Comment.propTypes = {
  comment: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    image: PropTypes.string,
    createdAt: PropTypes.instanceOf(Date).isRequired,
    owner: PropTypes.string.isRequired,
    postId: PropTypes.string.isRequired,
  }).isRequired,
};

export default Comment;
