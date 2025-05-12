import React from "react";
import "./TeamSection.css"; // Make sure this path is correct

const teamMembers = [
  {
    name: "Daniel Reed",
    role: "Co-Founder, CEO",
    image: "/images/boy.jpg",
    linkedin: "https://www.linkedin.com/in/danielreed",
  },
  {
    name: "James Turner",
    role: "Developer, Tech Lead",
    image: "/images/girl.jpeg",
    linkedin: "https://www.linkedin.com/in/jamesturner",
  },
  {
    name: "Michael Carter",
    role: "Marketing Organizer",
    image: "/images/boy.jpg",
    linkedin: "https://www.linkedin.com/in/michaelcarter",
  },
  {
    name: "William Scott",
    role: "Designer, Art Lead",
    image: "/images/girl.jpeg",
    linkedin: "https://www.linkedin.com/in/williamscott",
  },
  {
    name: "Ethan Mitchell",
    role: "UX/UI Specialist",
    image: "/images/boy.jpg",
    linkedin: "https://www.linkedin.com/in/ethanmitchell",
  },
  {
    name: "Isabella Hughes",
    role: "Content Creator, Writer",
    image: "/images/girl.jpeg",
    linkedin: "https://www.linkedin.com/in/isabellahughes",
  },
];

const TeamSection = () => {
  return (
    <div className="team-members">
      <div className="team-members__grid">
        {teamMembers.map((member, index) => (
          <a
            key={index}
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="team-card"
          >
            <img
              src={member.image}
              alt={member.name}
              className="team-card__img"
            />
            <div className="team-card__info">
              <h3 className="team-card__name">{member.name}</h3>
              <p className="team-card__role">{member.role}</p>
            </div>
            <button className="team-card__btn">
              <img
                src="/images/icon.png"
                alt="icon"
                className="team-card__icon"
              />
            </button>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
