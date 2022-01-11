import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {
    const { user } = useAuth();
    const email = user.email;
    const [orders, setOrders] = useState([])
    const [details, setDetails] = useState([])
    useEffect(() => {
        const url = `https://pacific-castle-18171.herokuapp.com/orders`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    useEffect(() => {
        const findData = orders.filter(order => order.email === email)
        setDetails(findData);

    }, [orders, email]);
    return (
        <div>
            <div className="pt-5">
                <h2 className="  fw-bold text-center text-warning fs-1 "> <u>My Items Order</u></h2>
                <Row xs={1} md={1} className="g-4 m-4 ">
                    {
                        details.map(order => <MyOrder
                            key={order._id}
                            order={order}
                        ></MyOrder>)

                    }


                </Row>
            </div>
        </div>
    );
};

export default MyOrders;