import React from 'react';
import { Col, Container, FormControl, InputGroup, Button, Row } from 'react-bootstrap';
import './Footer.css';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <div className="mt-5 bg-dark text-white" >
            <Container className="p-5">
                <Row>
                    <Col sm={5}>
                        <h3 className="fw-bolder mb-3">Pet Care Medical Center</h3>
                        <p className="mb-3">We have our own expert medical experts who will examine every single details of your darling pet.</p>
                        <div className="icons text-center mb-3">
                            <i className="fab fa-facebook-square fa-2x icon facebook-icon-color me-2"></i>
                            <i className="fab fa-twitter-square fa-2x icon twitter-icon-color me-2"></i>
                            <i className="fab fa-linkedin fa-2x icon linkedin-icon-color me-2"></i>
                            <i className="fab fa-youtube-square fa-2x icon youtube-icon-color me-2"></i>
                            <i className="fab fa-whatsapp-square fa-2x icon whatsapp-icon-color me-2"></i>
                        </div>
                    </Col>
                    <Col sm={3}>
                        <h3 className="text-center">Quick Links</h3>
                        <ul>

                            <HashLink className="me-2 nav-link" style={{ color: 'white' }} to="/home#services">Services</HashLink>

                            <HashLink className="me-2 nav-link" style={{ color: 'white' }} to="/home#team">Our Team</HashLink>

                            <HashLink className="me-2 nav-link" style={{ color: 'white' }} to="/home#about">About Us</HashLink>
                        </ul>

                    </Col>
                    <Col sm={4}>
                        <h3 className="mb-3">Join Our Mailing List</h3>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Your email address"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="primary" id="button-addon2">
                                Subscribe
                            </Button>
                        </InputGroup>
                        <div className="footer-phone mb-3">
                            <i className="fas fa-phone"></i>&nbsp;
                            +881-8479375865
                        </div>
                        <div className="footer-addresss mb-3">
                            <i className="fas fa-map-marker-alt"></i>&nbsp;
                            48, Banani, Dhaka, Bangladesh.
                        </div>

                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Footer;