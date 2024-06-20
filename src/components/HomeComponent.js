import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';

const HomeComponent = () => {
    const [products] = useState([
        { id: 1, name: 'Product 1', price: 100, imageUrl: 'https://medcellpharma.com/wp-content/uploads/2023/01/medcellpharma-new-3D-products-2023-11-jpg.webp' },
        { id: 2, name: 'Product 2', price: 200, imageUrl: 'https://medcellpharma.com/wp-content/uploads/2023/01/medcellpharma-new-3D-products-2023-06-jpg.webp' },
        { id: 3, name: 'Product 3', price: 300, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA_t3dh7eoG7i2o1TE6MDRN41zWbZllRRvvg&s' },
    ]);

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const removeFromCart = (productToRemove) => {
        setCart(cart.filter(product => product !== productToRemove));
    };

    return (
        <div>
            <h2>Home Page</h2>
            <p>Welcome to the Pharma application!</p>
            <h3>Products</h3>
            <ProductList products={products} addToCart={addToCart} />
            <Cart cart={cart} removeFromCart={removeFromCart} />
        </div>
    );
};

export default HomeComponent;
