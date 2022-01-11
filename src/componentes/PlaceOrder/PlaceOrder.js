import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './PlaceOrder.css'

const PlaceOrder = () => {
    const { id } = useParams();

    console.log(id);
    const { user } = useAuth();
    const status = "panding";
    const [item, setItem] = useState([])
    useEffect(() => {
        const url = `https://pacific-castle-18171.herokuapp.com/items/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, []);

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://pacific-castle-18171.herokuapp.com/orders', { ...data, id, status })
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();


                }
            })


    }

    return (

        <div className="container pb-5">
            <div className="row">
                <div className="col-lg-8 col-sm-12">
                    <div>
                        <img src={item.img} alt="" className="w-100 image-size" />
                    </div>
                    <br />
                    <h2>Description Of Orders</h2>
                    <hr />
                    <br />
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                </div>
                <div className="col-lg-4 col-sm-12">




                    <div className="check py-5">
                        <div className="check-detail">

                            <div className="box-selects">
                                <h2>Your Reservation</h2>

                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <div className="col  my-3">
                                        <input className="input-field ps-2" type="text" defaultValue={user.displayName} {...register("name")} />
                                    </div>
                                    <div className="col my-3">
                                        <input className="input-field ps-2" type="text" defaultValue={user.email} {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                                    </div>
                                    <div className="col my-3">
                                        <input className="input-field ps-2" type="tel" placeholder="Mobile Number" {...register("mobilenumber", { required: true, minLength: 6, maxLength: 12 })} />
                                    </div>
                                    <div className="col  my-3">
                                        <input className="input-field ps-2" type="text" placeholder="Quantity" {...register("quantity", { required: true, maxLength: 100 })} />
                                    </div>
                                    <div className="col my-3">
                                        <input className="input-field  ps-2 " type="text" placeholder="Address" {...register("address", { required: true, maxLength: 100 })} />
                                    </div>

                                    <input type="submit" value="Place Order" className="search-button p-2  my-3" />
                                </form>




                            </div>

                        </div>


                    </div>
                </div>

            </div>

        </div>



    );
};

export default PlaceOrder;