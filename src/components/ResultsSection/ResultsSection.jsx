import React from 'react';
import './ResultsSection.css';


const ResultsSection = () => {
  return (
    <section className="results">
      

      {/* Right Side - Text Content */}
      <div className="results__content">
        <span className="results__tag">• Results</span>

        <h2 className="results__headline">
          Delivering TangibleResults<br />
          <span>That Propel Your Success</span>
        </h2>

        <p className="results__description">
        At the core of everything we do lies a commitment to delivering <br />
        measurable outcomes that drive your success.
        </p>

        <div className="results__actions">
          <button className="results__button">Book a 15-min call</button>
        </div>

        <div className="glow-image">
          <img src="/images/result.png" alt="Glowing Visual" />
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
