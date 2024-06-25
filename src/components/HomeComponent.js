import React from 'react';
import { useNavigate } from 'react-router-dom';
import pharmaImage from '../images/pharmaa.jpg'; 

const HomeComponent = () => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/product-details');
    };

    return (
        <div>
            <h2>Home</h2>
            <p>Welcome to the Pharma App!</p>
            <img src={pharmaImage} alt="Pharmaa" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            <button className="btn btn-primary my-2" onClick={handleNavigation}>Go to Product Details</button>
        </div>
    );
};

export default HomeComponent;