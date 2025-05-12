import React from "react";
import './OurServices.css';

const OurServices = () => {
    return (
        <section className="ourservices">
            <div className="ourservices__content">
                <span className="ourservices__tag">• Our Services</span>
                <h2 className="ourservices__headline">
                Get High-Quality<br />
                    <span>Clear Services Remotely</span>
                </h2>
                <p className="ourservices__description">
                Discover our range of services designed to elevate your brand<br />
                and propel your business to next level.
                </p>
            </div>

            <div className="ourservices__image">
                <img src="/images/ourservices.png" alt="Our Services" />
            </div>
        </section>
    );
};

export default OurServices;
