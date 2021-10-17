import React from 'react';
import { Button } from 'react-bootstrap';
import banner from '../../../img/banner.jpeg';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-container">
            <div className="container centered">
                <h1 className="fw-bolder text-center text-white ">Welcome to Pet Care</h1>
                <h4 className="text-center text-white  mt-3">We are offering quality medical care with the latest medical<br /> technology for your pet friend.</h4>
                <Button variant="primary" size="lg" className="mt-3">Know More!</Button>{' '}
            </div>
        </div>
    );
};

export default Banner;