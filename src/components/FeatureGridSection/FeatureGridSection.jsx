import React from 'react';
import './FeatureGridSection.css';

const cards = [
  {
    id: 1,
    icon: '/images/revenue.png',
    name: 'Boost Your Revenue',
    label: 'Data-Driven Growth',
    description:
      'Proven funnels & CRO tweaks that add 20–40% new revenue without extra ad spend.',
    pro: true
  },
  {
    id: 2,
    icon: '/images/assets.png',
    name: 'Customisable Assets',
    label: 'Edit • Re-use • Scale',
    description:
      '100% Figma + dev files—swap colors, copy, or layouts in minutes and stay on brand everywhere.',
    pro: false
  },
  {
    id: 3,
    icon: '/images/bug.png',
    name: 'Bug-Free Development',
    label: 'Optimised Code',
    description:
      'Rigorous QA + automated tests mean your site ships lightning-fast and crash-proof on Day 1.',
    pro: false
  },
  {
    id: 4,
    icon: '/images/award.png',
    name: 'Award-Winning Design',
    label: 'Recognised Creativity',
    description:
      'Visual systems praised by Awwwards & Behance that make your brand impossible to ignore.',
    pro: false
  },
  {
    id: 5,
    icon: '/images/fastdev.png',
    name: 'Lightning-Fast Delivery',
    label: 'Quick Turnaround',
    description:
      'Average task turnaround: 2–3 biz days—launch campaigns while others are still mocking up.',
    pro: true
  },
  {
    id: 6,
    icon: '/images/mobile.png',
    name: 'Mobile-First Builds',
    label: 'Responsive & Ready',
    description:
      'Seamless performance on every device, boosting mobile conversions by up to 35%.',
    pro: false
  }
];

const FeatureSection = () => {
  return (
    <section className="feature__section">
      <div className="feature__grid">
        {cards.map(({ id, icon, name, label, description, pro }) => (
          <div key={id} className="feature__card">
            <div className="card__top">
              <img src={icon} alt={name} className="card__icon" />
              <span className="card__arrow">↗</span>
            </div>

            <div className="card__title">
              <h4>{name}</h4>
              {pro && <span className="pro__badge">PRO</span>}
            </div>

            <p className="card__label">{label}</p>
            <p className="card__desc">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
