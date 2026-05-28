import React from 'react';
import { Link } from 'react-router-dom';
import home from '../assets/home.jpg';
import egypt from '../assets/egypt.jpg';
import istanbul from '../assets/istanbul.jpg';
import paris from '../assets/paris.jpg';

const Home = () => {
  return (
    <div>
      <div className="home" style={{ backgroundImage: `url(${home})` }}>
        <div className="homeText">
          
        
          <Link to="/destinations" className="btn btn-light mt-3">Explore Now</Link>
        </div>
      </div>

      <div className="container cardsSection">
        <div className="row text-center">
          <div className="col-md-4">
            <img src={egypt} className="destinationImg" alt="Egypt" />
            <h3>Egypt</h3>
            <p>Pyramids, history, and the Nile River.</p>
            <button className="btn btn-primary">Choose Egypt</button>
          </div>

          <div className="col-md-4">
            <img src={istanbul} className="destinationImg" alt="Istanbul" />
            <h3>Istanbul</h3>
            <p>Mosques, food, and beautiful views.</p>
            <button className="btn btn-primary">Choose Istanbul</button>
          </div>

          <div className="col-md-4">
            <img src={paris} className="destinationImg" alt="Paris" />
            <h3>Paris</h3>
            <p>Eiffel Tower, cafes, and city lights.</p>
            <button className="btn btn-primary">Choose Paris</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;