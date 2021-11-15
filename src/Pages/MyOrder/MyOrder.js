import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import SingleOrder from '../SingleOrder/SingleOrder';

const MyOrder = () => {
    const { user } = useAuth();
    const [clients,setClients] = useState([]);

    useEffect(() => {
        fetch('https://pacific-citadel-61229.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setClients(data))
    }, [])
    const MyItems =clients.filter(client => client.email === user.email)
    return (
        <Container>
        <Typography variant="h3" gutterBottom component="div">Orders: {MyItems.length}</Typography>
        <Box>
            {
                MyItems.map(item => <SingleOrder
                    key={item._id}
                    item={item}
                ></SingleOrder>)
            }
        </Box>
        </Container>
    );
};

export default MyOrder;