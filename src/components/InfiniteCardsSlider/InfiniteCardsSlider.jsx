// src/components/InfiniteCardsSlider.js
import React from "react";
import "./InfiniteCardsSlider.css";

const cards = [
  {
    city: "Excelus (Gov-IT)",
    company: "Cyber-Security Overhaul",
    description: "Hardened infra, passed Federal audit with zero findings and doubled site speed.",
    stats: ["100 % Compliance Pass", "70 % Faster Load"],
    image: "/images/basel.png"
  },
  {
    city: "GA Tax Lien Boot Camp",
    company: "Webinar-to-Boot-Camp Funnel",
    description: "Packed 250-400 attendees every 2 weeks and upsold a $3,999 boot-camp.",
    stats: ["37 % Webinar-→-Sale Rate", "$3.2 M Pipeline"],
    image: "/images/london.png"
  },
  {
    city: "JeCouturier",
    company: "Custom E-Com for Tailoring",
    description: "Launched bespoke suit store— full funnel, CRM, and automation.",
    stats: ["4 × Online Sales", "65 % Repeat Orders"],
    image: "/images/manila.png"
  },
  {
    city: "Luna Health",
    company: "MVP to Market in 90 Days",
    description: "Built & shipped tele-health app; rapid user uptake post-launch.",
    stats: ["45 k App Downloads"],
    image: "/images/basel.png"
  },
  {
    city: "Collaborative Creative",
    company: "Done-For-You Funnel Ops",
    description: "Managed email + funnel; doubled rev while client slept.",
    stats: ["120 % Revenue Lift", "250 % Email CTR"],
    image: "/images/london.png"
  },
  {
    city: "Way Fields Studio",
    company: "AI-Powered Lead Engine",
    description: "Deployed AI site + ads, slashed acquisition costs.",
    stats: ["52 % Lead-to-Call Rate", "40 % Lower CAC"],
    image: "/images/manila.png"
  }
];

const InfiniteCardsSlider = () => {
  const duplicated = [...cards, ...cards];
  return (
    <div className="slider-wrapper">
      <div className="slider-track">
        {duplicated.map((card, index) => (
          <div className="slider-card" key={index}>
            <div className="card-image-wrapper">
              <img src={card.image} alt={card.city} />
              <div className="card-content-overlay">
                <h3 className="brand-title">{card.city}</h3>
                <p className="company">{card.company}</p>
                <p className="desc">{card.description}</p>
                <div className="stats">
                  {card.stats.map((stat, i) => (
                    <span key={i} className="stat-badge">{stat}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCardsSlider;
