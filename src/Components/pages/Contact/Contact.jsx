import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import "../Contact/Contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Define el endpoint de Formspree
    const endpoint = 'https://formspree.io/f/mkndyvyg';
  
    // Envía los datos del formulario al endpoint de Formspree
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (response.ok) {
        console.log('Email sent successfully');
        setSubmitted(true);
      } else {
        console.error('Error sending email');
      }
    })
    .catch(error => {
      console.error('Error sending email:', error);
    });
  };

  return (
    <div className="contact-container">
      <h2>
        Contact <strong>Me</strong>
      </h2>
      {submitted ? (
        <p className="submitted-message">Form has been submitted!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="leave me a message .."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Submit
            <FaCheck />
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
