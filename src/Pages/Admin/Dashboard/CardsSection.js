import React from 'react';
import './CardsSection.scss';

const CardsSection = () => {
  return (
    <div className="cards-section">
      <div className="card">
        <h3>Shipped Courses</h3>
        <p>200</p>
      </div>
      <div className="card1">
        <h3>Pending Courses</h3>
        <p>50</p>
      </div>
      <div className="card2">
        <h3>New Courses</h3>
        <p>25</p>
      </div>
    </div>
  );
};

export default CardsSection;
