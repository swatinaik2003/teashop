import React, { useState } from 'react';
import './CustomerInformation.css'; // Ensure you create and style this CSS file.

const CustomerInformation = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    tableNumber: '',
  });

  const [message, setMessage] = useState('');
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [upiNumber, setUpiNumber] = useState(''); // To capture UPI ID
  const [showSubmitButton, setShowSubmitButton] = useState(false); // To control the Submit Payment button visibility

  const paymentMethods = ['PhonePe', 'Google Pay', 'Paytm', 'Cash'];

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle UPI ID input change
  const handleUpiChange = (e) => {
    setUpiNumber(e.target.value);
  };

  // Handle form submission (Order placed)
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
    setMessage('Order placed successfully!');
    setShowPaymentOptions(true); // Show payment options after placing an order.
  };

  // Handle payment method selection
  const handlePaymentSelection = (paymentMethod) => {
    setSelectedPaymentMethod(paymentMethod);

    if (paymentMethod === 'Cash') {
      // Process payment directly if Cash is selected
      alert('Payment completed successfully via Cash!');
      resetForm();
    } else {
      // Show the "Submit Payment" button for UPI-based payments
      setShowSubmitButton(true);
    }
  };

  // Handle payment method submission
  const handlePaymentSubmit = () => {
    if (selectedPaymentMethod && selectedPaymentMethod !== 'Cash') {
      if (!upiNumber) {
        alert('Please enter your UPI ID!');
        return;
      }
      alert(`Redirecting to ${selectedPaymentMethod} for payment with UPI ID: ${upiNumber}`);
      resetForm();
    }
  };

  // Reset the form to its initial state
  const resetForm = () => {
    setFormData({ name: '', number: '', tableNumber: '' });
    setMessage('');
    setShowPaymentOptions(false);
    setSelectedPaymentMethod('');
    setUpiNumber('');
    setShowSubmitButton(false); // Hide the Submit Payment button
  };

  return (
    <div className="customer-info-container">
      <h1>Customer Information</h1>
      <form id="customer-form" onSubmit={handleSubmit}>
        <table className="customer-info-table">
          <thead>
            <tr>
              <th>Field</th>
              <th>Input</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><label htmlFor="name">Name:</label></td>
              <td>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td><label htmlFor="number">Phone Number:</label></td>
              <td>
                <input
                  type="text"
                  name="number"
                  id="number"
                  placeholder="Enter your phone number"
                  value={formData.number}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td><label htmlFor="tableNumber">Table Number:</label></td>
              <td>
                <input
                  type="text"
                  name="tableNumber"
                  id="tableNumber"
                  placeholder="Enter table number"
                  value={formData.tableNumber}
                  onChange={handleChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit">Submit</button>
      </form>

      {message && <p>{message}</p>}

      {showPaymentOptions && (
        <div className="payment-options">
          <h2>Choose Payment Method</h2>
          <div className="payment-methods">
            {paymentMethods.map((paymentMethod, index) => (
              <label key={index} className="payment-method-label">
                <input
                  type="radio"
                  name="paymentMethod"
                  value={paymentMethod}
                  onChange={() => handlePaymentSelection(paymentMethod)}
                />
                {paymentMethod}
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Show UPI ID input only if a UPI-based payment method is selected */}
      {(selectedPaymentMethod === 'PhonePe' || selectedPaymentMethod === 'Google Pay' || selectedPaymentMethod === 'Paytm') && (
        <div className="upi-id-container">
          <label htmlFor="upiNumber"><strong>Enter UPI ID:</strong></label>
          <input
            type="text"
            id="upiNumber"
            value={upiNumber}
            onChange={handleUpiChange}
            placeholder="Enter your UPI ID"
          />
        </div>
      )}

      {/* Show Submit Payment button for UPI payments */}
      {showSubmitButton && selectedPaymentMethod !== 'Cash' && (
        <button
          className="submit-payment-button"
          onClick={handlePaymentSubmit}
        >
          Submit Payment
        </button>
      )}
    </div>
  );
};

export default CustomerInformation;
