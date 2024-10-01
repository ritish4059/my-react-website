import React from 'react';
import './ApplePage.css'; // Link to your CSS file

const ApplePage = () => {
  return (
    <div className="apple-page">
      <h1>Apple Inc.</h1>
      <img src="/applepark.png" alt="Apple Park" className="apple-image" />

      <h2>Overview</h2>
      <p>
        Apple Inc. is a leading American multinational technology company headquartered in Cupertino, California. Known for its innovative products, Apple has had a profound impact on the technology industry and the way we interact with technology. 
      </p>
      
      <h2>Key Products</h2>
      <ul>
        <li><strong>iPhone:</strong> Revolutionized the smartphone industry.</li>
        <li><strong>iPad:</strong> Popularized the tablet computing market.</li>
        <li><strong>Mac:</strong> Renowned for its design and performance.</li>
        <li><strong>Apple Watch:</strong> Leading smartwatch with health tracking features.</li>
        <li><strong>AirPods:</strong> Wireless earbuds with high-quality sound.</li>
      </ul>

      <h2>Financial Performance</h2>
      <p>
        In 2022, Apple reported a staggering <strong>$394.3 billion</strong> in revenue, making it the top technology firm globally. As of 2023, it boasts a market capitalization of approximately <strong>$2.54 trillion</strong>. Apple was also the first company in history to reach a market cap of over <strong>$3 trillion</strong>.
      </p>

      <h2>History</h2>
      <p>
        Founded in 1976 as “Apple Computer Company” by visionaries <strong>Steve Jobs</strong>, <strong>Steve Wozniak</strong>, <strong>Ronald Wayne</strong>, and <strong>Mike Markkula</strong>, Apple has undergone significant transformations. Under the leadership of <strong>Tim Cook</strong>, who became CEO in 2011, Apple has continued to grow and innovate.
      </p>

      <h2>Milestones</h2>
      <ul>
        <li><strong>1976:</strong> Apple Computer, Inc. founded.</li>
        <li><strong>1984:</strong> Launch of the Macintosh, the first successful personal computer with a graphical user interface.</li>
        <li><strong>2001:</strong> Introduction of the iPod, which changed how people listen to music.</li>
        <li><strong>2007:</strong> Launch of the first iPhone.</li>
        <li><strong>2015:</strong> Introduction of the Apple Watch.</li>
      </ul>

      <h2>Corporate Social Responsibility</h2>
      <p>
        Apple is committed to sustainability and has initiatives aimed at reducing its environmental footprint. The company aims to become carbon neutral across its entire supply chain by 2030 and is investing heavily in renewable energy projects.
      </p>

      <h2>Conclusion</h2>
      <p>
        Apple Inc. remains a trailblazer in technology, consistently pushing the boundaries of innovation. With a commitment to quality, design, and user experience, Apple continues to shape the future of technology and its impact on society.
      </p>

      <h2>Learn More</h2>
      <p>
        For more information about Apple Inc., visit their official website: <a href="https://www.apple.com" target="_blank" rel="noopener noreferrer">apple.com</a>.
      </p>
    </div>
  );
};

export default ApplePage;
