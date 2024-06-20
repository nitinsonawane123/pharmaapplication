import React from 'react';

const ProductList = ({ products, addToCart }) => {
    return (
        <div>
            {products.map((product) => (
                <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
                    <h4>{product.name}</h4>
                    <p>Price: ${product.price}</p>
                    <img src={product.imageUrl} alt={product.name} style={{ width: '100px', height: '100px' }} />
                    <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
