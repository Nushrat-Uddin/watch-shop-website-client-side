import React, { useState } from 'react';
import { Alert, AlertTitle, Button, CircularProgress, Container, TextField, Typography } from '@mui/material';
import { NavLink,useHistory } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
        const[loginData,setLoginData]=useState({});
        const history=useHistory();

        const {user,registerUser,isLoading,authError}=useAuth();
        const handleLogin=e=>{
            if(loginData.password !== loginData.password2){
                alert('password did not matched')
                return;
            }
            registerUser(loginData.email,loginData.password,loginData.name,history);
            e.preventDefault();
        }
    
        const handleOnBlur=e=>{
            const field= e.target.name;
            const value= e.target.value;
            const newLoginData={...loginData};
            newLoginData[field]=value;
            setLoginData(newLoginData);
        }
    return (
        <div>
            <Navbar></Navbar>
        <Container>
            <Typography variant="h4" gutterBottom component="div" sx={{mt:5}}>
                Register
        </Typography>
        { !isLoading && <form onSubmit={handleLogin} >
        <TextField sx={{width:'50%',mt:4}}
        id="outlined-basic" 
        label="Your Name"
        name="name" 
        type="text"
        variant="outlined" 
        onBlur={handleOnBlur}
        /><br/>
        <TextField sx={{width:'50%',mt:4}}
        id="outlined-basic" 
        label="Your Email"
        name="email" 
        type="email"
        variant="outlined" 
        onBlur={handleOnBlur}
        /><br/>
        <TextField sx={{width:'50%',mt:4}}
            id="outlined-password-input"
            label="Enter your password"
            type="password"
            name="password"
            autoComplete="current-password"
            onBlur={handleOnBlur}
        /><br/>
        <TextField sx={{width:'50%',mt:4}}
            id="outlined-password-input"
            label="Re-enter your password"
            type="password"
            name="password2"
            autoComplete="current-password"
            onBlur={handleOnBlur}
        /><br/>
        
        <Button type="submit" variant="contained"sx={{width:'40%',mt:4,mb:4}}>Register</Button><br/>
        
        <NavLink 
            to="/login">
        <Button variant="text">Already registered ? please login</Button><br/>
        </NavLink>

        </form>}
        {isLoading && <CircularProgress />}
        {user?.email &&       <Alert severity="success">Successfully Created Your account!!</Alert>}
        {authError && <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
            <strong>{authError}</strong>
</Alert>}

        </Container>
        </div>
    );
};

export default Register;