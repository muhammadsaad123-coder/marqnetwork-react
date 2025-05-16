import React from 'react';
import './LandinBenefitCards.css';

const LandinBenefitCards = () => {
  return (
    <div className="benefit-wrapper">
      {/* Large Card */}
      <div className="benefit-card large">
        <img src="/images/card1.png" alt="Unlimited Requests" />
        <h3>Submit Unlimited Requests</h3>
        <p>
          Enjoy the freedom to submit unlimited requests without any restrictions.
          Whether you need design tweaks, we’re here to assist you at every step.
        </p>
        <div className="button-group">
          <button className="primary-btn">Book an Appointment</button>
          <button className="secondary-btn">What is Landin?</button>
        </div>
      </div>

      {/* Requests & Revisions */}
      <div className="benefit-card">
        <img src="/images/card1.png" alt="Requests & Revisions" />
        <div className="card-header">
          <h4>Requests & Revisions</h4>
          <span className="pill">NEW</span>
        </div>
        <p>
          Our process includes multiple rounds of requests and revisions, ensuring
          that your feedback is incorporated and the final product meets your expectations.
        </p>
      </div>

      {/* Worry Free Pricing */}
      <div className="benefit-card">
        <img src="/images/card1.png" alt="Worry Free Pricing" />
        <div className="card-header">
          <h4>Worry Free Pricing</h4>
          <span className="pill">NEW</span>
        </div>
        <p>
          Whether you’re just starting or scaling up, our flexible pricing plans fit your needs and budget.
        </p>
      </div>

      {/* Quick Turnaround */}
      <div className="benefit-card small">
        <img src="/images/card2.png" alt="Quick Turnaround" />
        <div className="card-header">
          <h4>Quick Turnaround</h4>
          <span className="pill">NEW</span>
        </div>
        <p>
          We prioritize efficiency without compromising quality.
        </p>
      </div>

      {/* Publish in Seconds */}
      <div className="benefit-card small">
        <img src="/images/card3.png" alt="Publish in Seconds" />
        <h4>Publish in Seconds</h4>
        <p>
          Publish your site in seconds with our streamlined process.
        </p>
      </div>
    </div>
  );
};

export default LandinBenefitCards;
