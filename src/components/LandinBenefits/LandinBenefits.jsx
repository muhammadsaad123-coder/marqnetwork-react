import React from 'react';
import './LandinBenefits.css'; // Importing CSS for styling

const LandinBenefits = () => {
  return (
    <section className="benefits__section">
      {/* Label at top */}
      <div className="benefits__label">• Landin Benefits</div>

      {/* Main Heading */}
      <h1 className="benefits__heading">
        <span>We Just Don’t Design,</span> <span>We Build.</span>
      </h1>

      {/* Subheading */}
      <h2 className="benefits__subheading">
        If You Can Dream It, We Can Play It!
      </h2>

      {/* Feature Tags */}
      <div className="benefits__tags">
        {[
          'Enhanced UX', 'Boosted Conversions', 'Fast Loading',
          'SEO Optimized', 'Customizable', 'Scalable',
          'Increased Engagement', 'Expandable', 'Secure', 'User-Friendly'
        ].map((tag, index) => (
          <span key={index} className="benefit__tag">{tag}</span>
        ))}
      </div>

      {/* Call to Action Button */}
      <button className="benefits__cta">Contact Now</button>
    </section>
  );
};

export default LandinBenefits;
