import React from 'react';

import './Gallery.css'



const cards = [
  { id: 1, image: '/images/watch.png ', title: 'Way Fields', year: '2024' },
  { id: 2, image: '/images/cap.png', title: 'Raven Studio', year: '2025' },
  { id: 3, image: '/images/spray.png', title: 'White Stag', year: '2024' },
  { id: 4, image: '/images/watch.png ', title: 'Way Fields', year: '2024' }
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      {cards.map(card => (
        <div className="gallery-card" key={card.id}>
          <img src={card.image} alt={card.title} className="card-image" />
          <div className="card-footer">
            <span className="card-title">{card.title}</span>
            <span className="card-year">{card.year}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
