import { Button, Grid, Typography } from '@mui/material';
import React from 'react';

const Banner = () => {
    return (
        <Grid container spacing={2} style={{backgroundColor:'#BFC9CA '}}>
    <Grid item xs={12} md={6} style={{marginTop:'40px'}}>
    <Typography variant="body1" gutterBottom>
        TIMELESS & ELEGANT
        </Typography>
        <Typography variant="h2" gutterBottom component="div" sx={{mt:4,mb:4}}>
            BEST SELLER
        </Typography>
        <Typography variant="body1" gutterBottom style={{fontStyle:'italic'}}>
        Complete your everyday look with a classic watch
        </Typography>
        <Button variant="contained" style={{background:' linear-gradient(to top left, #000066 6%, #6600ff 75%)',marginTop:'14px',width:'200px'}}>SHOP NOW</Button>

    </Grid>
    <Grid item xs={12} md={6}>
        <img src='https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='' style={{height:'360px',width:'90%',marginTop:'-12px'}} />
    </Grid>
    </Grid>
    );
};

export default Banner;