import React from 'react'; 
import './FeatureSection.css';



const FeatureSection = () => {
  return (
    <section className="feature">
      {/* Left Side - Text Content */}
      <div className="feature__content">
        <span className="feature__tag">• Features</span>

        <h2 className="feature__headline">
        Unlimited Design Features<br />
          <span>Delivered In A Second!</span>
        </h2>

        <p className="feature__description">
        Get unlimited design features that give you the freedom<br />
        to create without boundaries.
        </p>

        <div className="feature__actions">
          <button className="feature__button">View About Landin</button>
        </div>

        
      </div>
    </section>
    
  );
};

export default FeatureSection;
