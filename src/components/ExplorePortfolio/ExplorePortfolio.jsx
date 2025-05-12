import React from 'react';
import './ExplorePortfolio.css';

const ExplorePortfolio = () => {
  return (
    <section className="explore-section">
      <div className="explore-container">
        {/* Tag */}
        <div className="explore-tag">
          <span className="year">2025</span>
          <span className="tag-text">Explore Our Portfolio</span>
        </div>

        {/* Headings */}
        <h1 className="explore-heading">
          Check <span>Out Some</span><br />Extra- <span>Ordinary Work</span>
        </h1>

        {/* Subtext */}
        <p className="explore-subtext">
          From startups to established brand , we create<br className="break" />
         tailored solutions that drive success and make a real impact.
        </p>

        {/* Buttons */}
        <div className="explore-buttons">
         <button  className="about__button">Build Your Product</button>
        </div>

        
      </div>
    </section>
  );
};

export default ExplorePortfolio;
