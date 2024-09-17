import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

function Cards({ title, imgSrc }) {
  return (
    <div className="card-container">
      <img src={imgSrc} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
      <Link to='/theme'>
        <button className="learn">
          <span className="button_top">Learn More</span>
        </button>
      </Link>
    </div>
  );
}

export default Cards;