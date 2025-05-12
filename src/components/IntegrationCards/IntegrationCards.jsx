import React from 'react';
import './IntegrationCards.css';

const cards = [
  {
    id: 1,
    icon: '/images/zapier.png',
    name: 'Zapier',
    label: 'Automation',
    description: 'Zapier connects your favorite apps and automates your workflows.',
    pro: true
  },
  {
    id: 2,
    icon: '/images/slack.png',
    name: 'Slack',
    label: 'Communication',
    description: 'Slack is our go-to platform for real-time communication and collaboration.',
    pro: false
  },
  {
    id: 3,
    icon: '/images/dropbox.png',
    name: 'Dropbox',
    label: 'Cloud Storage',
    description: 'Dropbox provides secure cloud storage, enabling us to share files and collaborate.',
    pro: false
  },
  {
    id: 4,
    icon: '/images/stripe.png',
    name: 'Stripe',
    label: 'Payments',
    description: 'Stripe is our payment processing tool, providing a secure way to transactions.',
    pro: false
  },
  {
    id: 5,
    icon: '/images/mailchimp.png',
    name: 'Mailchimp',
    label: 'Email Marketing',
    description: 'Mailchimp helps us craft effective email marketing campaigns to nurture clients.',
    pro: true
  },
  {
    id: 6,
    icon: '/images/github.png',
    name: 'Github',
    label: 'Version Control',
    description: 'GitHub is our version control system, enabling smooth collaboration.',
    pro: false
  }
];

const IntegrationCards = () => {
  return (
    <section className="integration__section">
      <div className="integration__grid">
        {cards.map(({ id, icon, name, label, description, pro }) => (
          <div key={id} className="integration__card">
            {/* Top row: icon and arrow */}
            <div className="card__top">
              <img src={icon} alt={name} className="card__icon" />
              <span className="card__arrow">↗</span>
            </div>

            {/* Title + PRO tag */}
            <div className="card__title">
              <h4>{name}</h4>
              {pro && <span className="pro__badge">PRO</span>}
            </div>

            {/* Subtitle */}
            <p className="card__label">{label}</p>

            {/* Description */}
            <p className="card__desc">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IntegrationCards;
