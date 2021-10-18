import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    Link,
    useHistory
} from "react-router-dom";

const Service = (props) => {

    const { id, name, img, shortDescription } = props.service;

    let history = useHistory();




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
                <Button onClick={() => history.push(`/services/${id}`)} variant="primary" size="lg">
                    Details
                </Button>

            </Card>
        </Col >
    );
};

export default Service;