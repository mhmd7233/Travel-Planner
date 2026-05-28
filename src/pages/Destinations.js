import React from 'react';
import destinations from '../assets/destinations.jpg';

const Destinations = () => {
  const places = [
    { name: 'Egypt', text: 'Pyramids and ancient history.' },
    { name: 'Istanbul', text: 'Culture, food, and shopping.' },
    { name: 'Paris', text: 'Eiffel Tower and city lights.' },
    { name: 'Dubai', text: 'Luxury hotels and malls.' },
    { name: 'London', text: 'Big Ben and famous streets.' },
    { name: 'Rome', text: 'Ancient places and food.' },
    { name: 'Tokyo', text: 'Technology and modern life.' },
    { name: 'New York', text: 'Skyscrapers and attractions.' },
    { name: 'Maldives', text: 'Beaches and relaxing resorts.' }
  ];

  return (
    <div className="destinationsPage" style={{ backgroundImage: `url(${destinations})` }}>
      <div className="container destinationContent">
        <h1>Destinations</h1>
        <p>Your next adventure begins here</p>
        <div className="line"></div>

        <div className="row mt-5">
          {places.map((place, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <h3>📍 {place.name}</h3>
              <p>{place.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;