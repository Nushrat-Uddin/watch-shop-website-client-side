import React from 'react';
import Contact from '../../Contact/Contact';
import Footer from '../../Footer/Footer';
import ReviewItem from '../../ReviewItem/ReviewItem';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Products></Products>
            <ReviewItem></ReviewItem><br/>
            <Contact></Contact>
            <Footer></Footer>

        </div>
    );
};

export default Home;