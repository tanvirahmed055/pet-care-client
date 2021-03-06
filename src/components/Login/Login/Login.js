import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import {
    useHistory,
    useLocation
} from "react-router-dom";


const Login = () => {
    const { handleUserLogin, handleGoogleLogin } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleEmailInput = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordInput = (e) => {
        setPassword(e.target.value);
    }

    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    let handleLogin = () => {
        handleUserLogin(email, password)
            .then((result) => {
                // Signed in 
                // ...

                history.push(from);

            })
            .catch((error) => {
                const errorCode = error.code;
                if (errorCode === 'auth/user-not-found') {
                    let errorMessage1 = 'Please provide the correct email address to login';
                    setErrorMessage(errorMessage1);
                } else if (errorCode === 'auth/wrong-password') {
                    let errorMessage2 = 'Incorrect Password';
                    setErrorMessage(errorMessage2);
                }
            });
    };

    let handleLoginForGoogle = () => {
        handleGoogleLogin()
            .then((result) => {
                // The signed-in user info.
                history.push(from);
                // ...
            }).catch((error) => {
                // Handle Errors here.

            });
    };

    return (
        <div className="container mt-5">
            <h2 className="fw-bolder text-center mb-5">Sign In</h2>
            <Form>
                <Row className="mb-5">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control onBlur={handleEmailInput} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordInput} type="password" placeholder="Password" />
                    </Form.Group>
                </Row>
                <div>
                    <h4 className="text-danger mb-5">{errorMessage}</h4>
                </div>
                <div className="mt-3 mb-5">
                    <Link to="/register">
                        <h4 className="toggle-button">New Here?</h4>
                        <Button variant="success" className="ms-3" size="lg">Sign Up</Button>
                    </Link>
                </div>

                <Button onClick={() => handleLogin()} variant="primary" type="button" size="lg">
                    Submit
                </Button>

                <Button onClick={() => { handleLoginForGoogle() }} variant="danger" type="button" size="lg" className="ms-3">
                    Google Signin
                </Button>

            </Form>
        </div>
    );
};

export default Login;