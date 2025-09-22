import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home-page">
      <Navbar />

      {/* Hero Section with Background Image */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">
              Everyone has a story - We are here to listen.
            </h1>
            <p className="hero-subtitle">
              Creating a space for voices of all ages and walks of life.
            </p>
          </div>
        </div>
      </section>

      {/* Sign up for a listening session Section */}
      <section className="content-section listening-session-section">
        <div className="content-container">
          <h2 className="section-title">Sign up for a listening session</h2>
          <p className="section-description">
            This is the listening session introduction. This is the listening
            session introduction. This is the listening session introduction.
            This is the listening session introduction. This is the listening
            session introduction. This is the listening session introduction.
          </p>
          <button className="cta-button">Sign Up</button>
        </div>
      </section>

      {/* Be aware of mental health Section */}
      <section className="content-section mental-health-section">
        <div className="content-container">
          <h2 className="section-title">Be aware of mental health</h2>
          <p className="section-description">
            This is the listening session introduction. This is the listening
            session introduction. This is the listening session introduction.
            This is the listening session introduction. This is the listening
            session introduction. This is the listening session introduction.
          </p>
          <button className="cta-button">Learn more</button>
        </div>
      </section>

      {/* Meet our team Section */}
      <section className="content-section meet-team-section">
        <div className="content-container">
          <div className="team-content">
            <div className="team-text">
              <h2 className="section-title">Meet our team</h2>
              <p className="section-description">
                This is the listening session introduction. This is the
                listening session introduction. This is the listening session
                introduction. This is the listening session introduction.
              </p>
              <button className="cta-button">Get Involved</button>
            </div>
            <div className="team-image">
              <div className="image-placeholder">
                <div className="placeholder-text">Team Photo Placeholder</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
