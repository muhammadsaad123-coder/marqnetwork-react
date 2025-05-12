import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar__logo">
        <img src="/images/logo.png" alt="Logo" />
      </div>

      {/* Hamburger Icon */}
      <div className="navbar__hamburger" onClick={toggleMenu}>
        &#9776;
      </div>

      {/* Navigation Links */}
      <ul className={`navbar__menu ${isMenuOpen ? 'navbar__menu--active' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/portfolio">Portfolio</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/faq">FAQ</a></li>
      </ul>

      {/* CTA Button */}
      <button className="navbar__button">Get in Touch</button>
    </nav>
  );
};

export default Navbar;
