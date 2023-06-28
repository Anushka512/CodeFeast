import React from 'react';

const TestimonialCard = ({ image, name, content, rating }) => {
  return (
    <div className="testimonial-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{content}</p>
      <div className="rating">{rating}</div>
    </div>
  );
};

export default TestimonialCard;
