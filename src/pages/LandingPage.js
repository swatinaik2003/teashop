
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home'); // Redirects to the home page after 10 seconds
    }, 3000);

    // Cleanup the timeout on component unmount
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="landing-container">
      <h1>Welcome to Our Tea Shop</h1>
      <p>We offer a variety of teas. You will be redirected to our menu shortly.</p>
    </div>
  );
}

export default LandingPage;
