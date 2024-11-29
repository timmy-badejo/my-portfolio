// ContactPage.jsx (Example for form)
import React from 'react';
import { Formik } from 'formik';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h2>Contact Me</h2>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        onSubmit={values => {
          console.log(values);
        }}
      >
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
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ContactPage;
