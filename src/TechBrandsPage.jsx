import React from 'react';
import { Link } from 'react-router-dom';
import './TechBrandsPage.css'; // Link to your CSS file

function TechBrandsPage() {
  const brands = [
    { name: 'Apple', logo: '/AppleLogo.png', description: 'The most valuable company globally, revolutionizing tech with innovation.', path: '/apple' },
    { name: 'Microsoft', logo: '/MicrosoftLogo.png', description: 'A leader in software, cloud services, and AI-driven solutions.', path: '/microsoft' },
    { name: 'Amazon', logo: '/AmazonLogo.png', description: 'Dominating e-commerce and cloud computing with AWS.', path: '/amazon' },
    { name: 'Google', logo: '/GoogleLogo.png', description: 'The internet giant, known for search engines and AI advancements.', path: '/google' },
    { name: 'Samsung', logo: '/SamsungLogo.png', description: 'A tech giant specializing in smartphones and electronics.', path: '/samsung' },
    { name: 'Tesla', logo: '/TeslaLogo.png', description: 'A pioneer in electric vehicles and clean energy.', path: '/tesla' },
    { name: 'Facebook', logo: '/FacebookLogo.png', description: 'The social media leader, now exploring the metaverse.', path: '/facebook' },
    { name: 'Alibaba', logo: '/AlibabaLogo.png', description: 'The leading e-commerce company in China and globally.', path: '/alibaba' },
    { name: 'Tencent', logo: '/TencentLogo.png', description: 'A global leader in gaming and internet services.', path: '/tencent' },
    { name: 'Visa', logo: '/VisaLogo.png', description: 'A global leader in digital payments and financial technology.', path: '/visa' }
  ];

  return (
    <div className="tech-brands-page">
      <h1>Top 10 Most Profitable Brands of 2024</h1>
      <div className="brands-list">
        {brands.map((brand, index) => (
          <div key={index} className="brand-item">
            <Link to={brand.path}>
              <img src={brand.logo} alt={brand.name} className="brand-logo animated-logo" />
              <h3 className="animated-text">{index + 1}. {brand.name}</h3>
              <p>{brand.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechBrandsPage;
