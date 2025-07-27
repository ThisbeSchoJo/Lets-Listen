import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="footer-logo">🎧</div>
        <ul className="footer-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Get Involved</a>
          </li>
          <li>
            <a href="#">Sign Up</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="footer-section social-media">
        <div className="footer-icons">
          <a href="#" aria-label="Facebook">
            &#xf09a;
          </a>
          <a href="#" aria-label="Instagram">
            &#xf16d;
          </a>
          <a href="#" aria-label="Twitter">
            &#xf099;
          </a>
          <a href="#" aria-label="LinkedIn">
            &#xf0e1;
          </a>
        </div>
      </div>
    </footer>
  );
}
