import React from 'react';
import './JoinUsNow.css'; // renamed CSS file
import { motion } from "framer-motion";

const JoinUsNow = () => {
  return (
    <section className="join">
      {/* Text Content */}
      <div className="join__content">
        <span className="join__tag">• Join Us Now</span>

        <motion.h2 className="join__headline"
          initial={{ x: -20, opacity: 0.6, filter: "blur(4px)" }}
  whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
  transition={{ duration: 1.2, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.5 }}>
        Each Project we Undertake<br />
          <span>is a Unique Opportunity.</span>
        </motion.h2>

        <p className="join__description">
        Ready to take the next step? Join us now and start transforming your <br />
        vision into reality with expert support.
        </p>

        <div className="join__actions">
          <button className="join__button">Book an Appointment</button>
        </div>
      </div>
    </section>
  );
};

export default JoinUsNow;
