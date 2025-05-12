import React from 'react';
import './ToolsSection.css';

const ToolsSection = () => {
  return (
    <section className="tools">
      <div className="tools__content">
        <span className="tools__tag">• Tools</span>

        <h2 className="tools__headline">
          Tools and Technologies<br />
          <span>Powering our Productivity</span>
        </h2>

        <p className="tools__description">
         Our toolkit is made up of the latest and most reliable tech to ensure  <br />
          your project is executed to perfection. 
        </p>

        <div className="tools__actions">
          <button className="tools__button">Book an Appointment</button>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
