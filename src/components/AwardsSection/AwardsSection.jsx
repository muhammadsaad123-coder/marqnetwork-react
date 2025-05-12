import React from 'react';
import './AwardsSection.css';

const awards = [
  {
    id: 1,
    logo: '/images/award1.png',
    title: 'CSS Design Awards',
    subtitle: 'Site Of The Day',
    count: '16x'
  },
  {
    id: 2,
    logo: '/images/award2.png',
    title: 'Awwwards',
    subtitle: 'Site Of The Year',
    count: '18x'
  },
  {
    id: 3,
    logo: '/images/award3.png',
    title: 'Red Dot Design',
    subtitle: 'Best Of The Year',
    count: '07x'
  },
  {
    id: 4,
    logo: '/images/award4.png',
    title: 'Framer Awards',
    subtitle: 'Site Of The Month',
    count: '12x'
  }
];

const AwardsSection = () => {
  return (
    <section className="awards">
      {/* Left Column */}
      <div className="awards__left">
        <span className="awards__tag">• Awards</span>
        <h2>Awards<br /><span>& Recognition</span></h2>
        <p>We’re proud to have been recognized with several awards for our hard work and dedication.</p>
      </div>

      {/* Right Column - Cards */}
      <div className="awards__grid">
        {awards.map(({ id, logo, title, subtitle, count }) => (
          <div key={id} className="award__card">
            <img src={logo} alt={title} />
            <div className="award__info">
              <h4>{title}</h4>
              <p>{subtitle}</p>
            </div>
            <span className="award__count">{count}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AwardsSection;
