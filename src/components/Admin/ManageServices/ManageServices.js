import React from 'react';
import useServices from '../../../hooks/useServices';
import { Button, Col, Container, Row } from 'react-bootstrap';


const ManageServices = () => {
    const [services] = useServices();

    const handleDelete = id => {
        const url = `http://localhost:5000/deleteService/${id}`
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('successfully deleted product');
                }
            })
    }

    return (
        <div>
            <h2>Welcome to Manage Services</h2>
            <div className="mt-5">
                {
                    services.map(service => <li className="fw-bold mb-5">Service Name:&nbsp;{service?.name}
                        <Button onClick={() => handleDelete(service?._id)} className="ms-3" variant="danger" size="sm">Delete Service</Button>
                        <Button className="ms-3" variant="primary" size="sm">Update Service</Button></li>
                    )
                }
            </div>

        </div>
    );
};

export default ManageServices;