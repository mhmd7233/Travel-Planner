import React from 'react';
import about from '../assets/about.jpg';

const About = () => {
  return (
    <div className="aboutPage" style={{ backgroundImage: `url(${about})` }}>
      <div className="aboutBox">
        <h1>About Our Website</h1>

        <p>
          Travel Planner is a website that helps users travel around the world with one click.
        </p>

        <p>
          Our website provides information about popular destinations, travel ideas,
          and useful guidance for users who want to enjoy vacations or future journeys.
        </p>

        <p>
          The main purpose of this website is to make travel planning simple, fast,
          and enjoyable for everyone.
        </p>
      </div>
    </div>
  );
};

export default About;