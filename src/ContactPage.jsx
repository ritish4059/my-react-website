import React, { useState } from 'react';
import './ContactPage.css'; // Import CSS file for styling

function ContactPage() {
  // State to handle form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message Sent! Thank you for contacting us.');
    // You can later add logic to send form data to your server or API here
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>

      <section className="contact-info">
        <h2>Get in Touch</h2>
        <p>Email: ritish76652@gmil.com</p>
        <p>Phone: +91 7607576652</p>
      </section>

      <section className="social-media">
        <h2>Follow Us on</h2>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </section>

      <section className="contact-form">
        <h2>Send Us a Message</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default ContactPage;
