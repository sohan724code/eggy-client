import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap';
import Item from '../Item/Item';
import './Items.css'
function Items() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://pacific-castle-18171.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setItems(data));

    }, []);

    if (items.length === 0) {
        return (<div className="spinner-border text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>);
    }


    return (
        <div>
            <div className=" d-flex justify-content-between container mt-5">
                <div>
                    <h1 className="text-warning fw-bold">Popular Items</h1>
                    <p>Find your best choice</p>
                </div>
                <div className="d-flex align-items-center">
                    <button className="bg-warning text-dark px-4 py-2 border-0 rounded" >More Items</button>
                </div>

            </div>
            <hr className="container " />


            <Row xs={1} md={4} className="g-4 m-5 custom-row">
                {
                    items.map(item => <Item
                        key={item.key}
                        item={item}
                    >
                    </Item>)
                }


            </Row>
        </div>
    )
}

export default Items
