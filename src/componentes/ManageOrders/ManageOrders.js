import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ManageOrder from '../ManageOrder/ManageOrder';

const ManageOrders = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        const url = `https://pacific-castle-18171.herokuapp.com/orders`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);
    return (
        <div>
            <div className="py-5">
                <h2 className="  fw-bold text-center text-warning fs-1 "> <u>Manage Order</u></h2>
                <Row xs={1} md={1} className="g-4 m-4 ">
                    {
                        orders.map(order => <ManageOrder
                            key={order._id}
                            order={order}
                        ></ManageOrder>)

                    }


                </Row>
            </div>
        </div>
    );
};

export default ManageOrders;