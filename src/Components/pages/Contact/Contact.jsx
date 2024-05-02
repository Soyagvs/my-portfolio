import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { Resend } from "resend";
import "../Contact/Contact.css";

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
  
    // Envía el correo electrónico utilizando Resend
    const resend = new Resend('re_Duni3dRF_7KH2jbV98YKgMESPSXZjr3bq');
  
    resend.emails.send({
      from: formData.email, // Utiliza el correo electrónico del remitente como el remitente del correo electrónico
      to: 'soyagvs@gmail.com', // Cambia esto a la dirección de correo electrónico a la que quieres enviar el formulario
      subject: 'Nuevo mensaje de contacto',
      html: `
        <p>Nombre: ${formData.name}</p>
        <p>Correo electrónico: ${formData.email}</p>
        <p>Mensaje: ${formData.message}</p>
      `
    }).then((response) => {
      console.log('Email sent successfully:', response);
      setSubmitted(true); // Establece submitted en true después de enviar el correo electrónico
    }).catch((error) => {
      console.error('Error sending email:', error);
      // Maneja cualquier error que ocurra durante el envío del correo electrónico
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
        <form
          onSubmit={handleSubmit}>
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
          <a type="submit" href="mailTo:soyagvs@gmail.com">
            <button className="submit-btn">
              {" "}
              Submit
              <FaCheck> </FaCheck>{" "}
            </button>
          </a>
        </form>
      )}
    </div>
  );
};

export default Contact;
