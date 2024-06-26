import React, { useContext } from 'react';
import CartContext from '/home/siddham/projects/react-winings/src/context/CartContext.js';

function Cart() {
    const { cart, decreaseQuantity } = useContext(CartContext);

    return (
        <div>
            {Object.values(cart).map((product) => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>Quantity: {product.quantity}</p>
                    <button onClick={() => decreaseQuantity(product)}>Remove one</button>
                </div>
            ))}
        </div>
    );
}

export default Cart;