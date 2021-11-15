import { Button, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import useProducts from '../../../hooks/useProducts';

const AllOrder = ({user}) => {
    const [products]=useProducts();
    const [countDelete, setCountDelete] = useState(0);
    const {name,address,status,booking_id,city}=user;
    const [users,setUsers]=useState({});
    const myProduct= products?.find(product=> product._id === booking_id);

    //delete an user
    const handleDelete = id => {
        const proceed = window.confirm('Are you Sure to Delete?');
        if (proceed) {
            const url = `https://pacific-citadel-61229.herokuapp.com/users/${id}`;
            setCountDelete(countDelete+1);

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainnigs = users.filter(user => user._id !== id);
                        setUsers(remainnigs);
                        setCountDelete(countDelete+1);
                    }
                })
        }
    }
    // handle update
    const handleUpdate = id => {
        const status = ['Shipped'];
        fetch(`https://pacific-citadel-61229.herokuapp.com/users/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(status)

        })
            .then(res => res.json())
            .then(data => setCountDelete(countDelete+1))
    }
    return (
        <Grid container spacing={2}>
    
    <Grid item xs={6} md={4}>
    <img src={myProduct?.img} style={{width:'200px'}} alt="..." />
    <Typography variant="body1" gutterBottom>
    {myProduct?.name} 
    </Typography>
    <Typography variant="body1" gutterBottom>
        Model: {myProduct?.model}
    </Typography>
    <Typography variant="body1" gutterBottom>
    Price: {myProduct?.price}
    </Typography>
    
    </Grid>
    <Grid item xs={6} md={8}>
    <Typography variant="body1" gutterBottom>
        Name:{name}
    </Typography>
    <Typography variant="body1" gutterBottom>
        Address: {address}
    </Typography>
    <Typography variant="body1" gutterBottom>
        City: {city}
    </Typography>
    <Typography variant="body1" gutterBottom>
        Status: {status}
    </Typography>
    <Button onClick={() => handleDelete(user._id)}>
        Delete
    </Button>
    <Button onClick={() => handleUpdate(user._id)}>
        Update Status
    </Button>
    </Grid>
</Grid>
    );
};

export default AllOrder;