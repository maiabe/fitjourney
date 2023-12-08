import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { AutoForm, ErrorsField, HiddenField, LongTextField, SubmitField, TextField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { Profiles } from '../../api/profile/profile';
import FileField from '../components/FileField';
import { PageIDs } from '../utilities/ids';

const bridge = new SimpleSchema2Bridge(Profiles.schema);

const AddProfile = () => {
  const [imageFile, setImageFile] = useState(null);
  let fRef = null;
  const user = Meteor.user();

  const handleImageChange = (file) => {
    setImageFile(file);
  };

  const submit = (data) => {
    const { image, ...profileData } = data;
    // eslint-disable-next-line no-shadow
    const insertProfile = (profileData) => {
      Profiles.collection.insert(profileData, (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Profile added successfully', 'success');
          if (fRef) {
            fRef.reset();
          }
        }
      });
    };
    Meteor.call('textCheck', profileData.bio, (error) => {
      if (error) {
        console.error(error);
        swal('Error', 'Inappropriate Content in Bio', 'error');
        return;
      }
      if (imageFile) {
        const reader = new FileReader();
        reader.onloadend = function () {
          const fileData = reader.result;

          Meteor.call('uploadImage', fileData, (err, imageUrl) => {
            if (err) {
              swal('Error', 'Failed to upload image.', 'error');
            } else {
              profileData.image = imageUrl;
              insertProfile(profileData);
            }
          });
        };
        reader.readAsDataURL(imageFile);
      } else {
        insertProfile(profileData);
      }
    });
  };

  return (
    <div id={PageIDs.addProfile}>
      <Container className="py-3">
        <Row className="justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
          <Col xs={5}>
            <Col className="text-center"><h2>Add Profile</h2></Col>
            <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
              <Card style={{ backgroundColor: 'white', border: 'none' }}>
                <Card.Body>
                  <TextField inputClassName="border-dark" name="firstName" />
                  <TextField inputClassName="border-dark" name="lastName" />
                  <TextField inputClassName="border-dark" name="location" />
                  <div className="mb-3">
                    <FileField name="image" onChange={handleImageChange} />
                  </div>
                  <LongTextField inputClassName="border-dark" name="bio" />
                  <ErrorsField />
                  <SubmitField inputClassName="p-2 bg-white border-1 rounded-1 mt-1" value="Submit" />
                  {user ? <HiddenField name="owner" value={user.username} /> : null}
                </Card.Body>
              </Card>
            </AutoForm>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddProfile;
