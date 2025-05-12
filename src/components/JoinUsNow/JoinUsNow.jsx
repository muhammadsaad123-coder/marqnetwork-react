import React from 'react';
import './JoinUsNow.css'; // renamed CSS file

const JoinUsNow = () => {
  return (
    <section className="join">
      {/* Text Content */}
      <div className="join__content">
        <span className="join__tag">• Join Us Now</span>

        <h2 className="join__headline">
        Each Project we Undertake<br />
          <span>is a Unique Opportunity.</span>
        </h2>

        <p className="join__description">
        Ready to take the next step? Join us now and start transforming your <br />
        vision into reality with expert support.
        </p>

        <div className="join__actions">
          <button className="join__button">Book an Appointment</button>
        </div>
      </div>
    </section>
  );
};

export default JoinUsNow;
