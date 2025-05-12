import React from 'react';
import './WorkTogether.css';

const WorkTogether = () => {
  return (
    <section className="work-together-section">
      <div className="work-together-container">
        {/* Tag */}
        <div className="work-together-tag">
          <span className="work-together-year">24/7</span>
          <span className="work-together-tag-text">Let's Work Together</span>
        </div>

        {/* Headings */}
        <h1 className="work-together-heading">
          Any <span>Questions Rising?</span><br />We<span>are All Here.</span>
        </h1>

        {/* Subtext */}
        <p className="work-together-subtext">
         Whether you have a question need assistance,<br className="work-together-break" />
          or want to start a new project, our team is here to help.
        </p>

        {/* Button */}
        <div className="work-together-buttons">
          <button className="work-together-button">Fill The Form Out!</button>
        </div>
      </div>
    </section>
  );
};

export default WorkTogether;
