import React from "react";
import './OurServices.css';
import { motion } from "framer-motion";

const OurServices = () => {
    return (
        <div className="container">
        <section className="ourservices">
            <div className="ourservices__content">
                <span className="ourservices__tag">• Our Services</span>
                <motion.h2 className="ourservices__headline"
                  initial={{ x: -20, opacity: 0.6, filter: "blur(4px)" }}
  whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
  transition={{ duration: 1.2, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.5 }}>
                Get High-Quality<br />
                    <span>Clear Services Remotely</span>
                </motion.h2>
                <p className="ourservices__description">
                Discover our range of services designed to elevate your brand<br />
                and propel your business to next level.
                </p>
            </div>

            <div className="ourservices__image">
                <img src="/images/ourservices.png" alt="Our Services" />
            </div>
        </section>
        </div>
    );
};

export default OurServices;
