import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import {
    useParams
} from "react-router-dom";

import Image from 'react-bootstrap/Image'

const ServiceDetails = () => {

    // const [services] = useServices();
    let { serviceId } = useParams();

    // const currentService = services[serviceId - 1];

    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/singleService/${serviceId}`)
            .then(res => res.json())
            .then(data => {
                setService(data);
                //console.log(data);
            })

    }, [])

    return (
        <Container className="text-center mt-5">
            <Row>
                <Col sm={7}>
                    <Image src={service?.img} style={{ width: '500px', height: '500px' }} fluid />
                </Col>
                <Col sm={5}>
                    <h3 className="fw-bolder text-start">Service Name:&nbsp;{service?.name}</h3>
                    <p className="text-start mt-5 mb-4"><span className="text-decoration-underline">Service Description:</span>&nbsp;{service?.detailDescription}</p>
                    <h5>Service Fee: &nbsp;${service?.price}</h5>
                    <Button className="mt-3" variant="primary" size="lg">Book an Appoinment</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ServiceDetails;