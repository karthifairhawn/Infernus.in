import React from 'react';
import '../styles/card.css';

function ProductCard({ subdomain, description, url, image }) {
  return (
    <div className="product-card">
      <img src={image}  alt={subdomain} className="product-image"/>
      <div className="product-content">
        <h2>{subdomain}</h2>
        <p>{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          Visit Site
        </a>
      </div>
    </div>
  );
}

export default ProductCard;