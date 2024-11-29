
import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderConfirmationPage = () => {
  const navigate = useNavigate();

  const orderDetails = {
    table: 5,
    items: ['Green Tea', 'Cake'],
    total: 150,
  };

  console.log('Order Details:', orderDetails);

  return (
    <div>
      <h2>Order Placed Successfully!</h2>
      <p>Table: {orderDetails.table}</p>
      <p>Items: {orderDetails.items.join(', ')}</p>
      <p>Total: ₹{orderDetails.total}</p>
      <button onClick={() => navigate('/')}>Go to Home</button>
    </div>
  );
};

export default OrderConfirmationPage;
