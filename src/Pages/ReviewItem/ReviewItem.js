import { Container, Grid, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SingleReview from '../SingleReview/SingleReview';



const ReviewItem= () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <Container>
            <Typography  variant="h4" gutterBottom component="div"sx={{mt:10,mb:5}}>Customer Reviews</Typography>
           
            <Stack direction="row" spacing={2}>
        
                {
                    reviews.map(review => <SingleReview
                        key={review._id}
                        review={review}
                    ></SingleReview>)
                }
           </Stack>
        </Container>
    );
};

export default ReviewItem;
