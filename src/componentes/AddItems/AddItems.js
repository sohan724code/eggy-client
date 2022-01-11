import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddItems.css'

const AddItems = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://pacific-castle-18171.herokuapp.com/items', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();


                }
            })
    }
    return (
        <div>
            <div className="add-details my-5 ">

                <div className="add-selects my-5">
                    <h2 className="text-center text-warning">Please Add a Order Item</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="col  my-3">
                            <input className="input-field1 input-field2"  {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                        </div>
                        <div className="col  my-3">
                            <textarea className="input-field1" rows="4" cols="50" {...register("description")} placeholder="Description" />
                        </div>
                        <div className="col  my-3">
                            <input className="input-field1 input-field2" {...register("img")} placeholder="image url" />
                        </div>

                        <input type="submit" className="input-btn bg-warning text-dark fw-bold" />
                    </form>




                </div>

            </div>
        </div>
    );
};

export default AddItems;