// src/components/LogoSlider.js
import React from "react";
import { motion } from "framer-motion";
import "./LogoSlider.css";

const logos = [
  "/images/logo1.png",
  "/images/logo2.png",
  "/images/logo3.png",
];

const LogoSlider = () => {
  // Duplicate the logos to create infinite loop effect
  const repeatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="logo-slider">
      <motion.div
        className="logo-track"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {repeatedLogos.map((logo, index) => (
          <div className="logo-item" key={index}>
            <img src={logo} alt={`logo-${index}`} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoSlider;
