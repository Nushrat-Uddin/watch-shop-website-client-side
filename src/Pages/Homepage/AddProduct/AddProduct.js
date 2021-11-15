import React from 'react';
import './AddProduct.css';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddProduct = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{
        console.log(data);
        axios.post('https://pacific-citadel-61229.herokuapp.com/products',data)
        .then(res=>{
            if(res.data.insertedId){
                alert('added successfully');
                reset();
            }
           
        })
    }
    return (
        <div className='add-product'>
            <h3>Add a new product</h3>  
            <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", { required: true, maxLength: 20 })}placeholder='Name' />
        <input {...register("model")}placeholder='Model' />
        <input {...register("gender")}placeholder='Gender' />
        <input  {...register("price")}placeholder='Price' />
        <input {...register("img")} placeholder='img url' />
        <input type="submit" />
    </form>
        </div>
    );
};

export default AddProduct;