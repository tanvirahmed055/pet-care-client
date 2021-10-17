import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const Service = (props) => {
    console.log(props);
    const { name, img, shortDescription } = props.service;

    return (
        <Col>
            <Card className="text-center h-100">
                <Card.Img variant="top" src={img} style={{ height: '300px' }} />
                <Card.Body>
                    <Card.Title className="fw-bolder">{name}</Card.Title>
                    <Card.Text>
                        {shortDescription}
                    </Card.Text>
                </Card.Body>
                <Button variant="primary" size="lg">
                    Details
                </Button>{' '}
            </Card>
        </Col>
    );
};

export default Service;