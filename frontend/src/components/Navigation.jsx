import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

export const Navigation = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        <li className='navbar-list-item'><Link to='/'>Home</Link></li>
        <li className='navbar-list-item'><Link to='/feed'>Feed</Link></li>
        <li className='navbar-list-item'><Link to='/user'>User</Link></li>
      </ul>
    </nav>
  )
}

export default Navigation;
