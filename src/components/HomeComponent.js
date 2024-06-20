import React from 'react';
import { Link } from 'react-router-dom';

const HomeComponent = () => {
  return (
    <div>
    <h2>Home Page</h2>
    <p>Welcome to the Pharma application!</p>
    <Link to="/product-details">Go to Product Details</Link>
</div>
  )
}

export default HomeComponent

