import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import './MyOrder.css'
const MyOrder = (props) => {
    const { order } = props;
    const { name, email, mobilenumber, quantity, address, id, status, _id } = order;

    const [item, setItem] = useState([])
    useEffect(() => {
        const url = `https://pacific-castle-18171.herokuapp.com/items/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, []);
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://pacific-castle-18171.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        window.location.reload();

                    }
                });
        }
    }


    return (
        <div>
            <Col className="full-cards">
                <Card className="full-card">
                    <div className="mybook-section py-3">
                        <div className="room-details-section ">
                            <div className=" image-div">
                                <img src={item.img} className="w-100" alt="" />
                            </div>
                            <div className="details-div d-flex justify-content-center ps-2">
                                <div> <h4 className="fw-bold">{item.name}</h4>
                                </div>

                            </div>
                        </div>

                        <div className="order-details-section d-flex align-items-center justify-content-center  ">
                            <div className="  order-details  ">
                                <p>Name:{name}</p>
                                <p> Email:{email}</p>
                                <p>  Mobile Number:{mobilenumber}</p>
                                <p>  Quantity:{quantity}</p>
                                <p>  Address:{address}</p>

                                <p> </p>
                                <p className="text-danger fw-bold">Status: {status}</p>
                            </div>


                        </div>

                        <div className="button-section d-flex align-items-end justify-content-end">
                            <button className="px-4 bg-warning px-5  fw-bold py-1 me-2" onClick={() => { handleDelete(_id) }}>Delete</button>
                        </div>
                    </div>
                </Card>
            </Col>
        </div>
    );
};

export default MyOrder;