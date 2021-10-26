import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';


const Admin = () => {
    const { userInfo } = useAuth();
    return (
        <div>
            <h2 className="fw-bold mt-5 p-5">Admin Name: {userInfo?.displayName}</h2>
            <Link to="/admin/manageService">
                <Button variant="danger" className="me-3">Go to Manage Services</Button>
            </Link>
        </div>
    );
};

export default Admin;