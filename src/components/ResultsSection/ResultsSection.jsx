import React from 'react';
import './ResultsSection.css';
import { motion } from "framer-motion";

import InfiniteCardsSlider from '../InfiniteCardsSlider/InfiniteCardsSlider';


const ResultsSection = () => {
  return (
    <section className="results">
      

      {/* Right Side - Text Content */}
      <div className="results__content">
        <span className="results__tag">• Results</span>

        <motion.h2 className="results__headline"
          initial={{ x: -20, opacity: 0.6, filter: "blur(4px)" }}
  whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
  transition={{ duration: 1.2, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.5 }}>
          Delivering TangibleResults<br />
          <span>That Propel Your Success</span>
        </motion.h2>

        <p className="results__description">
        At the core of everything we do lies a commitment to delivering <br />
        measurable outcomes that drive your success.
        </p>

        <div className="results__actions">
          <button className="results__button">Book a 15-min call</button>
        </div>


        <InfiniteCardsSlider/>

     
      </div>
    </section>
  );
};

export default ResultsSection;
