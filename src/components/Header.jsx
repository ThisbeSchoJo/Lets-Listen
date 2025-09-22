import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Listening Sessions", href: "/listening-sessions" },
  { name: "Mental Health Awareness", href: "/mental-health-awareness" },
  { name: "Get Involved", href: "/get-involved" },
];

export default function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => setMobileMenuOpen((open) => !open);
  const handleMenuClose = () => setMobileMenuOpen(false);

  // Close menu on Escape when open
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") handleMenuClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileMenuOpen]);

  return (
    <nav className="navbar">
      <div className="nav-inner">
        {/* Left: Logo */}
        <div className="brand">
          <Link to="/" aria-label="Home" className="focus-reset">
            {/* Update the src path to your logo */}
            <img src="/logo.png" alt="Logo" className="brand-logo" />
          </Link>
        </div>

        {/* Right: Hamburger (mobile only) */}
        <button
          className="hamburger focus-reset desktop-hide"
          aria-label="Open menu"
          onClick={handleMenuToggle}
        >
          <svg className="icon-24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Center: Links (desktop) */}
        <ul className="nav-links desktop-show">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className={`nav-link focus-reset ${isActive ? "active" : ""}`}
                  aria-label={link.name}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Donate (desktop) */}
        <div className="donate-wrap desktop-show">
          <Link to="/donate" className="donate-btn focus-reset" aria-label="Donate">
            Donate
          </Link>
        </div>
      </div>

      {/* Mobile overlay menu */}
      {mobileMenuOpen && (
        <div className="mobile-overlay desktop-hide" onClick={handleMenuClose}>
          <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-btn focus-reset"
              aria-label="Close menu"
              onClick={handleMenuClose}
            >
              <svg className="icon-24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <ul className="mobile-links">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="mobile-link focus-reset"
                    onClick={handleMenuClose}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/donate" className="mobile-donate focus-reset" onClick={handleMenuClose}>
                  Donate
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
