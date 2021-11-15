import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Product = ({product}) => {
    const {name,model,gender,price,img,_id}=product;
    return (
        <Grid item xs={4} sm={4} md={4}>
        <Card sx={{ maxWidth: 345 }} style={{border:'2px solid gray'}}>
        <CardMedia
        component="img"
        height="200"
        image={img}
        alt="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            <span style={{color:'#34495E',fontWeight:'bold'}}> Model:</span> {model}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <span style={{color:'#34495E',fontWeight:'bold'}}>Gender:</span> {gender}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <span style={{color:'#34495E',fontWeight:'bold'}}>Price:</span> {price}
        </Typography>
        </CardContent>
        <NavLink to={`/purchase/${_id}`}><Button variant="outlined" style={{marginBottom:'8px',backgroundColor:'black',color:'white',textDecoration:'none'}}>Buy Now</Button></NavLink>
    </Card>
    </Grid>
    );
};

export default Product;