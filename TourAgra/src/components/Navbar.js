import React from 'react';
import './Navbar.css';

function Navbar(props) {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <a href='/' className='navbar-logo'>
          {props.title}
        </a>

        <ul className='nav-menu'>
          <li className='nav-item'>
            <a href='/' className='nav-links'>Home</a>
          </li>
          <li className='nav-item'>
            <a href='/tours' className='nav-links'>Tour Type</a>
          </li>
          <li className='nav-item'>
            <a href='/durations' className='nav-links'>Duration</a>
          </li>
          <li className='nav-item'>
            <a href='/blog' className='nav-links'>Blog</a>
          </li>
          <li className='nav-item'>
            <a href='/about' className='nav-links'>About</a>
          </li>
          <li className='nav-item'>
            <a href='/contact' className='nav-links'>Contact</a>
          </li>
          <li className='nav-item'>
            <a href='/reviews' className='nav-links'>Reviews</a>
          </li>
        </ul>

        <div className="nav-actions">
          <button className="btn-book">Book Now</button>
          <div className="nav-icons">
            <a href="/map" className="nav-icon-link">
              <i className="fas fa-map-marker-alt"></i>
            </a>
            <a href="/account" className="nav-icon-link">
              <i className="fas fa-user"></i>
            </a>
            <a href="/search" className="nav-icon-link">
              <i className="fas fa-search"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
