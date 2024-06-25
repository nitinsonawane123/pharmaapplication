import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeComponent = () => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/product-details');
    };

    return (
        <div>
            <h2>Home</h2>
            <p>Welcome to the home page Pharma App!</p>
            <button className="btn btn-primary" onClick={handleNavigation}>Go to Product Details</button>
        </div>
    );
};

export default HomeComponent;

