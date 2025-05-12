import React, { useState } from 'react';
import './FAQSection.css';

const faqs = [
  {
    question: "What do I need to get started?",
    answer: "You just need basic computer knowledge and the project files to begin customization."
  },
  {
    question: "What kind of customization is available?",
    answer: "You can customize colors, fonts, layouts, and even component structures using modern tools."
  },
  {
    question: "How easy is it to edit for beginners?",
    answer: "It's beginner-friendly — everything is modular, well-commented, and built with simplicity in mind."
  },
  {
    question: "Let me know more about moneyback guarantee?",
    answer: "We offer a 100% money-back guarantee within the first 14 days if you're not satisfied."
  },
  {
    question: "Do I need to know how to code?",
    answer: "Nope! Most changes can be made visually or with simple tweaks. No advanced coding required."
  },
  {
    question: "What will I get after purchasing the template?",
    answer: "You’ll receive all source files, documentation, and access to future updates."
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
