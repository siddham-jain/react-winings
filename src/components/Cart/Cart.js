import React, { useContext } from 'react';
import CartContext from '/home/siddham/projects/react-winings/src/context/CartContext.js';

function Cart() {
    const { cart, decreaseQuantity, increaseQuantity } = useContext(CartContext);
    console.log(cart);
    return (
        <div>
            {Object.values(cart).map((product) => (
                <div key={product.id}>
                    <h2>{product.title}</h2>
                    <p>Quantity: {product.quantity}</p>
                    <button onClick={() => decreaseQuantity(product)}>Remove</button>
                    <button onClick={() => increaseQuantity(product)}>Add</button>
                </div>
            ))}
        </div>
    );
}

export default Cart;