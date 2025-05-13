import React from "react";
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">

      <img src='images/animation.gif' alt="Animated Background" className="hero__background-svg" />
 


      <div className="hero__content">
        <h1>
          Premium <span>Agency</span><br />
          for <span>Creatives.</span>
        </h1>

        <p>
          We specialize in crafting unique digital presence<br />
          that help businesses grow and stand out in their industries.
        </p>

        <div className="hero__buttons">
          <button className="primary-btn">Connect With Us</button>
          <button className="secondary-btn">What is Landin?</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
