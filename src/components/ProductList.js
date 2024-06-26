import React from 'react';

const ProductList = ({ products, addToCart, onProductClick }) => {
    const handleAddToCart = (product) => {
        alert(`${product.name} has been added to the cart!`);
        addToCart(product);
    };

    return (
        <div className="product-list">
            {products.map(product => (
                <div key={product.id} className="product-item">
                    <img src={product.imageUrl} alt={product.name} className="product-image" />
                    <span
                       style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
                        onClick={() => onProductClick(product)}
                    >
                    {product.name}
                    </span>
                    <p>${product.price}</p>
                    <button className="btn btn-primary" onClick={() =>  handleAddToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
