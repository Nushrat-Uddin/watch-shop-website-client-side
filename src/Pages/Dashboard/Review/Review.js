import { TextField, Typography,TextareaAutosize, Button, Container } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        axios.post('https://pacific-citadel-61229.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully')
                    reset();
                }
            })
    };
    return (
        <Container>
        <form onSubmit={handleSubmit(onSubmit)} className="w-100">
                <input className="w-50" {...register("name", { required: true, maxLength: 20 })} value={user.displayName} />
                <br />
                <input className="w-50" {...register("email", { required: true, maxLength: 20 })} value={user.email} />
                <br />
                <textarea className="w-50" {...register("text")} placeholder="Review Here" />
                <br />
                <input className="w-50" type="number" {...register("ratings")} placeholder="Ratings" />
                <br />
                <input className="w-50" type="submit" value="Confirm" />
            </form>
            </Container>














    //     <Box>
    //         <Typography variant="h4" gutterBottom component="div">
    //     Give your review here
    //     </Typography>
    //     <form onSubmit={handleSubmit(onSubmit)}>
    //     <TextField sx={{width:'25%',mt:4}}
    //     id="outlined-basic" 
    //     label="Your Name" 
    //     variant="outlined" /><br/>
    //     <TextField sx={{width:'25%',mt:4}}
    //     id="outlined-basic" 
    //     label="Ratings" 
    //     type="number"
    //     variant="outlined" /><br/>
    //     <TextareaAutosize
    //     aria-label="minimum height"
    //     minRows={3}
    //     placeholder="please write your review"
    //     style={{ width: 200, marginTop:18 }}
    // /><br/>
    // <Button variant="outlined">Submit</Button>
    //     </form>
    //     </Box>
    );
};

export default Review;