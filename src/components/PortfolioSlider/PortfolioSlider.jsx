import React from "react";
import { motion } from "framer-motion";
import "./PortfolioSlider.css";

const portfolioData = [
  {
    id: 1,
    image: "/images/watch.png",
    title: "Way Fields",
    year: "2024",
    categories: ["E-Commerce", "Portfolio"],
    progress: 90,
  },
  {
    id: 2,
    image: "/images/cap.png",
    title: "Revue Studio",
    year: "2025",
    categories: ["Business", "Agency"],
    progress: 75,
  },
  {
    id: 3,
    image: "/images/spray.png",
    title: "Wave Snap",
    year: "2024",
    categories: ["Store", "Landing Page"],
    progress: 65,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const PortfolioSlider = () => {
  return (
    <section className="portfolio-slider">
      {portfolioData.map((item) => (
        <motion.div
          key={item.id}
          className="portfolio-slide"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
          <div className="portfolio-card">
            <img src={item.image} alt={item.title} className="portfolio-img" />
            <div className="portfolio-content">
              <div className="portfolio-header">
                <h2>{item.title}</h2>
                {/* <span>{item.year}</span> */}
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${item.progress}%` }}
                />
              </div>
              <div className="portfolio-tags">
                {item.categories.map((cat, idx) => (
                  <span key={idx} className="tag">
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default PortfolioSlider;
