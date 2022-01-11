import React from 'react';
import "./WhyEggy.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Row } from 'react-bootstrap';


const WhyEggy = () => {
    return (
        <div className="py-5 bg-dark">
            <p className="text-warning">WHY Eggy?</p>
            <h1 className=" mb-5 text-warning">We Care for Your Precious Time.</h1>
            <div className="d-flex justify-content-center">
                <div className="w-75 text-center py-5">

                    <Row xs={1} md={3} className="g-4">
                        <Col>
                            <Card className="p-5 bg-color">
                                <div> <Card.Img variant="top" src="/restaurant.png" className="w-25" />
                                </div>
                                <Card.Body>
                                    <h2>The Best Foods</h2>
                                    <Card.Text>
                                        Food is such a thing what we all eat to live but many people have a special love with food mostly who love to eat.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="p-5 bg-color">
                                <div>   <Card.Img variant="top" src="/scooter.png" className="w-25" /> </div>
                                <Card.Body>
                                    <h2>The Best Courier</h2>
                                    <Card.Text>
                                        Give your clients the earliest delivery consistent with quality - whatever the inconvenience to us.

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="p-5 bg-color">
                                <div>  <Card.Img variant="top" src="/support.png" className="w-25" /></div>
                                <Card.Body>
                                    <h2>24/7 Support</h2>
                                    <Card.Text>
                                        Be strong, be fearless, be beautiful. And believe that anything is possible when you have the right people there to support you.

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>

                </div>
            </div>
        </div>
    );
};

export default WhyEggy;