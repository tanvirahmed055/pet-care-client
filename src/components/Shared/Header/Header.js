import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Pet Care</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className="me-2" href="#features">About Us</Nav.Link>
                        <Nav.Link href="#pricing" className="me-2">Services</Nav.Link>
                        <Nav.Link href="#features" className="me-3">Contact Us</Nav.Link>
                        <Button variant="warning" className="me-3">Login</Button>{' '}
                        <Button variant="danger" className="me-3">Signup</Button>{' '}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;