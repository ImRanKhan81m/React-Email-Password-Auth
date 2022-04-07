import { getAuth } from 'firebase/auth'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import app from './firebase.init';
import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';


const auth = getAuth(app)

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailBlur = event => {
    setEmail(event.target.value);
  }
  const handlePasswordBlur = event => {
    setPassword(event.target.value);
  }
  const handleFormSubmit = event => {
    console.log('form submitted', email, password);
    event.preventDefault();
  }

  return (
    <div>
      <div className="container w-50 mt-5">
        <h2 className='text-primary'> Please Register!</h2>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
