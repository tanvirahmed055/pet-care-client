import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
    const { handleUserLogin, handleGoogleLogin } = useFirebase();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailInput = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordInput = (e) => {
        setPassword(e.target.value);
    }


    return (
        <div className="container mt-5">
            <h2 className="fw-bolder text-center mb-5">Sign In</h2>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control onBlur={handleEmailInput} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordInput} type="password" placeholder="Password" />
                    </Form.Group>
                </Row>

                <Form.Group className="mt-5 mb-5 text-start" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button onClick={() => { handleUserLogin(email, password) }} variant="primary" type="button" size="lg">
                    Submit
                </Button>

                <Button onClick={() => { handleGoogleLogin() }} variant="danger" type="button" size="lg" className="ms-3">
                    Google Signin
                </Button>

            </Form>
        </div>
    );
};

export default Login;