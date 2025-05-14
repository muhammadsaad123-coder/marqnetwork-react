import React from 'react';
import './PortfolioSection.css'; // new CSS file
import { motion } from "framer-motion";

const PortfolioSection = () => {
  return (
    <section className="portfolio">
      <div className="portfolio__content">
        <span className="portfolio__tag">• Portfolio</span>

        <motion.h2 className="portfolio__headline"
          initial={{ x: -20, opacity: 0.6, filter: "blur(4px)" }}
  whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
  transition={{ duration: 1.2, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.5 }}>
          Our Selected Projects<br />
          <span>That Propel Your Website.</span>
        </motion.h2>

        <p className="portfolio__description">
        Explore our curated work, showcasing collaborations with visionary  <br />
        clients across diverse industries.
        </p>

        <div className="portfolio__actions">
          <button className="portfolio__button">View Portfolio</button>
        </div>

        <div className="glow-image">
          <img src="/images/portfolio.png" alt="Glowing Visual" />
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
