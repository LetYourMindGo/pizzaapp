import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const toHome = (e: React.MouseEvent<HTMLButtonElement>) => {
    const currentActive = document.getElementsByClassName('active');
    currentActive[0].className = currentActive[0].className.replace(' active', '');
    e.currentTarget.className += ' active'
    navigate('/');
  };

  const toOrders = (e: React.MouseEvent<HTMLButtonElement>) => {
    const currentActive = document.getElementsByClassName('active');
    currentActive[0].className = currentActive[0].className.replace(' active', '');
    e.currentTarget.className += ' active'
    navigate('/orders')
  }

  return (
    <nav className='navbar'>
      <div className='navbar__area'>
        <button className='navbar__button active' type='submit' onClick={toHome}>Home</button>
      </div>
      <div className='navbar__area'>
       <button className='navbar__button' type='submit' onClick={toOrders}>My Orders</button>
      </div>
    </nav>
  );
};

export default Navbar;