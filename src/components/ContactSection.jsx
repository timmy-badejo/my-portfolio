// ContactSection.jsx
import React, { useState } from 'react';
import '../pages/LandingPage.css';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message from ${name} (${email}, ${phone}) has been submitted.`);
  };

  return (
    <section className="contact-section">
      <h2>Let's Connect!</h2>
      <div className="message">
        <p>
          I’m excited to hear from you! Whether you have a project idea, a collaboration opportunity, or just want to say hello, feel free to reach 
          out using the form above. I’m always eager to work on creative projects, solve design challenges, or bring your vision to life through 
          thoughtful design and development. Share a few details about your needs, and I’ll get back to you as soon as possible. Let’s create something amazing together!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label>Your Name:</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Your Name" 
            />
          </div>
          <div className="form-group">
            <label>Your Email:</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Your Email" 
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Your Phone Number:</label>
            <input 
              type="text" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
              placeholder="Your Phone Number" 
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Your Message:</label>
            <textarea 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              placeholder="Your Message" 
            />
          </div>
        </div>
      </form>

      <button type="submit" className="submit-btn">Submit</button>
    </section>
  );
};

export default ContactSection;


