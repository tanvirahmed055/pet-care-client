import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Registration.css';
import useAuth from '../../../hooks/useAuth';

const Registration = () => {
    const { handleUserRegistration, handleGoogleLogin } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState();



    const handleEmailInput = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordInput = (e) => {
        setPassword(e.target.value);
    }
    const handleNameInput = (e) => {
        setName(e.target.value);
    }
    return (
        <div className="container mt-5">
            <h2 className="fw-bolder text-center mb-5">Sign Up</h2>
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

                <Form.Group className="mb-3" controlId="formGridName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onBlur={handleNameInput} placeholder="Your Name" />
                </Form.Group>

                <div className="mt-3 mb-3">
                    <Link to="/login">
                        <h4 className="toggle-button">Already Have an account?</h4>
                        <Button variant="success" className="ms-3" size="lg">Login</Button>
                    </Link>
                </div>
                <br />

                <Button onClick={() => { handleUserRegistration(email, password, name) }} variant="primary" type="button" size="lg">
                    Submit
                </Button>

                <Button onClick={() => { handleGoogleLogin() }} variant="danger" type="button" size="lg" className="ms-3">
                    Google Signin
                </Button>
            </Form>
        </div>
    );
};

export default Registration;