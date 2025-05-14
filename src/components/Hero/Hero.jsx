import React from "react";
import './Hero.css';
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <motion.h1  initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
            Premium <span>Agency</span><br />
            for <span>Creatives.</span>
          </motion.h1>

          <motion.p   initial={{ x: -20, opacity: 0.6, filter: "blur(4px)" }}
      animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 1.2, ease: "easeOut" }}>
            We specialize in crafting unique digital presence<br />
            that help businesses grow and stand out in their industries.
          </motion.p >

          <div className="hero__buttons">
            <button className="primary-btn">Connect With Us</button>
            <button className="secondary-btn">What is Landin?</button>
          </div>
        </div>

        <div className="hero__image">
          <img src="images/herobg.svg" alt="Hero Background" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
