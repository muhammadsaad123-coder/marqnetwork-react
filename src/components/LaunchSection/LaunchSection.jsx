import React from 'react';
import './LaunchSection.css'; // new CSS file
import { motion } from "framer-motion";

import ImageSlider from '../ImageSlider/ImageSlider';

const LaunchSection = () => {
  return (
    <section className="launch">
      <div className="launch__content">
        <span className="launch__tag">• Launch Your Site</span>

        <motion.h2 className="launch__headline"
          initial={{ x: -20, opacity: 0.6, filter: "blur(4px)" }}
  whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
  transition={{ duration: 1.2, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.5 }}>
       Trusted Launch Partner <br />
          <span>For Startups And Agencies</span>
        </motion.h2>

        <p className="launch__description">
       We fast-track your digital launch—from strategy and design to code and growth—so you’re live in weeks, not months.
        </p>

        <div className="launch__actions">
          <button className="launch__button">Book a 15-min Launch Call</button>
        </div>

        <ImageSlider/>

        
      </div>
    </section>
  );
};

export default LaunchSection;
