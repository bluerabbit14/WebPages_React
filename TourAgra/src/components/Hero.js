import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Experience the Magic of Agra</h1>
        <p className="hero-subtitle">
          Discover the timeless beauty of the Taj Mahal and beyond with our curated local tours and experiences.
        </p>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for tours, activities, or landmarks..."
            className="search-input"
          />
          <button className="search-button">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}

