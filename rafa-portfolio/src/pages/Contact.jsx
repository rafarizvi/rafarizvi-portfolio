import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import { validateEmail } from '../utils/helpers';

function contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [validated, setValidated] = useState(false);

  const handleInputChange = (e) => {
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
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (!validateEmail(email) || !name) {
      setErrorMessage('Email or username is invalid');
    }

    if (validateEmail(email) && name && !message) {
      setErrorMessage('Please type a message');
    }


    setValidated(true);
  };

  return (
    <div>
      <h2>Contact</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit} className='contact' >
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
        <Button type="submit" className='submitBtn'>Submit</Button>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </Form>
    </div>
  );
}

export default contact;
