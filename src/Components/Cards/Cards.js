import React from 'react';
import './Cards.scss';

const Card = ({ logo, heading, content }) => {
  return (
    <div className="cards">
      <img className="card-logo" src={logo} alt="Logo" />
      <h3 className="card-heading">{heading}</h3>
      <p className="card-content">{content}</p>
    </div>
  );
};

export default Card;
