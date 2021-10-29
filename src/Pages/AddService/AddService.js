import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './addService.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/service', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("added successfully")
                    reset()
                };
            })

    };
    return (
        <div className="addService">
            <h3>Please Add Service</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="Enter Your Name" />
                <input {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("image")} placeholder="Img url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;