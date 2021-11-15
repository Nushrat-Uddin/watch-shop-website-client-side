import { Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';

const Explore = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('https://pacific-citadel-61229.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    
    return (
        <Container>
            <Navbar></Navbar>
            <h1>Explore All Our Items</h1>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{marginBottom:'30px'}}>
                {
                    products.map(product => <Grid item xs={4} sm={4} md={4}>
                        <Card sx={{ maxWidth: 345 }} style={{border:'2px solid gray'}}>
                        <CardMedia
                        component="img"
                        height="200"
                        image={product.img}
                        alt="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {product.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <span style={{color:'#34495E',fontWeight:'bold'}}> Model:</span> {product.model}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        <span style={{color:'#34495E',fontWeight:'bold'}}>Gender:</span> {product.gender}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        <span style={{color:'#34495E',fontWeight:'bold'}}>Price:</span> {product.price}
                        </Typography>
                        </CardContent>
                        <Link to={`/purchase/${product._id}`}><Button variant="outlined" style={{marginBottom:'8px',backgroundColor:'black',color:'white'}}>Buy Now</Button></Link>
                    </Card>
                    </Grid>)
                }
            </Grid>
        </Container>

    );
};

export default Explore;