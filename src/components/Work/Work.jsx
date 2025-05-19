// src/components/Work.js
import React from "react";
import "./Work.css";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Kickoff",
    subtitle: "Stage 1",
    desc: "The kickoff stage is where everything begins. We align with you to understand your goals, vision, and expectations. Through in-depth discussions and thorough research.",
    icon: "/images/Kickoff.png",
    actions: ["Comprehensive Consultation", "Project Roadmap"]
  },
  {
    title: "Execution",
    subtitle: "Stage 2",
    desc: "Execution is where the plan takes form. We translate ideas into reality through agile sprints, collaborative development, and constant optimization.",
    icon: "/images/Execution.png",
    actions: ["Agile Execution", "Live Collaboration"]
  },
  {
    title: "Handoff",
    subtitle: "Stage 3",
    desc: "With development complete, we transition the finished product to you with documentation and ongoing support to ensure a seamless handoff.",
    icon: "/images/Handoff.png",
    actions: ["Ongoing Support", "Launch Readiness"]
  }
];

const Work = () => {
  return (
    <section className="work">
      <div className="work__left">
        <span className="work__tag">• How We Work?</span>
        <motion.h2
          className="work__headline"
          initial={{ x: -20, opacity: 0.6, filter: "blur(4px)" }}
          whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          We Simplify The Journey <br />
          <span>From Design To Launch</span>
        </motion.h2>
        <p className="work__description">
          We make it easy to bring your ideas to life, guiding you from
          concept to a fully launched product.
        </p>

        <div className="work__steps">
          {steps.map((step, index) => (
            <div className="step-card" key={index}>
              <div className="step-card__top">
                <div className="step-card__icon">
                  <img src={step.icon} alt="icon" />
                </div>
                <span className="step-card__badge">{step.subtitle}</span>
              </div>
              <h3 className="step-card__title">{step.title}</h3>
              <p className="step-card__desc">{step.desc}</p>
              <div className="step-card__actions">
                {step.actions.map((action, i) => (
                  <span key={i} className="step-card__action">
                    {action}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="work__right">
        <img src="/images/work.png" alt="work" />
      </div>
    </section>
  );
};

export default Work;
