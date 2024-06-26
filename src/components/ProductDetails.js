import React from 'react';

const ProductDetail = ({ product, addToCart }) => {
    if (!product) {
        return <div>No product selected.</div>;
    }

    return (
        <div>
            <h6>{product.name}</h6>
            <img src={product.imageUrl} alt={product.name} style={{ width: '100px', height: '100px' }} />
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <p>Description: {product.description}</p>
            <button onClick={() => addToCart(product)} className="btn btn-primary mx-2">Add to Cart</button>
        </div>
    );
};

export default ProductDetail;
