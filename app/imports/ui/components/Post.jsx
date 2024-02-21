import React from 'react';
import PropTypes from 'prop-types';
import { Accordion, Image, ListGroup } from 'react-bootstrap';
import AddComment from './AddComment';
import Comment from './Comment';
import DeletePost from './DeletePost';
import { ComponentIDs } from '../utilities/ids';

const Post = ({ post, comments, eventKey }) => (
  <Accordion.Item id={ComponentIDs.post} eventKey={eventKey}>
    <Accordion.Header>{post.title}</Accordion.Header>
    <Accordion.Body>
      <p>{post.owner} @ {post.createdAt.toLocaleDateString('en-US')}</p>
      {post.image && <Image src={post.image} width={300} />}
      <p className="p-1">{post.contents}</p>
      {post.activityDurationHours != null && post.activityDurationMinutes != null && (<p className="p-1">Duration: {post.activityDurationHours} hour(s) {post.activityDurationMinutes} minute(s)</p>)}
      <DeletePost postId={post._id} />
      <ListGroup variant="flush">
        {comments.map((comment, index) => <Comment key={index} comment={comment} />)}
      </ListGroup>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header id={ComponentIDs.addComment}>Add Comment</Accordion.Header>
          <Accordion.Body>
            <AddComment postId={post._id} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Accordion.Body>
  </Accordion.Item>
);

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    contents: PropTypes.string,
    image: PropTypes.string,
    createdAt: PropTypes.instanceOf(Date),
    owner: PropTypes.string,
    _id: PropTypes.string,
    postId: PropTypes.string,
    activityDurationHours: PropTypes.number,
    activityDurationMinutes: PropTypes.number,
  }).isRequired,
  eventKey: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape({
    note: PropTypes.string,
    contactID: PropTypes.string,
    createdAt: PropTypes.instanceOf(Date),
    owner: PropTypes.string,
    _id: PropTypes.string,
  })).isRequired,
};

export default Post;
