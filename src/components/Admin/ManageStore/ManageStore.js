import React from 'react';
import useStore from '../../../hooks/useStore';
import { Button, Col, Container, Row } from 'react-bootstrap';


const ManageStore = () => {
    const [store] = useStore();


    return (
        <div>
            <h2>Welcome to Manage Store</h2>
            <div className="mt-5">
                {
                    store.map(item => <li className="fw-bold mb-5">Product Name:&nbsp;{item?.name}
                        <Button className="ms-3" variant="danger" size="sm">Delete Item</Button>
                        <Button className="ms-3" variant="primary" size="sm">Update Item</Button></li>
                    )
                }
            </div>
        </div>
    );
};

export default ManageStore;