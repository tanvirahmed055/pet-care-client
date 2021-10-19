import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import about_image from '../../../img/about_image.jpeg';
import about_image1 from '../../../img/about_image1.jpeg';

const About = () => {
    return (
        <Container className="mt-5 pt-4 mb-5" id="about">
            <Row className="g-4">
                <Col sm={5} >
                    <h3 className="fw-bolder mb-3">About Us</h3>
                    <p className="text-start">If you live in Banani or the surrounding areas, then you have picked the perfect site to find a veterinarian.Your pet's health and well being is very much important to us and we will take every necessary steps to give your pet the best possible medical care.<br /><br />Pet Care is the most renowed pet medical care service provider in the region and will take both emergency cases as well as less urgent medical, surgical, and dental issues. We are experienced in all types of conditions and treatments. Beyond first rate pet care, we make our clinic comfortable, and a very calm environment so your pet can relax in the waiting room. Our hospital is very easy to get to, and you can find directions at the bottom of any page on our website.</p>
                </Col>
                <Col sm={7}>
                    <div className="container pt-2">
                        <Image src={about_image1} fluid />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default About;