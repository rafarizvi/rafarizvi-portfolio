import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { validateEmail } from '../utils/helpers';

function contact() {

  const form = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [validated, setValidated] = useState(false);

  const handleInputChange = (e) => {
    setSuccessMessage('')

    const { target } = e;
    const inputName = target.name;
    const inputValue = target.value;

    if (inputName === 'name') {
      setName(inputValue);
    } else if (inputName === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!validateEmail(email) || !name) {
      setErrorMessage('Email or username is invalid');
      return;
    }

    if (!message) {
      setErrorMessage('Please type a message');
      return;
    }

    // setValidated(true);
    setErrorMessage('');
    sendMail();
    setSuccessMessage('Message sent successfully!')
    setName('');
    setEmail('');
    setMessage('');
  };

  function sendMail() {
    emailjs.sendForm('service_8hk4sua', 'template_tx629bl', form.current, {
      publicKey: 'nDuwMSiDAv-TZV0hx',
    })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  }

  return (
    <div>
      <h2>Contact</h2>
      <Form ref={form} noValidate validated={validated} onSubmit={handleSubmit} className='contact' >
        <Row className="mb-3">
          <Form.Group as={Col} md="12">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              value={name}
              name="name"
              onChange={handleInputChange}
              type="text"
              placeholder="Name"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="12">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="Email"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="12">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea"
              required
              value={message}
              name="message"
              onChange={handleInputChange}
              type="text"
              placeholder="Type a message"
            />
          </Form.Group>
        </Row>
        <Button type="submit" value="Send" className='submitBtn'>Submit</Button>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        {successMessage && (
          <div>
            <p className="error-text" style={{ color: 'green' }}>{successMessage}</p>
          </div>
        )}
      </Form>
    </div>
  );
}

export default contact;

