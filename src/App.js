
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';


import CustomerInformation from './pages/CustomerInformation';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]); // State for cart items

  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav className="navbar">
          <Link to="/">Landing</Link>
          <Link to="/home">Home</Link>
          <Link to="/admin">Admin</Link>
         
         
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage setCartItems={setCartItems} />} />
          <Route path="/admin" element={<AdminPage />} />
          
          <Route path="/customer-info" element={<CustomerInformation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
