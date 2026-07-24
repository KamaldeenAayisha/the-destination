import { useState } from "react";
import leavesImage from "../assets/images/contact-leaves.png";
import "../css/Contactpage.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.service ||
      !formData.message.trim()
    ) {
      setStatusMessage("Please complete all required fields.");
      return;
    }

    console.log("Contact form:", formData);

    setStatusMessage(
      "Your message has been submitted successfully. We will contact you soon."
    );

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <main className="leaf-contact-page">
      <section className="leaf-contact-card">
        {/* Decorative plant image */}
        <div
          className="leaf-contact-image"
          style={{ backgroundImage: `url(${leavesImage})` }}
        ></div>

        {/* Company information */}
        <div className="leaf-contact-information">
          <span className="leaf-contact-label">THE DESTINATION</span>

          <h1>
            Get in
            <br />
            touch
          </h1>

          <p className="leaf-contact-description">
            Share your wedding, reel, brand-content or video-editing idea with
            us. Let&apos;s create something meaningful together.
          </p>

          <div className="leaf-contact-details">
            <div>
              <span>EMAIL</span>

              <a href="mailto:sharuqdeen@gmail.com">
                sharuqdeen@gmail.com
              </a>
            </div>

            <div>
              <span>PHONE</span>

              <a href="tel:+919384360323">+91 93843 60323</a>
            </div>

            <div>
              <span>LOCATION</span>

              <p>Chennai, Tamil Nadu</p>
            </div>
          </div>

          <div className="leaf-contact-socials">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M21 8.2c-.2-1.4-1.3-2.5-2.7-2.7C16.3 5.2 14.1 5 12 5s-4.3.2-6.3.5C4.3 5.7 3.2 6.8 3 8.2A24 24 0 0 0 2.7 12c0 1.3.1 2.6.3 3.8.2 1.4 1.3 2.5 2.7 2.7 2 .3 4.2.5 6.3.5s4.3-.2 6.3-.5c1.4-.2 2.5-1.3 2.7-2.7.2-1.2.3-2.5.3-3.8s-.1-2.6-.3-3.8Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <path d="m10 9 5 3-5 3V9Z" fill="currentColor" />
              </svg>
            </a>

            <a
              href="https://wa.me/919384360323"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M20 11.7a8 8 0 0 1-11.8 7L4 20l1.3-4A8 8 0 1 1 20 11.7Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M9 8.5c.5 2.4 2.2 4.1 4.6 4.8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </a>
          </div>

          <span className="leaf-contact-department">
            Visual Storytelling Studio
          </span>
        </div>

        {/* Form */}
        <div className="leaf-contact-form-panel">
          <form className="leaf-contact-form" onSubmit={handleSubmit}>
            <span className="leaf-form-label">START YOUR PROJECT</span>

            <h2>Tell us about your idea</h2>

            <div className="leaf-form-fields">
              <div className="leaf-form-field">
                <label htmlFor="name">Your Name *</label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
              </div>

              <div className="leaf-form-field">
                <label htmlFor="email">Email Address *</label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </div>

              <div className="leaf-form-field">
                <label htmlFor="phone">Phone Number</label>

                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                />
              </div>

              <div className="leaf-form-field">
                <label htmlFor="service">Select Service *</label>

                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Choose a service</option>
                  <option value="Wedding Film">Wedding Film</option>
                  <option value="Reels & Shorts">Reels & Shorts</option>
                  <option value="Content Creation">Content Creation</option>
                  <option value="Video Editing">Video Editing</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="leaf-form-field">
                <label htmlFor="message">Message *</label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Describe your project, preferred date, location and requirements..."
                />
              </div>
            </div>

            {statusMessage && (
              <div className="leaf-contact-status">{statusMessage}</div>
            )}

            <button type="submit" className="leaf-contact-submit">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="leaf-contact-footer">
        <p>
          © {new Date().getFullYear()} THE DESTINATION. All Rights Reserved.
        </p>

        <span>Visual Storytelling Studio · Chennai</span>
      </footer>
    </main>
  );
}

export default Contact;