import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import swal from 'sweetalert';
import LoadingSpinner from '../components/LoadingSpinner';

const Dalle3 = () => {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const generateImage = () => {
    setIsLoading(true);
    Meteor.call('generateImage', userInput, (error, imageUrl) => {
      setIsLoading(false);
      if (error) {
        swal('Error', error.message, 'error');
      } else {
        setMessages([...messages, { type: 'user', text: userInput }, { type: 'ai', imageUrl: imageUrl }]);
        setUserInput('');
      }
    });
  };

  const imageFrameStyle = {
    padding: '10px',
    marginBottom: '20px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)',
    width: '700px',
    height: '700px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    color: 'grey',
  };

  return (
    <Container style={{ width: '70%' }}>
      <Row className="justify-content-center">
        <Col style={{ maxWidth: '800px' }} className="text-center p-4">
          <Container className="m-5">
            <h1 style={{ fontSize: 60, fontWeight: 'bold' }}>Envision and generate your ideas with AI.</h1>
            <h3 style={{ marginTop: '1em', fontWeight: 'lighter', color: 'lightgray' }}>Create a prompt of your design idea and click generate. Now share your design and engage with each other on rebuilding your home or Lahaina!!!
            </h3>
          </Container>
          <h5 style={{ fontSize: 15 }}>Powered By Dall-E3</h5>
          <input
            type="text"
            placeholder="Pictures of Condo"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter' && !isLoading) generateImage(); }}
            style={{
              width: '75%',
              padding: '10px',
              fontSize: '1rem',
              margin: '10px 0',
              borderColor: 'black',
              borderRadius: '10px',
            }}
          />
          <Button style={{ borderColor: 'black', margin: 10, color: 'black', background: 'white' }} onClick={generateImage} disabled={isLoading}>Generate</Button>
          {isLoading && <LoadingSpinner />}
          <h3>Image</h3>
          <Col className="overflow-hidden messages p-4">
            {messages.map((message, index) => {
              if (message.imageUrl) {
                return (
                  <div key={index} style={imageFrameStyle}>
                    <Image width={700} src={message.imageUrl} alt="Generated from AI" />
                  </div>
                );
              }
              return (
                <div key={index} className={`message ${message.type}`}>
                  {message.text}
                </div>
              );
            })}
            {isLoading || messages.length === 0 ? (
              <div style={imageFrameStyle}>
                {isLoading ? 'Generating Image...' : 'Your Image Will Appear Here'}
              </div>
            ) : null}
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default Dalle3;
