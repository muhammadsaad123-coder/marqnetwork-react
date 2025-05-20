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
           Fire off as many tasks as you like—design, dev, or copy. Your dedicated pod works through them in your chosen priority, no tickets lost.

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
          Every deliverable includes built-in feedback rounds. We refine fast, documenting changes so you see progress—not guesswork.
        </p>
      </div>

      {/* Worry Free Pricing */}
      <div className="benefit-card">
        <img src="/images/card1.png" alt="Worry Free Pricing" />
        <div className="card-header">
          <h4> Lightning-Fast Turnaround</h4>
          <span className="pill">NEW</span>
        </div>
        <p>
          Our follow-the-sun workflow ships polished assets in a day or two, keeping your launches ahead of schedule.
        </p>
      </div>

      {/* Quick Turnaround */}
      <div className="benefit-card small">
        <img src="/images/card2.png" alt="Quick Turnaround" />
        <div className="card-header">
          <h4>Worry-Free Pricing</h4>
          <span className="pill">NEW</span>
        </div>
        <p>
          Flexible monthly plans cover strategy, design, and code. Cancel anytime, own every file—no hidden fees or hourly overages.
        </p>
      </div>

      {/* Publish in Seconds */}
      <div className="benefit-card small">
        <img src="/images/card3.png" alt="Publish in Seconds" />
        <h4>Off-Shore Excellence Hub</h4>
        <p>
          U.S.-friendly hours + global talent. Get senior expertise at 30-40 % savings, with an on-shore PM bridging every call.
        </p>
      </div>
    </div>
  );
};

export default LandinBenefitCards;
