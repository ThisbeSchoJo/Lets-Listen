import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FormInput from "./FormInput";
import AccordionCard from "./AccordionCard";
import "../styles/GetInvolved.css";

export default function GetInvolved(props) {
  console.log(props);
  return (
    <div className="get-involved-page">
      <Navbar />

      {/* Hero Section */}
      <section className="get-involved-hero-section">
        <div className="get-involved-hero-content">
          <div className="get-involved-hero-text">
            <h1 className="get-involved-hero-title">Get Involved With Us!</h1>
            <p className="get-involved-hero-description">
              Join our mission to create meaningful connections and foster
              understanding in our community.
            </p>
          </div>
          <div className="get-involved-hero-image">
            <div className="image-placeholder">
              <div className="placeholder-text">Get Involved Image</div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="content-section join-us-section">
        <div className="content-container">
          <div className="join-us-content">
            <div className="join-us-form">
              <h2 className="section-title">Join Us</h2>
              <p className="section-description">
                If you're passionate about what we do and would love to be part
                of our growing team. We'd love to hear from you!
              </p>

              {/* TODO: Hook up this form to backend or form handler when available */}
              <form onSubmit={(e) => e.preventDefault()} className="join-form">
                <FormInput label="Name" name="name" placeholder="Name" />
                <FormInput
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                />
                <label htmlFor="resume-upload" className="custom-file-label">
                  Upload Resume
                </label>
                <input
                  type="file"
                  id="resume-upload"
                  className="hidden-file-input"
                  name="resume"
                />
                <FormInput
                  label="Short Message / Introduction"
                  name="message"
                  placeholder="Short Message / Introduction"
                />
                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </form>
              <p className="form-note">
                We'll reach out to you if your skills match any future openings!
              </p>
            </div>

            <div className="available-openings">
              <h3 className="section-subtitle">Available Openings</h3>
              <p className="section-description">
                Explore roles and get ready today.
              </p>
              <div className="accordion-grid">
                <AccordionCard
                  title="AI Research Intern"
                  description="Contribute to our ML models and experiment with data science pipelines."
                />
                <AccordionCard
                  title="Frontend Developer"
                  description="Help enhance our web experience with React and Next.js."
                />
                <AccordionCard
                  title="Community Coordinator"
                  description="Engage with users and build partnerships with local tech groups."
                />
                <AccordionCard
                  title="Content Strategist"
                  description="Plan blog and newsletter content to reflect our mission."
                />
                <AccordionCard
                  title="UX/UI Designer"
                  description="Design user-friendly and accessible interfaces for our platform."
                />
                <AccordionCard
                  title="Project Manager"
                  description="Coordinate across teams to ensure deliverables are met on time."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="content-section contact-section">
        <div className="content-container">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-description">
            Let's connect! Have questions, suggestions or ideas? Reach out to us
            anytime - we're always listening.
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <h3>General Inquiries:</h3>
              <p>
                <a href="mailto:info@letslisten.org">info@letslisten.org</a>
              </p>
            </div>
            <div className="contact-item">
              <h3>Careers:</h3>
              <p>
                <a href="mailto:careers@letslisten.org">
                  careers@letslisten.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
