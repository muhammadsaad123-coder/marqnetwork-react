import React from 'react';
import './FeatureGridSection.css';

const cards = [
  {
    id: 1,
    icon: '/images/revenue.png',
    name: 'Boost Your Revenue',
    label: 'Increase Profits',
    description: 'Unlock new revenue streams with data-driven strategies and marketing.',
    pro: true
  },
  {
    id: 2,
    icon: '/images/assets.png',
    name: 'Customizable Assets',
    label: 'Editable Designs',
    description: 'Easily modify and personalize design elements to fit your brand’s identity.',
    pro: false
  },
  {
    id: 3,
    icon: '/images/bug.png',
    name: 'Bug Less Development',
    label: 'Optimized Code',
    description: 'Our bug-less development ensures that your website runs smooth and fast.',
    pro: false
  },
  {
    id: 4,
    icon: '/images/award.png',
    name: 'Award-Winning Designs',
    label: 'Recognized Design',
    description: 'Stripe is our payment processing tool, providing a secure way to transactions.',
    pro: false
  },
  {
    id: 5,
    icon: '/images/fastdev.png',
    name: 'Lightning Fast Delivery',
    label: 'Quick Turnaround',
    description: 'Ensuring your deliverables are ready when you need them, with great quality.',
    pro: true
  },
  {
    id: 6,
    icon: '/images/mobile.png',
    name: 'Mobile Friendly',
    label: 'Responsive',
    description: 'Our mobile-friendly design ensures your design looks stunning across all devices. ',
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
