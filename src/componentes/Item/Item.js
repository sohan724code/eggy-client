import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = (props) => {

    const { _id, name, img, description } = props.item;
    return (
        <div>
            <Col className="col-design" >

                <Card className="card card-design ">
                    <Card.Img variant="top" src={img} className="image-size" />
                    <Card.Body >
                        <Card.Title className="card-title fw-bold mb-4">{name}</Card.Title>
                        <p className="text-start">{description}</p>
                    </Card.Body>

                    <Link to={`/placeOrder/${_id}`}>
                        <button className=" text-dark bg-warning fw-bold mb-2 mx-2 w-75">Order</button>
                    </Link>

                </Card>
            </Col>
        </div>
    );
};

export default Item;