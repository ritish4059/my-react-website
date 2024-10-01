import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './HomePage.css'; // Link to your CSS

function HomePage() {
  const navigate = useNavigate(); // Create a navigate function
  const [displayText, setDisplayText] = useState(''); // State to store the text that is progressively displayed
  const fullText = 'Welcome to My Tech Brands Portal...'; // The full text to be typed out

  // Typing effect logic
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(prev => prev + fullText[index]);
        index++;
      } else {
        clearInterval(interval); // Stop the typing effect once the text is fully displayed
      }
    }, 100); // Adjust the speed of typing here (100ms per character)

    return () => clearInterval(interval); // Cleanup the interval when component unmounts
  }, [fullText]); // Added fullText as a dependency to avoid closure issues

  // Image carousel logic
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: '/MicroShoft.jpg', alt: 'Microsoft' },
    { src: '/Apple.jpg', alt: 'Apple' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [images.length]);

  return (
    <div className="home">
      <h1>{displayText}</h1>
      <p>Explore the latest technology brands, their products, and innovations.</p>

      <h2>Featured Tech Brands</h2>
      <div className="carousel">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-image ${currentIndex === index ? 'active' : ''}`}
          >
            <img src={image.src} alt={image.alt} className="brand-logo" />
            <h3>{image.alt}</h3>
            <p>
              {image.alt} is a leading technology company known for its innovative products.
            </p>
          </div>
        ))}
      </div>

      <h2>Latest Releases</h2>
      <ul>
        <li>Product 1: Description...</li>
        <li>Product 2: Description...</li>
      </ul>

      <button onClick={() => navigate('/tech-brands')}>
        Explore Tech Brands
      </button>
    </div>
  );
}

export default HomePage;
