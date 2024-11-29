
import React, { useState, useEffect } from 'react';
import './AdminPage.css';

function AdminPage() {
  const [orders, setOrders] = useState([]);
  const [confirmedOrder, setConfirmedOrder] = useState(null);

  // Simulate fetching orders from a server
  useEffect(() => {
    // Example order data (this would come from a real API in a real app)
    const fetchedOrders = [
      { id: 1, name: 'Swati', mobileNumber: '1234567890', tableNumber: '5', teaType: 'Green Tea', snacks: 'cake' },
      { id: 2, name: 'Jyoti', mobileNumber: '0987654321', tableNumber: '8', teaType: 'White Tea', snacks: 'chicken role' },
      { id: 2, name: 'Vidya', mobileNumber: '0787654321', tableNumber: '4', teaType: 'Chai Tea', snacks: 'chips' },
      { id: 2, name: 'Bhumika', mobileNumber: '0687654321', tableNumber: '3', teaType: 'Black Tea', snacks: 'puffs' },
      { id: 2, name: 'Chandu', mobileNumber: '0937654321', tableNumber: '1', teaType: 'Jasmine Tea', snacks:'Bjji' },
      { id: 2, name: 'Shama', mobileNumber: '0967654321', tableNumber: '6', teaType: 'oolong Tea', snacks: 'burger' },
      { id: 2, name: 'Shilpa', mobileNumber: '0657654321', tableNumber: '5', teaType: 'Chai Tea', snacks: 'pizza' },
    ];
    setOrders(fetchedOrders);
  }, []);

  const handleOrderConfirmation = (orderId) => {
    // Set the confirmed order to the order that was clicked
    const order = orders.find(order => order.id === orderId);
    setConfirmedOrder(order);
  };

  return (
    <div className="admin-container">
      <h2>Admin Page</h2>
      <h3>Orders</h3>
      
      {/* Display confirmation message */}
      {confirmedOrder && (
        <div className="confirmation-message">
          <p>Order for {confirmedOrder.name} at Table {confirmedOrder.tableNumber} has been confirmed!</p>
        </div>
      )}

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile Number</th>
            <th>Table Number</th>
            <th>Tea Type</th>
            <th>Actions</th> {/* Added actions column */}
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.name}</td>
              <td>{order.mobileNumber}</td>
              <td>{order.tableNumber}</td>
              <td>{order.teaType}</td>
              <td>
                <button onClick={() => handleOrderConfirmation(order.id)}>Confirm Order</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPage;
