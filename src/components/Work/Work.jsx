import React from "react";
import './Work.css';
import { motion } from "framer-motion";

const Work = () => {
    return(

        <div className="container">
        <section className="work">
            <div className="work__content">
                <span className="work__tag">• How We Work?</span>
                <motion.h2 className="work__headline"
                  initial={{ x: -20, opacity: 0.6, filter: "blur(4px)" }}
  whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
  transition={{ duration: 1.2, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.5 }}>
                    We Simplify The Journey <br />
                    <span>From Design To Launch</span>
                </motion.h2>
                <p className="work__description">
                We make it easy to bring your ideas to life, guiding you from<br />
                concept to a fully launched product.
                </p>

               
            </div>

            <div className="work__image">
                <img src="/images/work.png" alt="work" />
            </div>
        </section>
        </div>
    );
};

export default Work;
