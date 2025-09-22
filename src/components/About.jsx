import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/About.css";

export default function About() {
  const [expandedCards, setExpandedCards] = useState(new Set());

  const toggleExpand = (index) => {
    setExpandedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const boardMembers = [
    {
      name: "John Doe",
      position: "Board Member Position",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      name: "Jane Doe",
      position: "Board Member Position",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      name: "John Doe",
      position: "Board Member Position",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      name: "Jane Doe",
      position: "Board Member Position",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];
  return (
    <div className="about-page">
      <Navbar />

      {/* Mission and Philosophy Section */}
      <section className="mission-philosophy-section">
        <div className="mission-philosophy-container">
          <div className="mission-section">
            <div className="mission-content">
              <div className="mission-text">
                <h2 className="section-title">Our Mission</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div className="mission-image">
                <div className="image-placeholder">
                  <div className="placeholder-text">Team Photo Placeholder</div>
                </div>
              </div>
            </div>
          </div>

          <div className="philosophy-section">
            <div className="philosophy-content">
              <div className="philosophy-image">
                <div className="image-placeholder">
                  <div className="placeholder-text">Team Photo Placeholder</div>
                </div>
              </div>
              <div className="philosophy-text">
                <h2 className="section-title">Our Philosophy</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <button className="more-info-btn">More Info</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board Members Section */}
      <section className="board-members-section">
        <div className="board-members-container">
          <div className="board-members-header">
            <h2 className="board-members-title">Board Members</h2>
          </div>

          <div className="board-members-grid">
            {boardMembers.map((member, index) => (
              <div
                key={index}
                className={`board-member-card ${
                  expandedCards.has(index) ? "expanded" : ""
                }`}
                onClick={() => toggleExpand(index)}
              >
                <div className="board-member-photo">
                  <div className="placeholder-photo">
                    <div className="placeholder-icon">👤</div>
                  </div>
                </div>
                <div className="board-member-name">{member.name}</div>
                <div className="board-member-chevron">
                  {expandedCards.has(index) ? "⌃" : "⌄"}
                </div>
                {expandedCards.has(index) && (
                  <div className="board-member-details">
                    <div className="board-member-position">
                      {member.position}
                    </div>
                    <div className="board-member-description">
                      <p>{member.bio}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
