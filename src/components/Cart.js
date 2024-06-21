import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
    return (
        <div>
            <h3>Cart</h3>
            <p>Products in cart: {cart.length}</p>
            {cart.length === 0 ? (
                <p>No items in cart.</p>
            ) : (
                <ul>
                    {cart.map((item, index) => (
                        <li key={index} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', display: 'flex', alignItems: 'center' }}>
                            <img src={item.imageUrl} alt={item.name} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                            <div>
                                <p>{item.name} - ${item.price}</p>
                                <button className="btn btn-danger" onClick={() => removeFromCart(item)}>Remove</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
