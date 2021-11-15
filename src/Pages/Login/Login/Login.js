import { Alert, AlertTitle, Button, CircularProgress, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navbar from '../../Shared/Navbar/Navbar';

const Login = () => {

    const[loginData,setLoginData]=useState({});
    const {user,loginUser,isLoading,authError}=useAuth();

    const location=useLocation();
    const history=useHistory();
    const handleLogin=e=>{
        loginUser(loginData.email,loginData.password,location,history);
        e.preventDefault();
    }

    const handleOnChange=e=>{
        const field= e.target.name;
        const value= e.target.value;
        const newLoginData={...loginData};
        newLoginData[field]=value;
        setLoginData(newLoginData);
    }

    // const handleGoogleSignIn=()=>{
    //     signInWithGoogle(location,history);
    // }
    return (
        <div>
            <Navbar></Navbar>
        <Container>
            <Typography variant="h4" gutterBottom component="div" sx={{mt:5}}>
                Login
        </Typography>
        <form onSubmit={handleLogin} >
        <TextField sx={{width:'50%',mt:4}}
        id="outlined-basic" 
        label="Email"
        name="email" 
        variant="outlined" 
        onBlur={handleOnChange}
        /><br/>
        <TextField sx={{width:'50%',mt:4}}
            id="outlined-password-input"
            label="Password"
            type="password"
            name="password"
            autoComplete="current-password"
            onBlur={handleOnChange}
        /><br/>
        
        <Button type="submit" variant="contained"sx={{width:'40%',mt:4,mb:4}}>Login</Button><br/>
        
        <NavLink 
            to="/register">
        <Button variant="text">Don't have an account? Register</Button>
        </NavLink>

        </form>
        {/* <p>OR</p> 
         <Button onClick={handleGoogleSignIn} variant="contained"color="success" sx={{width:'30%',mt:4,mb:4}}>Google SignIn</Button><br/> */}


        {isLoading && <CircularProgress />}
        {user?.email &&       <Alert severity="success">Successfully Logged In!!</Alert>}
        {authError && <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
            <strong>{authError}</strong>
            </Alert>}

        </Container>
        </div>
    );
};

export default Login;