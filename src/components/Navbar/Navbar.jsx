import React from 'react';
import './Navbar.css';

// Functional component for the navigation bar
const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo container */}
      <div className="navbar__logo">
        <img src="/images/logo.png" alt="Logo" />
      </div>

      {/* Navigation links */}
      <ul className="navbar__menu">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/portfolio">Portfolio</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/faq">FAQ</a></li>
      </ul>

      {/* Call to action button */}
      <button className="navbar__button">Get in Touch</button>

      {/* Hamburger icon for small screens */}
      <div className="navbar__hamburger">&#9776;</div>
    </nav>
  );
};

export default Navbar;
