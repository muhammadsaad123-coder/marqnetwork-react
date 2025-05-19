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
        The Trusted Rise Partner <br />
          <span>For Startups And Agencies</span>
        </motion.h2>

        <p className="launch__description">
        Get your site live in no time! With professional setup and <br />
        expert support in an easy way.
        </p>

        <div className="launch__actions">
          <button className="launch__button">View About Landin</button>
        </div>

        <ImageSlider/>

        
      </div>
    </section>
  );
};

export default LaunchSection;
