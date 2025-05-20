import React from 'react';
import './AboutUsSection.css';

const AboutSection = () => {
  return (
    <section className="deep-dive-section">
      <div className="deep-dive-container">
        {/* Tag */}
        <div className="deep-dive-tag">
          <span className="year">2025</span>
          <span className="tag-text">Dig Deep About Us ..</span>
        </div>

        {/* Headings */}
        <h1 className="deep-dive-heading">
          Learn <span>More About Landin</span><br />Let’s <span>Deep Dive!</span> 
        </h1>

        {/* Subtext */}
        <p className="deep-dive-subtext">
          Landin is your go-to agency for creative thinking and<br className="break" />
          marketing ideas. We specialize in digital business solutions.
        </p>

        {/* Buttons */}
        <div className="deep-dive-buttons">
          <button className="btn primary">Connect With Us</button>
          <button className="btn secondary">What is Landin?</button>
        </div>
        <div className="deep__image">
                <img src="/images/about2.png" alt="about" />
            </div>
      </div>
    </section>
  );
};

export default AboutSection;
