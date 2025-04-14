import React, { useState } from 'react';
import NavBar from './NavBar'; // Import the NavBar component
import './ContactUs.css'; // You can create a CSS file for styling

const ContactUs = (props) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const closeSuccessModal = () => {
    setSuccessModalOpen(false);
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send the data to your server or API)

    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });

    // Optionally, you can display a success message to the user
    setSuccessModalOpen(true);

    // Close the modal after submitting the form
    closeModal();
  };

  return (
    <div className={props.theme === 'dark' ? 'dark-mode' : 'light-mode'}>
      {/* Navbar */}
      <NavBar theme={props.theme} setTheme={props.setTheme} />

      {/* Contact Us Content */}
      <div className="contact-us-container mt-5">
        <h1>Contact Us</h1>
        <p>If you have any questions or feedback, feel free to reach out to us!</p>

        {/* Organization Details */}
        <div className="organization-details">
          <h3>Our Organization</h3>
          <p>
            Welcome to NewsWave, your go-to source for the latest news. We're dedicated to providing you with accurate and timely information from around the world.
          </p>
          <p>
            Contact us for any inquiries or feedback. Your thoughts are important to us!
          </p>
        </div>

        {/* Button to Open Contact Form Modal */}
        <button className="btn btn-primary" onClick={openModal}>
          Give Feedback
        </button>

        {/* Modal/Dialog for Contact Form */}
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>&times;</span>
              <h2>Contact Us</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                {/* Form Fields */}
                <div className="mb-3">
                  <label className="form-label">Your Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Your Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Your Message:</label>
                  <textarea
                    className="form-control"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={20}
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Success Modal */}
        {isSuccessModalOpen && (
          <div className="success-modal mt-3">
            <div className="success-modal-content" style={{ color: 'green' }}>
              <span className="close" onClick={closeSuccessModal}>&times;</span>
              <h2>Success!</h2>
              <p>Your message has been sent successfully.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
