import React from 'react';
import './BlogCard.css';

const BlogCard = ({ imageUrl, title, subtitle, description, alt }) => {
  return (
    <div className={`blog-card ${alt ? 'alt' : ''}`}>
      <div className="meta">
        <div
          className="photo"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
      </div>
      <div className="description">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
