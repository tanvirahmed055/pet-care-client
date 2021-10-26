import React from 'react';
import useServices from '../../../../hooks/useServices';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import {
    useHistory
} from "react-router-dom";

const ManageServices = () => {
    const [services] = useServices();

    let history = useHistory();

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
                    services.map(service => <li className="fw-bold mb-5" key={service?._id}>Service Name:&nbsp;{service?.name}
                        <Button onClick={() => handleDelete(service?._id)} className="ms-3" variant="danger" size="sm">Delete Service</Button>

                        <Button onClick={() => history.push(`/admin/manageService/updateService/${service?._id}`)} variant="primary" size="sm" className="ms-3">
                            Update Service
                        </Button>
                    </li>
                    )
                }
            </div>
            <div>
                <Link to='/admin/manageService/addService'>
                    <Button variant="success" className="me-3">Add a New Service</Button>
                </Link>
            </div>
        </div >
    );
};

export default ManageServices;