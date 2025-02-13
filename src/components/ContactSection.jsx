import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { FaUser, FaEnvelope, FaPhone, FaPaperPlane } from 'react-icons/fa';
import { gsap } from 'gsap';
import '../pages/LandingPage.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  useEffect(() => {
    gsap.fromTo(
      '.contact-card',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.2, ease: 'power2.out' }
    );
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}. Your message has been submitted.`);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className="contact-section">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-intro">
        Have a project idea or just want to chat? Drop me a message, and I’ll get back to you soon!
      </p>

      <div className="contact-container">
        {/* Contact Info Cards */}
        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h4>Email</h4>
          <p><a href="mailto:timmybad06@gmail.com">timmybad06@gmail.com</a></p>
        </div>
        <div className="contact-card">
          <FaPhone className="contact-icon" />
          <h4>Phone</h4>
          <p><a href="tel:+123456789">+1 (234) 567-890</a></p>
        </div>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <FaUser className="input-icon" />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </div>
        <div className="form-group">
          <FaEnvelope className="input-icon" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
        </div>
        <div className="form-group">
          <FaPhone className="input-icon" />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone (Optional)"
          />
        </div>
        <div className="form-group">
          <FaPaperPlane className="input-icon" />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>

      {/* Map Section */}
      <div className="map-container">
        <MapContainer center={[49.2845, -123.1216]} zoom={15} scrollWheelZoom={false} className="leaflet-map">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[49.2845, -123.1216]}>
            <Popup>15987 111 Ave, Vancouver</Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
};

export default ContactSection;






