import React from 'react';
import './AwardsSection.css';

const proofCards = [
  {
    id: 1,
    logo: '/images/award1.png',
    title: '45-Day Launch Pledge',
    subtitle: 'Build Fast, Build Right',
    badge: '45 d',
    description: 'We sign, we ship—live in ≤ 45 days, backed by automated QA & peer reviews.'
  },
  {
    id: 2,
    logo: '/images/award2.png',
    title: '360° Stack, One PM',
    subtitle: 'Strategy ➜ Scale',
    badge: '5 studios',
    description: 'Plug-and-play consultancy, design, code, growth & offshore delivery under one contract.'
  },
  {
    id: 3,
    logo: '/images/award3.png',
    title: 'Borderless Talent',
    subtitle: 'Off-shore hub, EST hours',
    badge: '24 / 7',
    description: 'Cost-efficient sprint teams overlap US mornings—senior US + GCC leads steer quality.'
  },
  {
    id: 4,
    logo: '/images/award4.png',
    title: 'Security & Trust',
    subtitle: 'Fed-grade controls',
    badge: '0 incidents',
    description: 'SOC-2 aligned check-lists, encrypted pipelines, flawless audit record.'
  }
];

const AwardsSection = () => {
  return (
    <section className="awards">
      {/* Left Column */}
      <div className="awards__left">
        <span className="awards__tag">• Proof, Not Promises</span>
        <h2>What Makes<br /><span>MarQ Different</span></h2>
        <p>Seven core values, one 360° delivery model, zero excuses. From discovery to scale, every MarQ project is run on the same playbook:</p>
        <ul className="awards__list">
          <li>Client-Obsessed Impact</li>
          <li>360° Thinking</li>
          <li>Radical Transparency</li>
          <li>Build Fast, Build Right</li>
          <li>Borderless Talent</li>
          <li>Security & Trust</li>
          <li>Relentless Improvement</li>
        </ul>
      </div>

      {/* Right Column - Cards */}
      <div className="awards__grid">
        {proofCards.map(({ id, logo, title, subtitle,  description }) => (
          <div key={id} className="award__card">
            <img src={logo} alt={title} />
            <div className="award__info">
              <h4>{title}</h4>
              <p>{subtitle}</p>
            </div>
            {/* <span className="award__count">{badge}</span> */}
            <p className="award__desc">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AwardsSection;
