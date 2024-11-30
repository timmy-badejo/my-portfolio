
import React from 'react';


const ContactPage = () => {
  return (
    <div className="contact-page">
      <h2>Contact Me</h2>
      
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
            </div>
            <div>
            
              <label>Message</label>
              <textarea
                name="message"
                value={values.message}
                onChange={handleChange}
              />
            </div>

          </form>
        )}
      
    </div>
  );
};

export default ContactPage;
