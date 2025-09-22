import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/Donate.css";

export default function Donate() {
  return (
    <div className="donate-page">
      <Navbar />

      {/* Hero Section */}
      <section className="donate-hero-section">
        <div className="donate-hero-content">
          <div className="donate-hero-text">
            <h1 className="donate-hero-title">Support Our Mission</h1>
            <p className="donate-hero-description">
              Your contribution helps us create safe spaces for voices to be
              heard, foster understanding in our communities, and make a lasting
              impact.
            </p>
            <div className="donate-button-container">
              <button className="donate-button primary">Donate Now</button>
              <button className="donate-button secondary">Learn More</button>
            </div>
          </div>
          <div className="donate-hero-image">
            <div className="image-placeholder">
              <div className="placeholder-text">Donation Image</div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="content-section impact-section">
        <div className="content-container">
          <h2 className="section-title">Your Impact</h2>
          <div className="impact-content">
            <div className="impact-item">
              <div className="impact-icon">S</div>
              <h3>Support Listening Sessions</h3>
              <p>
                Help us organize and facilitate meaningful conversations that
                bring communities together and create understanding.
              </p>
            </div>
            <div className="impact-item">
              <div className="impact-icon">R</div>
              <h3>Mental Health Resources</h3>
              <p>
                Fund educational materials and programs that promote mental
                health awareness and provide support to those in need.
              </p>
            </div>
            <div className="impact-item">
              <div className="impact-icon">C</div>
              <h3>Community Outreach</h3>
              <p>
                Enable us to reach more people, build partnerships, and expand
                our mission to create lasting positive change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Options Section */}
      <section className="content-section donation-options-section">
        <div className="content-container">
          <h2 className="section-title">Ways to Give</h2>
          <div className="donation-options-content">
            <div className="donation-option">
              <h3 className="section-subtitle">One-Time Donation</h3>
              <p className="section-description">
                Make a single contribution to support our immediate needs and
                ongoing programs. Every dollar makes a difference.
              </p>
              <div className="donation-amounts">
                <button className="amount-button">$25</button>
                <button className="amount-button">$50</button>
                <button className="amount-button">$100</button>
                <button className="amount-button">$250</button>
                <input
                  type="number"
                  placeholder="Other amount"
                  className="custom-amount"
                />
              </div>
              <button className="donate-now-btn">Donate Now</button>
            </div>

            <div className="donation-option">
              <h3 className="section-subtitle">Monthly Support</h3>
              <p className="section-description">
                Become a sustaining member with a monthly donation that helps us
                plan for the future and expand our impact.
              </p>
              <div className="monthly-amounts">
                <button className="amount-button">$10/month</button>
                <button className="amount-button">$25/month</button>
                <button className="amount-button">$50/month</button>
                <button className="amount-button">$100/month</button>
              </div>
              <button className="donate-now-btn">Start Monthly Giving</button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="content-section contact-section">
        <div className="content-container">
          <h2 className="section-title">Other Ways to Support</h2>
          <div className="support-options">
            <div className="support-item">
              <h3>Corporate Partnerships</h3>
              <p>
                Partner with us to create meaningful change in your community.
                We offer various sponsorship and partnership opportunities.
              </p>
              <button className="contact-btn">Contact Us</button>
            </div>
            <div className="support-item">
              <h3>Volunteer Opportunities</h3>
              <p>
                Join our team of dedicated volunteers and help us make a
                difference through listening sessions and community outreach.
              </p>
              <button className="contact-btn">Get Involved</button>
            </div>
            <div className="support-item">
              <h3>In-Kind Donations</h3>
              <p>
                Have resources, space, or services to offer? We'd love to
                discuss how we can work together to support our mission.
              </p>
              <button className="contact-btn">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
