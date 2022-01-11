import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Restaurant.css'
const Restaurant = (props) => {
    const { name, img, location, review } = props.item;
    return (
        <div>
            <Col className="col-design1" >

                <Card className="card card-design1 ">
                    <Card.Img variant="top" src={img} className="image-size" />
                    <Card.Body >
                        <Card.Title className="card-title">{name}</Card.Title>
                        <p>{location}</p>
                        <p>Review : ({review})<span className="text-warning">&#9733;&#9733;&#9733;&#9733;&#9733;</span></p>
                    </Card.Body>
                    <button className=" text-dark bg-warning fw-bold mb-2 mx-2 ">Choice</button>


                </Card>
            </Col>
        </div>
    );
};

export default Restaurant;