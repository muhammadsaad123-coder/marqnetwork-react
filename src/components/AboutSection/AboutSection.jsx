import React from "react";
import './AboutSection.css'
import { motion } from "framer-motion";



const AboutSection = () => {
    return(

        <div className="container">
        <section className="about">
            <div className="about__image">
                <img src="/images/about.png" alt="about" />
            </div>

            <div className="about__content">
                <span className="about__tag">• About MarQ</span>
                <motion.h2 
                className="about__headline"
                   initial={{ x: -20, opacity: 0.6, filter: "blur(4px)" }}
  whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
  transition={{ duration: 1.2, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.5 }}>
          Building Stronger Brands<br />
          <span>Creating  Lasting Impact.</span>
        </motion.h2>
        <p className="about__description">
         “On-demand strategy, design, and tech—engineered to elevate<br />
          without the agency bloat.”
        </p>

        <div className="about__description-wrapper">
  <img src="/images/abouticon.png" alt="icon" className="about__icon" />
  <p className="about__description">Helped clients jump from $0 → $750 K + in revenue within 12 months</p>
</div>
<div className="about__description-wrapper">
  <img src="/images/abouticon.png" alt="icon" className="about__icon" />
  <p className="about__description">Delivered a 52 % lift in new-customer growth across recent launches</p>
</div>

        <div className="about__actions">

            <button  className="about__button">Meet MarQ Networks</button>

            <div className="about__rating">
                <span className="stars">★★★★★</span>
                <span className="reviews">Rated 200 + brands & agencies worldwide</span>
              
            </div>

        </div>



            </div>

            
        </section>
        </div>
    )
};

export default AboutSection;