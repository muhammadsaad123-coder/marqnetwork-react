import React from 'react';
import './AboutUsSection.css';

const AboutSection = () => {
  return (
    <section className="deep-dive-section">
      <div className="deep-dive-container">
        {/* Tag */}
        <div className="deep-dive-tag">
          <span className="year">2025</span>
          <span className="tag-text">About marQ</span>
        </div>

        {/* Headings */}
        <h1 className="deep-dive-heading">
         Meet <span> marQ Networks </span><br />Where Vision<span>Turns Into Velocity.</span> 
        </h1>

        {/* Subtext */}
        <p className="deep-dive-subtext">
         Pull back the curtain on the strategists, engineers, and creatives turning complex <br className="break" />
          growth puzzles into elegant, revenue-boosting solutions—one launch at a time.
        </p>

        {/* Buttons */}
        <div className="deep-dive-buttons">
          <button className="btn primary">Connect With Us</button>
          <button className="btn secondary">Our Story in 90 sec</button>
        </div>
        <div className="deep__image">
                <img src="/images/about2.png" alt="about" />
            </div>
      </div>
    </section>
  );
};

export default AboutSection;
