import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; 
import './App.css'; 
import TechBrandsPage from './TechBrandsPage'; 
import HomePage from './HomePage'; 
import LocationPage from './LocationPage'; 
import AboutPage from './AboutPage'; 
import ContactPage from './ContactPage';
import ApplePage from './ApplePage';  // Import the Apple page component
import MicrosoftPage from './MicrosoftPage';  // Import the Microsoft page component
import AmazonPage from './AmazonPage';  // Import the Amazon page component

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Router>
      <div>
        <nav>
          <div className="container">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/tech-brands">Tech Brands</Link></li>
              <li><Link to="/location">Location</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <button className="login-btn" onClick={openModal}>Login</button>
        </nav>

        {/* Modal for Login */}
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>&times;</span>
              <h2>Login</h2>
              <form>
                <label>
                  Username:
                  <input type="text" name="username" />
                </label>
                <label>
                  Password:
                  <input type="password" name="password" />
                </label>
                <button type="submit">Submit</button>
              </form>

              {/* Google Sign-in button */}
              <div className="google-signin">
                <button className="google-btn">
                <img src="/logo.png" alt="Google Logo" className="google-logo" />
                  Sign in with Google
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tech-brands" element={<TechBrandsPage />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Brand Pages */}
          <Route path="/apple" element={<ApplePage />} />  {/* Route for Apple page */}
          <Route path="/microsoft" element={<MicrosoftPage />} />  {/* Route for Microsoft page */}
          <Route path="/amazon" element={<AmazonPage />} />  {/* Route for Amazon page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
