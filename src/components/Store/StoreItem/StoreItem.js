import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import {
    useHistory
} from "react-router-dom";

const StoreItem = (props) => {

    const { id, name, img } = props.item;

    let history = useHistory();
    return (
        <Col>
            <Card className="text-center h-100">
                <Card.Img variant="top" src={img} style={{ height: '300px' }} />
                <Card.Body>
                    <Card.Title className="fw-bolder">{name}</Card.Title>
                </Card.Body>
                <Button onClick={() => history.push(`/items/${id}`)} variant="primary" size="lg">
                    Details
                </Button>

            </Card>
        </Col >
    );
};

export default StoreItem;