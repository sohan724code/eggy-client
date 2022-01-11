import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Restaurant from '../Restaurant/Restaurant';
import './Restaurants.css'
const Restaurants = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        fetch('https://pacific-castle-18171.herokuapp.com/restaurants')
            .then(res => res.json())
            .then(data => setRestaurants(data));

    }, []);


    return (
        <div>
            <div className=" d-flex justify-content-between container mt-5 pt-5">
                <div>
                    <h1 className="text-warning fw-bold">Our Restaurants</h1>
                    <p>Find your best choice</p>
                </div>
                <div className="d-flex align-items-center">
                    <button className="bg-warning text-dark px-4 py-2 border-0 rounded" >More </button>
                </div>

            </div>
            <hr className="container " />


            <Row xs={1} md={4} className="g-4 m-5 custom-row">
                {
                    restaurants.map(item => <Restaurant
                        key={item.key}
                        item={item}
                    >
                    </Restaurant>)
                }


            </Row>
        </div>
    );
};

export default Restaurants;