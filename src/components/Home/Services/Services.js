import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';


const Services = () => {
    const [services] = useServices();

    return (
        <div className="container mt-5" id="services">
            <h1 className="text-center">Our Services</h1>
            <p className="text-center mb-5">Our highly qualified and devoted veterinarians, and staff members strive to provide compassionate and complete veterinary care. Above all, we want our clients to feel confident, knowing that their pets are receiving the very best veterinary care.</p>
            <Row xs={1} md={2} className="g-4">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </Row>

        </div>
    );
};

export default Services;