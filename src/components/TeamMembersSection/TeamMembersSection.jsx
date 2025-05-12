import React from 'react';
import './TeamMembersSection.css';

const TeamMembersSection = () => {
  return (
    <section className="team-members">
      <div className="team-members__content">
        <span className="team-members__tag">• Team Members</span>

        <h2 className="team-members__headline">
          Meet the Team Making<br />
          <span>Things Happen Every Day</span>
        </h2>

        <p className="team-members__description">
        Our team is made up of passionate professionals who bring their  <br />
        expertise and creativity to every project.
        </p>

        <div className="team-members__actions">
          <button className="team-members__button">Book a 15-min call</button>
        </div>
      </div>
    </section>
  );
};

export default TeamMembersSection;
