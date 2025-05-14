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
                <span className="about__tag">• About Landin</span>
                <motion.h2 
                className="about__headline"
                   initial={{ x: -20, opacity: 0.6, filter: "blur(4px)" }}
  whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
  transition={{ duration: 1.2, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.5 }}>
          Building Stronger Brands<br />
          <span>Creating Impressions!</span>
        </motion.h2>
        <p className="about__description">
          Delivering high-quality, on-demand designs with precision.<br />
          Elevate your brand effortlessly, one snap at a time.
        </p>

        <div className="about__actions">

            <button  className="about__button">View About Landin</button>

            <div className="about__rating">
                <span className="stars">★★★★★</span>
                <span className="reviews">200+ Agencies Rated</span>
              
            </div>

        </div>



            </div>

            
        </section>
        </div>
    )
};

export default AboutSection;