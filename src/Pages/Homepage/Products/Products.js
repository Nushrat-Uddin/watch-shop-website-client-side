import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('https://pacific-citadel-61229.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data.slice(0,6)))
    },[])
    return (
        <Box sx={{ flexGrow: 1 }} >
        <Container>
        <Typography component="div">
        <Box sx={{ fontWeight: 'bold', m: 1,fontSize: 32,mt:10,mb:6 }}>TRENDING PRODUCTS</Box>
    </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
            products.map(product=> <Product
            key={product._id}
            product={product}
            ></Product>)
        }
        </Grid>
        </Container>
    </Box>
    );
};

export default Products;