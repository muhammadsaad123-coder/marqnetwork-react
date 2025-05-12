import React from "react";
import './AboutSection.css'


const AboutSection = () => {
    return(
        <section className="about">
            <div className="about__image">
                <img src="/images/about.png" alt="about" />
            </div>

            <div className="about__content">
                <span className="about__tag">• About Landin</span>
                <h2 className="about__headline">
          Building Stronger Brands<br />
          <span>Creating Impressions!</span>
        </h2>
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
    )
};

export default AboutSection;