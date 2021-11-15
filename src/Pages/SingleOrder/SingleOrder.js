import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useProducts from '../../hooks/useProducts';

const SingleOrder = ({item}) => {
    const [products] = useProducts();
    const { address, city, email, name, booking_id, status } = item;
    const myOrder = products.find(product => product._id === booking_id);
    return (
        <Grid container spacing={2} >
        <Grid item xs={6} md={4} >
            <Box sx={{boxShadow: 3,mb:2}}>
            <img src={myOrder?.img} style={{width:'300px',height:'150px'}} alt="..." />
            <Typography variant="subtitle1" gutterBottom component="div">{myOrder?.name}</Typography>
            <Typography variant="subtitle1" gutterBottom component="div"><span style={{fontWeight:'bold'}}>Model:</span> {myOrder?.model}</Typography>
            <Typography variant="subtitle1" gutterBottom component="div"><span style={{fontWeight:'bold'}}>Price:</span> {myOrder?.price}</Typography>
            </Box>
            
        </Grid>
        <Grid item xs={6} md={8} sx={{mt:3}}>
            
            <Typography variant="subtitle1" gutterBottom component="div"><span style={{fontWeight:'bold'}}>Name:</span> {name}</Typography>
            <Typography variant="subtitle1" gutterBottom component="div"><span style={{fontWeight:'bold'}}>Address:</span> {address}</Typography>
            <Typography variant="subtitle1" gutterBottom component="div"><span style={{fontWeight:'bold'}}>Email:</span> {email}</Typography>
            <Typography variant="subtitle1" gutterBottom component="div"><span style={{fontWeight:'bold'}}>City:</span> {city}</Typography>
            <Typography variant="subtitle1" gutterBottom component="div"><span style={{fontWeight:'bold'}}>Status:</span> {status}</Typography>
            
        </Grid>
        </Grid>


    );
};

export default SingleOrder;