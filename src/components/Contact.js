import React from 'react';
import { FaEnvelope, FaLinkedin, FaPhone } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Contact Us</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title">Get in Touch</h5>
              <p className="card-text">
                <FaEnvelope className="me-2" />
                <a href="mailto:resources123@gmail.com" className="text-decoration-none">resources123@gmail.com</a>
              </p>
              <p className="card-text">
                <FaLinkedin className="me-2" />
                <a href="https://www.linkedin.com/company/linkedin/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">LinkedIn</a>
              </p>
              <p className="card-text">
                <FaPhone className="me-2" />
                <a href="tel:+919673849249" className="text-decoration-none">+91 96738 49249</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
