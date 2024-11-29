
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [table, setTable] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label>Table Number:</label>
        <input type="text" value={table} onChange={(e) => setTable(e.target.value)} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
