import { Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

const ManageProducts = () => {
    const [products,setProducts]=useState([]);
    const [countDelete, setCountDelete] = useState(0);
    const { productId} = useParams();
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    const handleDelete = productId => {
        const proceed = window.confirm('Are you Sure to Delete?');
        if (proceed) {
            const url = `http://localhost:5000/products/${productId}`;
            setCountDelete(countDelete+1);

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        // const remainnigs = users.filter(user => user._id !== id);
                        // setUsers(remainnigs);
                        setCountDelete(countDelete+1);
                    }
                })
        }
    }
    return (
        <Container>
            <h1>Manage Products</h1>
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
                        <Button onClick={() => handleDelete(product._id)} variant="outlined" style={{marginBottom:'8px',backgroundColor:'black',color:'white'}}>Delete</Button>

                    </Card>
                    </Grid>)
                }
            </Grid>
        </Container>
    );
};

export default ManageProducts;