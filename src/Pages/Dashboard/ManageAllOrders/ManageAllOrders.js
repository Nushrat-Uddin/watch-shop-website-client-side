import { Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AllOrder from '../AllOrder/AllOrder';

const ManageAllOrders = () => {
    const [users,setUsers]=useState([]);

    useEffect(()=>{
        fetch('https://pacific-citadel-61229.herokuapp.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
    return (
        <Container>
        <Typography variant="h3" gutterBottom component="div">
        Orders Available
        </Typography>
        {
            users.map(user => <AllOrder
            key={user._id}
            
            user={user}
        ></AllOrder>) 
        }
        
        </Container>
    );
};

export default ManageAllOrders;