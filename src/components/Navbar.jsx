import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">🎧</div>
      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Get Involved</a></li>
        <li><a href="#">Sign Up</a></li>
        <li><a href="#">Donate</a></li>
      </ul>
    </nav>
  );
}
