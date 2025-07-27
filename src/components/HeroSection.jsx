// src/components/HeroSection.jsx
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Sign up for a listening session</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          tincidunt elit ex, eu luctus neque feugiat sed. Vestibulum volutpat
          ligula at lorem auctor pharetra. Phasellus lobortis tortor id neque
          fermentum scelerisque.
        </p>
        <div className="signup-row">
          <a href="https://your-google-form-link.com" className="signup-button">
            Sign Up
          </a>
        </div>
      </div>
      <div className="hero-image">
        {/* Placeholder image, replace with your own if desired */}
        <img
          src="https://placehold.co/250x180?text=Listening+Session"
          alt="Listening session"
        />
      </div>
    </section>
  );
}
