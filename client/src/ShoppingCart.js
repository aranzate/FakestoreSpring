import React, { useState } from 'react';

function ShoppingCart() {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const addToCart = (product) => {
        const updatedCart = [...cart, product];
        setCart(updatedCart);
        setTotalPrice(totalPrice + product.price);
    };

    const removeFromCart = (product) => {
        const updatedCart = cart.filter((item) => item.id !== product.id);
        setCart(updatedCart);
        setTotalPrice(totalPrice - product.price);
    };

    return (
        <div>
            <h2>Shopping Cart</h2>
            <ul>
                {cart.map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                        <button onClick={() => removeFromCart(product)}>Remove</button>
                    </li>
                ))}
            </ul>
            <p>Total Price: ${totalPrice}</p>
        </div>
    );
}

export default ShoppingCart;