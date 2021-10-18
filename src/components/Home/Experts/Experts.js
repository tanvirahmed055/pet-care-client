import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Experts = () => {

    const experts = [
        {
            name: 'Dr. Steve Archi',
            specialities: 'Animal Medicine',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0lv2TTkWj6OkGH25V9gu0Zw0V8MDosT-hWw&usqp=CAU'
        },
        {
            name: 'Dr. Steve Archi',
            specialities: 'Surgery',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY1G8_J5QHaeTFaQWvw0_U0GY_ipfwu7Ag_A&usqp=CAU'
        },
        {
            name: 'Dr. Mark Torry',
            specialities: 'Dental',
            img: 'https://jupiterx.artbees.net/vet-2/wp-content/uploads/sites/435/2020/06/gallery-05.jpg'
        }
    ]
    return (
        <div className="container mt-5">
            <h3 className="fw-bolder mb-3">Our Team</h3>
            <p className="text-center mb-4">We have a team of expert veterinarians who specialized in diverse fields <br />who has years of experience working with pets</p>
            <Row xs={1} md={3} className="g-4">
                {
                    experts.map(expert => <Col>
                        <Card className="text-center h-100">
                            <Card.Img variant="top" src={expert.img} style={{ height: '300px' }} />
                            <Card.Body>
                                <Card.Title>Name: {expert.name}</Card.Title>
                                <Card.Text>
                                    Specialities:&nbsp; {expert.specialities}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>)
                }
            </Row>
        </div>
    );
};

export default Experts;