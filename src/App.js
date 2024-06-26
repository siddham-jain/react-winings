import './App.css';
import { a, b } from './components/Products/Products';
import Products from './components/Products/Products';
import { useState } from 'react';
import CartContext from './context/CartContext';
import Cart from "./components/Cart/Cart";
function App() {
  // state variable
  // inc
  // dec
  let [cart, setCart] = useState({});
  function increaseQuantity(product) {
    setCart(prevCart => {
      const newCart = { ...prevCart };
      if (!newCart[product.id]) {
        newCart[product.id] = {
          ...product,
          quantity: 0
        };
      }
      newCart[product.id].quantity += 1;
      return newCart;
    });
  }

  function decreaseQuantity(product) {
    setCart(prevCart => {
      const newCart = { ...prevCart };
      if (!newCart[product.id]) return prevCart;
      newCart[product.id].quantity -= 1;
      if (newCart[product.id].quantity <= 0) {
        delete newCart[product.id];
      }
      return newCart;
    });
  }

  console.log(a, b);
  return (
    <CartContext.Provider value={{ cart, increaseQuantity, decreaseQuantity}}>
      <div className="App">
        <Products  />
        <Cart />
      </div>
    </CartContext.Provider>
  );
}

export default App;
