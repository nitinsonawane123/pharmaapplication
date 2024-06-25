import React from 'react';

const ProductList = ({ products, addToCart }) => {
    const handleAddToCart = (product) => {
        alert(`${product.name} has been added to the cart!`);
        addToCart(product);
    };

    return (
        <div className="product-list">
            {products.map(product => (
                <div key={product.id} className="product-item">
                    <img src={product.imageUrl} alt={product.name} className="product-image" />
                    <h4>{product.name}</h4>
                    <p>${product.price}</p>
                    <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
