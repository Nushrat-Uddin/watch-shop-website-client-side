import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <p>Follow us on Social Media for great offers.</p>

            <p >
            <a href='https://www.facebook.com'><i className="fab fa-facebook text-dark fs-3"></i></a>
            <a href='https://www.instagram.com'><i className="fab fa-instagram-square text-dark fs-3" ></i></a>
            <a href='https://www.skype.com'><i className="fab fa-skype text-dark fs-3"></i></a>
            <a href='https://www.youtube.com'><i className="fab fa-youtube text-dark fs-3"></i></a>
            </p>
            <p>Copyright<i className="far fa-copyright"></i>2021.All rights reserved.</p>

        </div>
    );
};

export default Footer;