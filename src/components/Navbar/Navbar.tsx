import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const toHome = () => {
    navigate('/');
  };

  const toOrders = () => {
    navigate('/orders')
  }

  return (
    <nav>
      <button type='submit' onClick={toHome}>Home</button>
      <button type='submit' onClick={toOrders}>My Orders</button>
    </nav>
  );
};

export default Navbar;