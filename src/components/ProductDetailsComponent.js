import React from 'react';
import { Link } from 'react-router-dom';

const ProductDetailsComponent = () => {
  return (
    <div>
    <h2>Product Details</h2>
    <p>Details of the selected product will be shown here.</p>
    <Link to="/">Back to Home</Link>
</div>
  )
}

export default ProductDetailsComponent
