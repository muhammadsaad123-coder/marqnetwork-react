import React, { useState } from 'react';
import './FAQSection.css';

const faqs = [
  {
    question: "What will my investment be—and what’s included?",
    answer: "Every build is quoted up-front, flat-fee. No hourly surprises. Packages start at $4.5K for Brand + UX and $7.5K for Full-Stack Dev, covering research, strategy, design, code, QA, launch, and 30-day support."
  },
  {
    question: "How fast can we launch?",
    answer: "MVP websites: 15 business days. Full platforms: 4–8 weeks (depending on integrations). Weekly sprints, same-day feedback loops, and a dedicated PM keep momentum high."
  },
  {
    question: "What kind of ROI have past clients seen?",
    answer: "GA Tax Lien Bootcamp → 400 registrants / webinar & $3.9 M in program sales. Customex e-commerce → 47% rise in new customers in 60 days. Bond Interiors → 30% lead-to-quote lift after site + funnel overhaul."
  },
  {
    question: "How will we communicate across time. ",
    answer: "Your core team works 9 AM–5 PM EST for real-time Slack & Zoom. A second offshore pod handles overnight production, so progress continues 24/7 without you staying up late."
  },
  {
    question: "Who owns the code, designs, and data?",
    answer: "You do—100%. We transfer source files (Figma, Webflow, Git repo), admin credentials, and a plain-English license letter at hand-off. No lock-ins, ever."
  },
  {
    question: "What if I’m not happy with the final product?",
    answer: "Our 14-day money-back guarantee covers scope alignment and quality benchmarks. Missed expectations? You get a full refund—no legal gymnastics. We’ve issued refunds on <3% of projects since 2016."
  }
];


const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="faq__section">
      {/* Left Content */}
      <div className="faq__intro">
        <span className="faq__tag">• How We Work?</span>
        <h2>Frequently<br /><span>Asked Questions</span></h2>
        <p>
          Have questions? Our FAQ section has you covered with quick answers
          to the most common inquiries.
        </p>
      </div>

      {/* Right Content - Accordion */}
      <div className="faq__list">
       {faqs.map(({ question, answer }, index) => (
  <div
    key={index}
    className={`faq__item ${activeIndex === index ? 'open' : ''}`}
    onClick={() => toggleFAQ(index)}
  >
    <div className="faq__question">
      <span>{question}</span>
      <span className="faq__icon">{activeIndex === index ? '−' : '+'}</span>
    </div>
    {activeIndex === index && (
      <div className="faq__answer">
        {answer}
      </div>
    )}
  </div>
))}

      </div>
    </section>
  );
};

export default FAQSection;
