import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import Rating from 'react-rating';

const SingleReview = ({ review }) => {
    const { name,text, ratings } = review;
    return (

        <Card sx={{ minWidth: 275,border:3 }}>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {text.slice(0, 100)}
            </Typography>
            Ratings: <Rating style={{color:'orange'}}
                    initialRating={ratings}
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star icon-color"
                    readonly></Rating>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Name:{name}
            </Typography>

        </CardContent>
        
        </Card>




        // <div>
        //     <Col xs={12} md={6} style={{ border: '2px solid gray', backgroundColor: '#A5C4D9' }} className="w-100 text-left p-5">
        //         <p>{text.slice(0, 100)}</p>
        //         Ratings: <Rating
        //             className="ratings"
        //             initialRating={ratings}
        //             emptySymbol="far fa-star"
        //             fullSymbol="fas fa-star icon-color"
        //             readonly></Rating>
        //         <h3>{name}</h3>
        //     </Col>
        // </div>
    );
};

export default SingleReview;
