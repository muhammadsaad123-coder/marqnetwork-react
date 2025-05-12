import React from 'react';
import './PortfolioSection.css'; // new CSS file

const PortfolioSection = () => {
  return (
    <section className="portfolio">
      <div className="portfolio__content">
        <span className="portfolio__tag">• Portfolio</span>

        <h2 className="portfolio__headline">
          Our Selected Projects<br />
          <span>That Propel Your Website.</span>
        </h2>

        <p className="portfolio__description">
        Explore our curated work, showcasing collaborations with visionary  <br />
        clients across diverse industries.
        </p>

        <div className="portfolio__actions">
          <button className="portfolio__button">View Portfolio</button>
        </div>

        <div className="glow-image">
          <img src="/images/portfolio.png" alt="Glowing Visual" />
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
