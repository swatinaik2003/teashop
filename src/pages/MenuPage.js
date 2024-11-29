
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MenuPage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  const menuItems = [
    { id: 1, name: 'Green Tea', price: 50 },
    { id: 2, name: 'Black Tea', price: 40 },
    { id: 3, name: 'Sandwich', price: 70 },
    { id: 4, name: 'Cake', price: 80 },
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (item) => {
    setCart(cart.filter(cartItem => cartItem.id !== item.id));
  };

  const handleCheckout = () => {
    navigate('/order-confirmation');
  };

  return (
    <div>
      <h2>Menu</h2>
      {menuItems.map(item => (
        <div key={item.id}>
          <h3>{item.name} - ₹{item.price}</h3>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
          <button onClick={() => removeFromCart(item)}>Delete</button>
        </div>
      ))}
      <h3>Your Cart:</h3>
      <ul>
        {cart.map(item => (
          <li key={item.id}>{item.name} - ₹{item.price}</li>
        ))}
      </ul>
      <button onClick={handleCheckout}>Confirm Order</button>
    </div>
  );
};

export default MenuPage;
