import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import useStore from '../../../hooks/useStore';
import StoreItem from '../StoreItem/StoreItem';

const StoreItems = () => {
    const [store] = useStore();
    return (
        <div className="container mt-5">
            <h1 className="text-center">Pharmacy and Pet Food</h1>
            <p className="text-center mb-5">In our pet retail section, you'll find a variety of pet medicines, supplements, shampoos, <br />oral care products, and other pet-related products.</p>
            <Row xs={1} md={2} className="g-4">
                {
                    store.map(item => <StoreItem key={item.id} item={item}></StoreItem>)
                }
            </Row>

        </div>
    );
};

export default StoreItems;