import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import useStore from '../../../hooks/useStore';
import {
    useParams
} from "react-router-dom";

import Image from 'react-bootstrap/Image'

const StoreItemDetail = () => {
    const [store] = useStore();
    let { itemId } = useParams();

    const currentItem = store[itemId - 1];
    return (
        <Container className="text-center mt-5">
            <Row>
                <Col sm={7}>
                    <Image src={currentItem?.img} style={{ width: '500px', height: '500px' }} fluid />
                </Col>
                <Col sm={5}>
                    <h3 className="fw-bolder text-start">Name:&nbsp;{currentItem?.name}</h3>
                    <p className="text-start mt-5 mb-4"><span className="text-decoration-underline">Description:</span>&nbsp;{currentItem?.description}</p>
                    <h5>Price: &nbsp;${currentItem?.price}</h5>
                    <Button className="mt-3" variant="primary" size="lg">Buy Now</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default StoreItemDetail;