import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, HiddenField, SubmitField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { Comments } from '../../api/comment/comment';

const bridge = new SimpleSchema2Bridge(Comments.schema);

const DeleteComment = ({ postId }) => {
  // const [imageFile, setImageFile] = useState(null);
  let fRef = null;
  const user = Meteor.user();

  const deleteComment = (data) => {
    // eslint-disable-next-line no-shadow
    const insertComment = (commentData) => {
      Comments.collection.insert(commentData, (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Comment DELETED successfully', 'success');
          fRef.reset();
        }
      });
    };
  };

  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={10}>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={deleteComment}>
            <Card>
              <Card.Body>
                <ErrorsField />
                <SubmitField value="Delete" />
                <HiddenField name="postId" value={postId} />
                {user ? <HiddenField name="owner" value={user.username} /> : null}
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  );
};

DeleteComment.propTypes = {
  postId: PropTypes.string.isRequired,
};

export default DeleteComment;
