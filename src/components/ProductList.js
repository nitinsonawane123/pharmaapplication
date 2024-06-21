import React from 'react';

const ProductList = ({ products, addToCart }) => {
    return (
        <div className="product-list">
            {products.map(product => (
                <div key={product.id} className="product-item">
                    <img src={product.imageUrl} alt={product.name} className="product-image" />
                    <h4>{product.name}</h4>
                    <p>${product.price}</p>
                    <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
