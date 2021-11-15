import React from 'react';
import './Navbar.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navbar = () => {
    const {user,logOut}=useAuth();
    return (
        <div>
            <h1 className='h1'>IRISH</h1>
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static"style={{backgroundColor:'black'}}>
        <Toolbar>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            >
            <MenuIcon />
            </IconButton>
            <Link to='/home'><Button color="inherit" style={{color:'white'}}>Home</Button></Link>
            <Link to='/addproduct'> <Button color="inherit"style={{color:'white'}}>ADD a product</Button></Link>
            <Link to='/explore'> <Button color="inherit"style={{color:'white'}}>Explore</Button></Link>
            
            {
                user?.email ?
                <Box>
                <Link to='/dashboard'> <Button color="inherit"style={{color:'white'}}>Dashboard</Button></Link>  
                <Button onClick={logOut} color="inherit"style={{color:'white'}}>Logout</Button>
                </Box>
                :
                <Link to='/login'><Button color="inherit"style={{color:'white'}}>Login</Button></Link>
            }

            
        </Toolbar>
        </AppBar>
    </Box>
    </div>
    );
};

export default Navbar;