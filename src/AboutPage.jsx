import React from 'react';
import './AboutPage.css'; // Import the CSS file

function AboutPage() {
  return (
    <div className="about-page">
      <h1>About Our Website</h1>

      <section className="purpose">
        <h2>Purpose</h2>
        <p>
          Our website's primary goal is to enhance your knowledge of current tech brands, focusing on the latest innovations, products, and industry trends. We aim to keep you updated with the most recent and accurate information about top tech companies.
        </p>
      </section>

      <section className="features">
        <h2>Key Features</h2>
        <ul>
          <li>Simple to use</li>
          <li>Direct access to tech brand information</li>
          <li>Most accurate and up-to-date content</li>
        </ul>
      </section>

      <section className="technologies">
        <h2>Technologies We Use</h2> {/* Corrected the closing tag here */}
        <p>
          Our website is built using modern web technologies such as React.js for the user interface, along with CSS for styling, and integrated APIs for data and map visualizations.
        </p>
      </section>

      <section className="future-plans">
        <h2>Future Plans</h2>
        <p>
          We are constantly working to improve this platform. Our future plans include adding more features, keeping you informed about all aspects of the tech world, and making the website even more user-friendly.
        </p>
      </section>
    </div>
  );
}

export default AboutPage;
