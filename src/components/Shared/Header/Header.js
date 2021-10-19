import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';


const Header = () => {
    const { userInfo, handleLogOut } = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to="/">
                    <Navbar.Brand >Pet Care</Navbar.Brand></Link>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        {userInfo?.email && <Nav.Link className="me-2 fw-bold text-white" >Signed in as: {userInfo?.displayName}</Nav.Link>}

                        <HashLink className="me-2 nav-link" style={{ color: 'white' }} to="/home#services">Services</HashLink>

                        <HashLink className="me-2 nav-link" style={{ color: 'white' }} to="/home#team">Our Team</HashLink>

                        <HashLink className="me-2 nav-link" style={{ color: 'white' }} to="/home#about">About Us</HashLink>


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