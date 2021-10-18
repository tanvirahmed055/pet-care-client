import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import {
    useParams
} from "react-router-dom";

import Image from 'react-bootstrap/Image'

const AppointmentDetail = () => {
    const [services] = useServices();
    let { serviceId } = useParams();

    const currentService = services[serviceId - 1];
    return (
        <Container className="text-center mt-5">
            <Row>
                <Col sm={7}>
                    <Image src={currentService?.img} style={{ width: '500px', height: '500px' }} fluid />
                </Col>
                <Col sm={5}>
                    <h3 className="fw-bolder text-start">Service Name:&nbsp;{currentService?.name}</h3>
                    <p className="text-start mt-5"><span className="text-decoration-underline">Service Description:</span>&nbsp;{currentService?.detailDescription}</p>
                    <Button variant="primary">Proceed to book an appointment</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default AppointmentDetail;