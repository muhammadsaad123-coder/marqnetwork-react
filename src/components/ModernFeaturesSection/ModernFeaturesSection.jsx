import React from 'react';
import './ModernFeaturesSection.css';

const ModernFeaturesSection = () => {
  return (
    <div className="container">
    <section className="modern-features">
      <div className="feature-card wide">
        <h3>Submit Unlimited Requests</h3>
        <p>Enjoy the freedom to submit unlimited requests without any restrictions. Whether you need design tweaks, we're here to assist you at every step.</p>
        <div className="buttons">
          <button className="btn-primary">Book an Appointment</button>
          <button className="btn-secondary">What is Landin?</button>
        </div>
      </div>

      <div className="feature-card">
        <div className="feature-header">
          <h3>Requests & Revisions</h3>
          <span className="badge">NEW</span>
        </div>
        <p>Our process includes multiple rounds of requests and revisions, ensuring that your feedback is incorporated and that the final product meets your expectations.</p>
      </div>

      <div className="feature-card">
        <div className="feature-header">
          <h3>Quick Turnaround</h3>
          <span className="badge">NEW</span>
        </div>
        <p>We prioritize efficiency without compromising quality.</p>
      </div>

      <div className="feature-card">
        <div className="feature-header">
          <h3>Publish in Seconds</h3>
        </div>
        <p>Publish your site in seconds with our streamlined process.</p>
      </div>

      <div className="feature-card">
        <div className="feature-header">
          <h3>Worry Free Pricing</h3>
          <span className="badge">NEW</span>
        </div>
        <p>Whether you're just starting or scaling up, our flexible pricing plans are designed to fit your needs and budget, so you can get started without any financial stress.</p>
      </div>
    </section>
    </div>
  );
};

export default ModernFeaturesSection;
