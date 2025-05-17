// src/components/InfiniteCardsSlider.js
import React from "react";
import "./InfiniteCardsSlider.css";

const cards = [
  {
    city: "Basel",
    company: "Crimson Studio",
    label: "NEW",
    description: "Achieved an increase in sales within six months through a customized strategy.",
    stats: ["30% Increase in Sales", "40% Boost in Retention"],
    image: "/images/basel.png"
  },
  {
    city: "London",
    company: "Raven Company Inc",
    description: "Streamlined operations, reducing costs by using automation solutions.",
    stats: ["25% Conversion Rates", "50% Reduced in CPA"],
    image: "/images/london.png"
  },
  {
    city: "Manila",
    company: "Gotham Wonder",
    label: "FRESH",
    description: "Boosted customer engagement with a digital presence and targeted campaigns.",
    stats: ["60% Increased Traffic", "35% Growth in Sales"],
    image: "/images/manila.png"
  },
];

const InfiniteCardsSlider = () => {
  const duplicated = [...cards, ...cards]; // For infinite loop effect

  return (
    <div className="slider-wrapper">
      <div className="slider-track">
        {duplicated.map((card, index) => (
          <div className="slider-card" key={index}>
            <img src={card.image} alt={card.city} />
            <div className="card-content">
              <h3>
                {card.city}
                {card.label && <span className="label">{card.label}</span>}
              </h3>
              <p className="company">{card.company}</p>
              <p className="desc">{card.description}</p>
              <div className="stats">
                {card.stats.map((stat, i) => (
                  <span key={i} className="stat-badge">{stat}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCardsSlider;
