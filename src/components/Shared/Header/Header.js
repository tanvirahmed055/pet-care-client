import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import useAuth from '../../../hooks/useAuth'

const Header = () => {
    const { userInfo, handleLogOut } = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Pet Care</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        {userInfo?.email && <Nav.Link className="me-2 fw-bold text-white" href="#features">Signed in as: {userInfo?.displayName}</Nav.Link>}

                        <Nav.Link className="me-2" href="#features">Services</Nav.Link>
                        <Nav.Link href="#pricing" className="me-2">Our Team</Nav.Link>
                        <Nav.Link href="#features" className="me-3">About Us</Nav.Link>

                        {
                            userInfo?.email && <Link to="/store">
                                <Button variant="primary" className="me-3">In House Pharmacy</Button>
                            </Link>
                        }

                        {userInfo?.email ? <Link to="/">
                            <Button variant="warning" className="me-3" onClick={() => handleLogOut()}>Logout</Button>
                        </Link> :
                            <Link to="/login">
                                <Button variant="warning" className="me-3">Login</Button>
                            </Link>
                        }

                        <Link to="/register">
                            <Button variant="danger" className="me-3">Signup</Button>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;