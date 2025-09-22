import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/ListeningSession.css";

export default function ListeningSession() {
  return (
    <div className="listening-session-page">
      <Navbar />

      {/* Hero Section */}
      <section className="listening-hero-section">
        <div className="listening-hero-container">
          <div className="listening-hero-content">
            <div className="listening-hero-text">
              <h1 className="listening-hero-title">
                Sign up for a listening session
              </h1>
              <p className="listening-hero-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                tincidunt elit ex, eu luctus neque feugiat sed. Vestibulum
                volutpat ligula at lorem auctor pharetra. Phasellus lobortis
                tortor id neque fermentum scelerisque.
              </p>
              <div className="signup-button-container">
                <a
                  href="https://your-google-form-link.com"
                  className="signup-button"
                >
                  Sign Up
                </a>
              </div>
            </div>
            <div className="listening-hero-image">
              <div className="image-placeholder">
                <div className="placeholder-text">Listening Session Photo</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="what-to-expect-section">
        <div className="what-to-expect-container">
          <h2 className="section-title">What to Expect</h2>
          <div className="expectations-content">
            <div className="expectation-item">
              <div className="expectation-icon">S</div>
              <h3>Safe Space</h3>
              <p>
                We provide a welcoming, non-judgmental environment where your
                voice matters and your story is heard.
              </p>
            </div>
            <div className="expectation-item">
              <div className="expectation-icon">C</div>
              <h3>Community Support</h3>
              <p>
                Connect with others who understand and share similar experiences
                in a supportive group setting.
              </p>
            </div>
            <div className="expectation-item">
              <div className="expectation-icon">L</div>
              <h3>Active Listening</h3>
              <p>
                Our trained facilitators ensure everyone has the opportunity to
                share and be heard with respect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="how-it-works-container">
          <div className="how-it-works-content">
            <div className="how-it-works-text">
              <h2 className="section-title">How It Works</h2>
              <div className="steps-list">
                <div className="step-item">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Sign Up</h4>
                    <p>
                      Complete our simple registration form to reserve your spot
                      in an upcoming session.
                    </p>
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Join the Session</h4>
                    <p>
                      Attend your scheduled listening session either in-person
                      or virtually, depending on your preference.
                    </p>
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Share & Listen</h4>
                    <p>
                      Participate in guided discussions, share your experiences,
                      and listen to others in a supportive environment.
                    </p>
                  </div>
                </div>
              </div>
              <button className="more-info-btn">Learn More</button>
            </div>
            <div className="how-it-works-image">
              <div className="image-placeholder">
                <div className="placeholder-text">Session in Progress</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
