import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Purchase.css';

const Purchase = () => {
    const { user } = useAuth();
    const { productId} = useParams();
    const [product, setProduct] = useState({});
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        data.booking_id = productId;
        axios.post('https://pacific-citadel-61229.herokuapp.com/users', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully')
                    reset();
                }
            })
        console.log(data);

    }

    useEffect(() => {
        fetch(`https://pacific-citadel-61229.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    },[])
    console.log(productId);
    return (
        <Grid container spacing={1}>
            <Grid item xs={6} md={4}>
        <Card sx={{ maxWidth: 345,mt:10,ml:8,border:2 }} >
        <CardMedia
        component="img"
        height="240"
        image={product?.img}
        alt=""
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {product?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Model:{product.model}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Gender:{product.gender}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Price:{product.price}
        </Typography>
        </CardContent>
        
    </Card></Grid>
    <Grid item xs={6} md={8} sx={{mt:10}}>
                <form onSubmit={handleSubmit(onSubmit)} className="form">
                <input defaultValue="test" {...register("name")} value={user.displayName} /><br/>
                <input {...register("email", { required: true })} value={user.email} /><br/>
                <input type="text" {...register("address")} placeholder="Address" /><br/>
                <input type="number" {...register("phone")} placeholder="Phone" /><br/>
                <input type="text" {...register("city")} placeholder="City" /><br/>
                <input type="text" {...register("status")} value="Pending" style={{ border: 'none' }} /><br/>
                    <input type="submit"style={{backgroundColor:'green',color:'white',fontSize:'20px',width:'40%'}} /><br/>
                        </form></Grid>
                        </Grid>
                            
    );
};

export default Purchase;