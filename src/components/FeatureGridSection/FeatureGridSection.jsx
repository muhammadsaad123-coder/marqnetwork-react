import React from 'react';
import './FeatureGridSection.css';
import { FaDollarSign, FaBolt } from 'react-icons/fa';

const features = [
  {
    icon: <FaDollarSign className="feature__icon" />,
    title: "Boost Your Revenue",
    label: "PRO",
    subtitle: "Increase Profits",
    description: "Unlock new revenue streams with data-driven strategies and marketing."
  },
  {
    icon: <FaBolt className="feature__icon yellow" />,
    title: "Lightning Fast Delivery",
    label: "PRO",
    subtitle: "Quick Turnaround",
    description: "Ensuring your deliverables are ready when you need them, with great quality."
  },
];

const FeatureSection = () => {
  return (
    <section className="feature__grid">
      {Array(3).fill(0).map((_, rowIndex) =>
        features.map((feature, i) => (
          <div key={`${rowIndex}-${i}`} className="feature__card">
            <div className="feature__top">
              {feature.icon}
              <div className="feature__title">{feature.title}</div>
              <span className="feature__label">{feature.label}</span>
            </div>
            <div className="feature__subtitle">{feature.subtitle}</div>
            <div className="feature__description">{feature.description}</div>
          </div>
        ))
      )}
    </section>
  );
};

export default FeatureSection;
