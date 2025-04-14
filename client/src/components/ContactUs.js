import React, { useState } from 'react';
import NavBar from './NavBar'; // Import your NavBar component
import './ContactUs.css'; // Import the ContactUsPage styles

const ContactUsPage = (props) => {
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
        <div className={`contact-us-page ${props.theme}`}>
            {/* Navbar */}
            <NavBar theme={props.theme} setTheme={props.setTheme} />

            {/* Contact Us Content */}
            <div className="contact-us-container mt-5">
                <h1>Contact Us</h1>
                <p>If you have any questions or feedback, feel free to reach out to us!</p>

                {/* Organization Details */}
                <div className="organization-details">
                    <h2>Contact Information</h2>
                    <p>
                        It is for your information that Comsats Call Center is now globally activated. You can contact at the number given below for all your queries and concerns.
                    </p>
                    {/* Button to Open Contact Form Modal */}
        <button className="btn btn-danger" onClick={openModal}>
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
                <button type="submit" className="btn btn-danger">
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
                    <address>
                        <a href="tel:+92-51-844-444-1" className="phone-number mt-3">+92-301-8793303</a>
                        <br />
                        <a href="mailto:info@example.com" className="email">FA20-BCS-084@cuiatd.edu.pk</a>
                        <br />
                        <a href="http://www.cuiatd.edu.pk" className="site">www.cuiatd.edu.pk</a>
                        <br />
                        <a href="#" className="address">University Road, Mandian, Abbottabad</a>
                    </address>

                    {/* Social Media Icons */}
                    <div className="footer-social">
                        <a style={{marginLeft: 100}}></a>

                        <a href="https://twitter.com/cuiatd" className="fa fa-twitter m-5"><img src='https://pbs.twimg.com/profile_images/1683364031921356800/lC0xkPJZ_400x400.jpg' height={40}/></a>

                        <a href="https://www.linkedin.com/company/comsats-university-islamabad-abbottabad-campus/" className="fa fa-linkedin m-5"><img src='https://store-images.s-microsoft.com/image/apps.31120.9007199266245564.44dc7699-748d-4c34-ba5e-d04eb48f7960.bc4172bd-63f0-455a-9acd-5457f44e4473' height={40}/></a>

                        <a href="https://www.facebook.com/cuiabbottabad" className="fa fa-facebook m-5"><img src='https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' height={40}/></a>

                        <a href="https://www.instagram.com/comsats_university_abbottabad/" className="fa fa-instagram m-5"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png' height={40}/></a>
                    </div>
                </div>

                {/* Head office Location */}
                <div className="head-office-location">
                    <h2>Head office Location</h2>
                    <div>
                        <iframe
                            title="COMSATS Abbottabad Campus Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3299.945295103161!2d73.24126301470348!3d34.19887411743701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38de304446d9297f%3A0xe744bea4e9033b92!2sCOMSATS%20University%20Islamabad%20-%20Abbottabad%20Campus!5e0!3m2!1sen!2s!4v1609398779075!5m2!1sen!2s"
                            width="600"
                            height="350"
                            frameBorder="0"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                        ></iframe>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer>
                {/* ... (Add your footer content here) */}
            </footer>
        </div>
    );
};

export default ContactUsPage;
