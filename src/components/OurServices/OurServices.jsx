import React from "react";
import "./OurServices.css";
import { motion } from "framer-motion";

const services = [
  {
    title: "Full Website Sprint",
    desc: "By streamlining the process and focusing on key milestones, we ensure your website is ready to go live quickly, without sacrificing quality.",
    icon: "/images/sprint.png",
    price: "$2500 / Project",
    duration: "2 – 3 Week",
    features: ["Design + Framer Development", "Interactive Elements"],
    endIcon: "/images/abouticon.png"
  },
  {
    title: "Landing Page Blitz",
    desc: "Quickly deliver a stunning landing page with interactive UI and fast loading built in Framer and React stack.",
    icon: "/images/package.png",
    price: "$1200 / Page",
    duration: "1 Week",
    features: ["UI/UX Design", "Fast Deployment"],
    endIcon: "/images/abouticon.png"
  },
  {
    title: "E-Commerce Build",
    desc: "From product listings to checkout, we design and develop high-performance storefronts with engaging UI.",
    icon: "/images/stack.png",
    price: "$5000+ / Store",
    duration: "3 – 5 Week",
    features: ["Shop Integration", "Optimized UI/UX"],
    endIcon: "/images/abouticon.png"
  }
];

const OurServices = () => {
  return (
    <section className="ourservices">
      {/* Left side: Static Image */}
      <div className="ourservices__left">
        <img src="/images/ourservices.png" alt="Our Services" />
      </div>

      {/* Right side: Heading + Cards */}
      <div className="ourservices__right">
        <span className="ourservices__tag">• Our Services</span>
        <motion.h2
          className="ourservices__headline"
          initial={{ x: -20, opacity: 0.6, filter: "blur(4px)" }}
          whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Build Fast With <br />
          <span>Purposeful Packages</span>
        </motion.h2>

        <p className="ourservices__description">
          Explore curated service packages that blend design, technology, and execution into efficient delivery cycles.
        </p>

        <div className="ourservices__cards">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-card__top">
                <div className="service-card__icon">
                  <img src={service.icon} alt="icon" />
                </div>
                <span className="service-card__badge">Development</span>
              </div>

              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.desc}</p>

              <div className="service-card__meta">
                <span className="service-card__pill">{service.price}</span>
                <span className="service-card__pill">{service.duration}</span>
              </div>

              <ul className="service-card__features">
                {service.features.map((feature, i) => (
                  <li key={i}>
                    <img src="/images/abouticon.png" alt="check" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
