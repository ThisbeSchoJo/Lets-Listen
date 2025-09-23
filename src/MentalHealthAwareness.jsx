import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/MentalHealthAwareness.css";

export default function MentalHealthAwareness() {
  return (
    <div className="mental-health-page">
      <Navbar />

      {/* Hero Section */}
      <section className="mental-health-hero-section">
        <div className="mental-health-hero-container">
          <div className="mental-health-hero-content">
            <div className="mental-health-hero-text">
              <h1 className="mental-health-hero-title">
                Mental Health Awareness
              </h1>
              <p className="mental-health-hero-description">
                Breaking down barriers and fostering understanding around mental
                health. Together, we can create a supportive community where
                everyone feels heard, valued, and empowered to seek help when
                they need it.
              </p>
              <div className="cta-button-container">
                <button className="cta-button primary">Get Support</button>
                <button className="cta-button secondary">Learn More</button>
              </div>
            </div>
            <div className="mental-health-hero-image">
              <div className="image-placeholder">
                <div className="placeholder-text">
                  Mental Health Awareness Image
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Mental Health Section */}
      <section className="understanding-section">
        <div className="understanding-container">
          <h2 className="section-title">Understanding Mental Health</h2>
          <div className="understanding-content">
            <div className="understanding-item">
              <div className="understanding-icon">M</div>
              <h3>Mental Health Matters</h3>
              <p>
                Mental health is just as important as physical health. It
                affects how we think, feel, and act, influencing every aspect of
                our daily lives.
              </p>
            </div>
            <div className="understanding-item">
              <div className="understanding-icon">S</div>
              <h3>You're Not Alone</h3>
              <p>
                Millions of people experience mental health challenges. Seeking
                help is a sign of strength, not weakness.
              </p>
            </div>
            <div className="understanding-item">
              <div className="understanding-icon">H</div>
              <h3>Support is Available</h3>
              <p>
                There are many resources, treatments, and support systems
                available to help you on your mental health journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="resources-section">
        <div className="resources-container">
          <div className="resources-content">
            <div className="resources-text">
              <h2 className="section-title">Resources & Support</h2>
              <div className="resource-list">
                <div className="resource-item">
                  <div className="resource-number">1</div>
                  <div className="resource-content">
                    <h4>Crisis Support</h4>
                    <p>
                      If you're in immediate distress, call 988 (Suicide &
                      Crisis Lifeline) or text HOME to 741741 (Crisis Text
                      Line).
                    </p>
                  </div>
                </div>
                <div className="resource-item">
                  <div className="resource-number">2</div>
                  <div className="resource-content">
                    <h4>Professional Help</h4>
                    <p>
                      Connect with mental health professionals, counselors, and
                      therapists in your area for ongoing support.
                    </p>
                  </div>
                </div>
                <div className="resource-item">
                  <div className="resource-number">3</div>
                  <div className="resource-content">
                    <h4>Community Support</h4>
                    <p>
                      Join support groups and connect with others who understand
                      your experiences and can offer peer support.
                    </p>
                  </div>
                </div>
              </div>
              <button className="more-info-btn">Find Resources</button>
            </div>
            <div className="resources-image">
              <div className="image-placeholder">
                <div className="placeholder-text">Support Resources</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awareness & Education Section */}
      <section className="awareness-section">
        <div className="awareness-container">
          <h2 className="section-title">Awareness & Education</h2>
          <div className="awareness-grid">
            <div className="awareness-card">
              <div className="card-icon">E</div>
              <h3>Educational Materials</h3>
              <p>
                Access reliable information about mental health conditions,
                treatments, and coping strategies.
              </p>
            </div>
            <div className="awareness-card">
              <div className="card-icon">I</div>
              <h3>Early Intervention</h3>
              <p>
                Learn to recognize early warning signs and how to provide
                support to loved ones who may be struggling.
              </p>
            </div>
            <div className="awareness-card">
              <div className="card-icon">C</div>
              <h3>Open Conversations</h3>
              <p>
                Promote open, honest discussions about mental health to reduce
                stigma and create supportive environments.
              </p>
            </div>
            <div className="awareness-card">
              <div className="card-icon">S</div>
              <h3>Self-Care Practices</h3>
              <p>
                Discover practical self-care techniques and wellness strategies
                to maintain good mental health.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
