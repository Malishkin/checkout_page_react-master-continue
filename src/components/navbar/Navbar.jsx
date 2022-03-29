import React from 'react';
import './Navbar.css';
import navLogo from '../../img/1.png';

const Navbar = () => {
  return (
    <>
      <nav className='nav'>
        <div className='certified'>
          <img src={navLogo} className='emblem2' alt='' /> CERTIFIED 100% SAFE &
          SECURE CHECKOUT
        </div>
        <div className='certified2'>
          <img src={navLogo} className='emblem2' alt='' /> SECURE ORDER FORM
        </div>
      </nav>
    </>
  );
};

export default Navbar;
