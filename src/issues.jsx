import React, { useState } from "react";
import "./components/issues.css"; 

const Listen = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const icons = [
    { src: "/image/education.png", alt: "Education & Work", description: "Supporting educational excellence and workforce development" },
    { src: "/image/bag.png", alt: "Food & Security", description: "Ensuring access to nutritious food for all communities" },
    { src: "/image/healthcare.png", alt: "Healthcare", description: "Quality healthcare services accessible to everyone" },
    { src: "/image/real-estate.png", alt: "Housing", description: "Affordable and safe housing solutions" },
    { src: "/image/public-service.png", alt: "Public Assistance", description: "Comprehensive support services for those in need" },
  ];

  const sections = [
    { 
      title: "EDUCATION AND WORKFORCE", 
      content: "Investing in educational infrastructure, teacher support, job training programs, and creating pathways to sustainable careers for all community members."
    },
    { 
      title: "FOOD SECURITY", 
      content: "Establishing community food programs, supporting local agriculture, and ensuring no family goes hungry through comprehensive nutrition assistance."
    },
    { 
      title: "HEALTHCARE", 
      content: "Expanding healthcare access, supporting mental health services, and ensuring quality medical care is available and affordable for everyone."
    },
    { 
      title: "HOUSING", 
      content: "Creating affordable housing initiatives, preventing homelessness, and ensuring safe, stable living conditions for all residents."
    },
    { 
      title: "PUBLIC ASSISTANCE EXPANSION AND ACCESSIBILITY", 
      content: "Streamlining support services, reducing bureaucratic barriers, and ensuring assistance reaches those who need it most efficiently."
    },
  ];

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <section className="listen-section">
      <div className="container">
        {/* Header */}
        <div className="header">
          <h1>ISSUES</h1>
          <div className="underline"></div>
          <p>
            Our commitment to addressing the most pressing challenges facing our community through comprehensive policy solutions and dedicated action.
          </p>
        </div>

        {/* Icons Grid */}
        <div className="icons-grid">
          {icons.map((icon, index) => (
            <div key={index} className="icon-card">
              <div className="icon-circle">
                <img src={icon.src} alt={icon.alt} width={50} height={50} />
              </div>
              <h3>{icon.alt}</h3>
              <p>{icon.description}</p>
            </div>
          ))}
        </div>

        {/* Expandable Sections */}
        <div className="sections">
          {sections.map((section, index) => (
            <div key={index} className="section-card">
              <button onClick={() => toggleSection(index)} className="section-toggle">
                <h3>{section.title}</h3>
                <span className={expandedSection === index ? "icon open" : "icon"}>+</span>
              </button>
              {expandedSection === index && (
                <div className="section-content">
                  <p>{section.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="cta">
          <h3>Ready to Make a Difference?</h3>
          <p>
            Learn more about our detailed policy proposals and how you can get involved in creating positive change in our community.
          </p>
          <button className="cta-btn">Get Involved</button>
        </div>
      </div>
    </section>
  );
};

export default Listen;
