
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const [cart, setCart] = useState([]); // Track cart items
  const [isOrderSubmitted, setIsOrderSubmitted] = useState(false); // Track order submission
  const navigate = useNavigate(); // Initialize the navigate hook

  // Tea types and food items arrays
  const teaTypes = [
    { name: 'Green Tea', price: 100, img: 'https://www.foodandwine.com/thmb/bqMJi4ObwIwSWlNjPk5PpiLpmhM=/2000x1333/filters:fill(auto,1)/different-types-of-tea-FT-BLOG0621-7c7fd231e66d4fea8ca9a47cad52ba79.jpg' },
    { name: 'Black Tea', price: 120, img: 'https://th.bing.com/th/id/OIP.4GQ2C4X8XbIUVJyP6zIkqgHaFs?w=225&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { name: 'Herbal Tea', price: 150, img: 'https://th.bing.com/th/id/OIP.WVjq3n6u_m2aAiC_z3-TDgHaE6?w=254&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { name: 'Chai Tea', price: 90, img: 'https://th.bing.com/th/id/OIP.q2oVVl92IUlck4fYWe1zuAHaHa?w=196&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { name: 'Ginger Tea', price: 130, img: 'https://th.bing.com/th/id/OIP.qs3Yuwi_Dc1PLfgE12LvyAHaE8?w=238&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { name: 'Jasmine Tea', price: 140, img: 'https://th.bing.com/th/id/OIP.sfpQuO8NhQTL_2GCumxgDwHaE7?w=281&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { name: 'White Tea', price: 200, img: 'https://th.bing.com/th/id/OIP.YcOXjXHVYdhT-BGotJWBxAHaD4?w=315&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { name: ' Oolong Tea', price: 100, img: 'https://th.bing.com/th/id/OIP.t6LL4WLPQCwdIgkgBIW1LgHaHa?pid=ImgDet&w=179&h=179&c=7&dpr=1.3' },
    { name: 'Yellow Tea', price: 150, img: 'https://th.bing.com/th/id/OIP.ti7M7F-riyt3M4I49R-YRAHaFj?w=220&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { name: 'Pu-erh Tea', price: 200, img: 'https://th.bing.com/th/id/OIP.zaGH9P6yyEqD4jhYlYEpdwHaEH?w=305&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { name: 'Blended Teas', price: 200, img: 'https://th.bing.com/th/id/OIP.XFE3cEyjD5uR40NsYBkJJwHaD4?w=323&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { name: 'Masala Teas', price: 120, img: 'https://th.bing.com/th/id/OIP.8GWaBd0N2-qOauvgj1MtpgAAAA?pid=ImgDet&w=179&h=268&c=7&dpr=1.3' },

  ];

  const foodItems = [
    { name: 'Sandwich', price: 80, img: 'http://ts3.mm.bing.net/th?id=OIP.WX3BUFQ2XUz8cCpfHhPqDwHaHa&pid=15.1' },
    { name: 'Pastry', price: 60, img: 'https://th.bing.com/th/id/OIP.7AFzK_FjVmt7b9pX40WdTgHaE8?w=304&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { name: 'Cake', price: 120, img: 'https://th.bing.com/th/id/OIP.imOtn8r_H3z6uH31dYf8UAAAAA?rs=1&pid=ImgDetMain' },
    { name: 'Pizza', price: 200, img: 'https://th.bing.com/th/id/OIP.3uMtAEKaRT4VZyA5ylyxNAHaE8?w=259&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { name: 'Burger', price: 100, img: 'http://ts4.mm.bing.net/th?id=OIP.zBTQA-_tvIYCUArJ11akQQHaLH&pid=15.1' },
    { name: 'Fries', price: 70, img: 'https://th.bing.com/th/id/OIP.DA_gYl7agXtmPgytlSxqqQHaKX?w=129&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { name: 'chips', price: 50, img: 'https://images4.alphacoders.com/276/276654.jpg' },
    { name: 'puffs', price: 40, img: 'https://th.bing.com/th/id/OIP.XKztnRx0yi5ut6T89IQuOgHaE8?w=234&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { name: 'Bajji', price: 55, img: 'https://th.bing.com/th/id/OIP.zNqV9nykmxLxvfIOgcs1jAHaEK?w=326&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { name: 'Chicken role', price: 70, img: 'https://th.bing.com/th/id/OIP.jqEaJpyaE8GOb-0ZpJhNCwHaHa?w=130&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { name:'chicken chains', price: 80, img: 'https://img.freepik.com/premium-photo/fried-chicken-drumsticks-board-ai-generated_870814-824.jpg?w=1060' },
    { name: 'Snacks', price: 50, img: 'https://purepng.com/public/uploads/medium/purepng.com-snackscookieamericandelicioussnacksweetyummybiscuit-21525886509ndmfc.png' },


  ];

  // Add item to cart
  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.name === item.name);
    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.name === item.name
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  // Update the quantity of an item in the cart
  const updateCartItemQuantity = (itemName, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(itemName);
      return;
    }
    setCart(cart.map(item =>
      item.name === itemName ? { ...item, quantity: newQuantity } : item
    ));
  };

  // Remove an item from the cart
  const removeFromCart = (itemName) => {
    setCart(cart.filter(item => item.name !== itemName));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleSubmitOrder = () => {
    setIsOrderSubmitted(true);
    navigate('/customer-info');
  };

  return (
    <div className="homePage">
      <h1>Welcome to Our Tea and Snacks Shop</h1>
      <div className="items">
        <h2>Our Teas</h2>
        <div className="teaItems">
          {teaTypes.map((tea, index) => (
            <div key={index} className="teaItem">
              <img src={tea.img} alt={tea.name} />
              <h3>{tea.name}</h3>
              <p>₹{tea.price}</p>
              <button onClick={() => addToCart(tea)}>Add to Cart</button>
            </div>
          ))}
        </div>

        <h2>Our Food</h2>
        <div className="foodItems">
          {foodItems.map((food, index) => (
            <div key={index} className="foodItem">
              <img src={food.img} alt={food.name} />
              <h3>{food.name}</h3>
              <p>₹{food.price}</p>
              <button onClick={() => addToCart(food)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
      <div className="cart">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>
                      <input
                        type="number"
                        value={item.quantity}
                        min="1"
                        onChange={(e) => updateCartItemQuantity(item.name, parseInt(e.target.value))}
                        style={{ width: '50px', textAlign: 'center' }}
                      />
                    </td>
                    <td>₹{item.price * item.quantity}</td>
                    <td>
                      <button onClick={() => removeFromCart(item.name)}>Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="totalAmount">
              <p><strong>Total: ₹{calculateTotal()}</strong></p>
            </div>
          </>
        )}
      </div>
      <div className="submitOrder">
        <button onClick={handleSubmitOrder}>Submit Order</button>
      </div>
      {isOrderSubmitted && (
        <div className="orderSummary">
          <h2>Order Submitted</h2>
          <p>Your order has been submitted successfully. We will process it soon!</p>
          <p><strong>Total Amount: ₹{calculateTotal()}</strong></p>
        </div>
      )}
    </div>
  );
}

export default HomePage;
