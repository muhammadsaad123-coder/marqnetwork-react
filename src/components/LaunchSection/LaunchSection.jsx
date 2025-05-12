import React from 'react';
import './LaunchSection.css'; // new CSS file

const LaunchSection = () => {
  return (
    <section className="launch">
      <div className="launch__content">
        <span className="launch__tag">• Launch Your Site</span>

        <h2 className="launch__headline">
        The Trusted Rise Partner <br />
          <span>For Startups And Agencies</span>
        </h2>

        <p className="launch__description">
        Get your site live in no time! With professional setup and <br />
        expert support in an easy way.
        </p>

        <div className="launch__actions">
          <button className="launch__button">View About Landin</button>
        </div>

        <div className="launch-image">
          <img src="/images/launch.png" alt="Launch Visual" />
        </div>
      </div>
    </section>
  );
};

export default LaunchSection;
