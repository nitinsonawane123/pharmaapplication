import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductDetailsComponent = () => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/');
    };

    return (
        <div>
            <h2>Product Details</h2>
            <p>Details of the selected product will be shown Home page.</p>
            <button className="btn btn-primary" onClick={handleNavigation}>Go to Home</button>
        </div>
    );
};

export default ProductDetailsComponent;