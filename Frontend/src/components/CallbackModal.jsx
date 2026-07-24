import { useState } from "react";
import axios from "axios";
import "../css/CallbackModal.css";



function CallbackModal({ isOpen, onClose }) {
  const initialFormData = {
    name: "",
    phone: "",
    service: "",
    preferredTime: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) {
    return null;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");

    if (!formData.name.trim() || !formData.phone.trim()) {
      setMessage("Please enter your name and phone number.");
      return;
    }

    try {
      setIsSubmitting(true);

      await axios.post(
        "http://localhost:8080/api/callback-requests",
        formData
      );

      setMessage("Callback requested successfully. We will contact you soon.");
      setFormData(initialFormData);
    } catch (error) {
      console.error("Callback request failed:", error);

      setMessage(
        "Unable to submit the request. Please check that the backend is running."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="callback-overlay" onClick={onClose}>
      <div
        className="callback-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="callback-close-button"
          onClick={onClose}
          aria-label="Close callback form"
        >
          ×
        </button>

        <span className="callback-label">LET&apos;S TALK</span>

        <h2>Request a Callback</h2>

        <p>
          Share your contact details and our team will call you to discuss your
          project.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="callback-field">
            <label htmlFor="callback-name">Full Name *</label>

            <input
              id="callback-name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>

          <div className="callback-field">
            <label htmlFor="callback-phone">Phone Number *</label>

            <input
              id="callback-phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
            />
          </div>

          <div className="callback-field">
            <label htmlFor="callback-service">Required Service</label>

            <select
              id="callback-service"
              name="service"
              value={formData.service}
              onChange={handleChange}
            >
              <option value="">Choose a service</option>
              <option value="Wedding Videos">Wedding Videos</option>
              <option value="Reels & Shorts">Reels & Shorts</option>
              <option value="Content Creation">Content Creation</option>
              <option value="Video Editing">Video Editing</option>
            </select>
          </div>

          <div className="callback-field">
            <label htmlFor="callback-time">Preferred Callback Time</label>

            <select
              id="callback-time"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
            >
              <option value="">Choose a time</option>
              <option value="9:00 AM - 12:00 PM">
                9:00 AM – 12:00 PM
              </option>
              <option value="12:00 PM - 3:00 PM">
                12:00 PM – 3:00 PM
              </option>
              <option value="3:00 PM - 6:00 PM">
                3:00 PM – 6:00 PM
              </option>
              <option value="6:00 PM - 8:00 PM">
                6:00 PM – 8:00 PM
              </option>
            </select>
          </div>

          {message && <div className="callback-message">{message}</div>}

          <button
            type="submit"
            className="callback-submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Request Callback"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CallbackModal;