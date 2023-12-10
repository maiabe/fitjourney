import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, HiddenField, LongTextField, SubmitField, TextField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { Surveys } from '../../api/survey/survey';
import { ComponentIDs, PageIDs } from '../utilities/ids';

const bridge = new SimpleSchema2Bridge(Surveys.schema);

const AddSurvey = () => {
  const submit = (data, formRef) => {
    const { contents, createdAt, option1, option2, owner } = data;
    const insertSurvey = () => {
      Surveys.collection.insert({ contents, createdAt, option1, option2, owner }, (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Survey added successfully', 'success');
          formRef.reset();
        }
      });
    };
    Meteor.call('textCheck', contents, (errorContents) => {
      if (errorContents) {
        swal('Error', 'Inappropriate Content in Survey Contents', 'error');
        return;
      }
      Meteor.call('textCheck', option1, (error1) => {
        if (error1) {
          swal('Error', 'Inappropriate Content in Option 1', 'error');
          return;
        }
        Meteor.call('textCheck', option2, (error2) => {
          if (error2) {
            swal('Error', 'Inappropriate Content in Option 2', 'error');
            return;
          }
          // If all text checks pass, insert the survey
          insertSurvey();
        });
      });
    });
  };

  let fRef = null;
  const user = Meteor.user();

  return (
    <div id={PageIDs.addSurvey}>
      <Container className="py-3">
        <Row className="justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
          <Col xs={5}>
            <Col className="text-center"><h2>Add Survey</h2></Col>
            <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
              <Card style={{ backgroundColor: 'white', border: 'none' }}>
                <Card.Body>
                  <LongTextField id={ComponentIDs.addSurveyContent} inputClassName="border-dark" name="contents" />
                  <HiddenField name="createdAt" value={new Date()} />
                  <TextField id={ComponentIDs.addSurveyOption1} inputClassName="border-dark" name="option1" />
                  <TextField id={ComponentIDs.addSurveyOption2} inputClassName="border-dark" name="option2" />
                  <ErrorsField />
                  <SubmitField id={ComponentIDs.submitSurvey} inputClassName="p-2 bg-white border-1 rounded-1 mt-1" value="Submit" />
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

export default AddSurvey;
