import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Admin = () => {
    const { userInfo, handleLogOut } = useAuth();
    return (
        <div>
            <h2 className="fw-bold mt-5 p-5">Admin Name: {userInfo?.displayName}</h2>
            <Link to="/admin/manageServices">
                <Button variant="danger" className="me-3">Go to Manage Services</Button>
            </Link>
            <Link to="/admin/manageStore">
                <Button variant="primary" className="me-3">Go to Manage Store</Button>
            </Link>
        </div>
    );
};

export default Admin;