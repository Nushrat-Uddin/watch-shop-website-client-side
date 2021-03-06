import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email,setEmail]=useState('');
    const [success,setSuccess]= useState(false);
    const handleOnBlur=e=>{
        setEmail(e.target.value);
    }
const handleAdminSubmit=e=>{
    const user={email};
    fetch('https://pacific-citadel-61229.herokuapp.com/registeredusers/admin',{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.modifiedCount){
            console.log(data);
            setEmail('');
            setSuccess(true);
        }
        
    })
        e.preventDefault();
    }
    return (
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
            <TextField sx={{mb:4,width:'50%'}}
            id="standard-basic" 
            label="Email" 
            type="email"
            onBlur={handleOnBlur}
            variant="standard" 
            /><br/>
            <Button type="submit" variant="contained">Make Admin</Button>

            </form>
            {success && <Alert severity="success">Made Admin Successfully!!</Alert>}
        </div>
    );
};

export default MakeAdmin;