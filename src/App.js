import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import About from './pages/About';
import SignIn from './pages/SignIn';


function App() {
  return (
    <div>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SignIn />} />
          
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;