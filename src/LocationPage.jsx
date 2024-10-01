// src/LocationPage.jsx
import React from 'react';
import './LocationPage.css'; // Optional if you want to style the page

function LocationPage() {
  return (
    <div className="location-page">
      <h1>Our Location</h1>
      <p>We are located at: Santosh Bhavan, Nala Sopara(E), Maharashtra 401208, India</p>
      
      {/* Google Maps Embed */}
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15050.990138181161!2d72.82999573652808!3d19.423311296281902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a92328d7ac6f%3A0x338e4d2dd4a9f401!2sSantosh%20Bhavan%2C%20Nala%20Sopara%2C%20Maharashtra%20401208!5e0!3m2!1sen!2sin!4v1727622036168!5m2!1sen!2sin"
          width="100%" // Make the map responsive
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default LocationPage;
