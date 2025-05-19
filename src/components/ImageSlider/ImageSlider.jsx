import React from "react";
import { motion } from "framer-motion";
import "./ImageSlider.css";

const images = [
  "/images/slider1.png",
  "/images/slider2.png",
  "/images/slider3.png",
  "/images/slider4.png",
  "/images/slider5.png",
  "/images/slider6.png"
];

const ImageSlider = () => {
  return (
    <section className="slider-section">
      {/* Row 1 — scroll left to right */}
      <motion.div
        className="slider-row"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {[...images, ...images].map((img, index) => (
          <div className="slider-image" key={`top-${index}`}>
            <img src={img} alt={`slide-${index}`} />
          </div>
        ))}
      </motion.div>

      {/* Row 2 — scroll right to left */}
      <motion.div
        className="slider-row"
        animate={{ x: ["-100%", "0%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {[...images, ...images].map((img, index) => (
          <div className="slider-image" key={`bottom-${index}`}>
            <img src={img} alt={`slide-${index}`} />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default ImageSlider;
