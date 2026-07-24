import { useState } from "react";
import { useNavigate } from "react-router-dom";

import weddingImage from "../assets/images/wedding.jpg";
import reelsImage from "../assets/images/youtube.jpg";
import contentImage from "../assets/images/reels.jpg";
import editingImage from "../assets/images/editing.jpg";

import "../css/Bookingpage.css";

function Booking() {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: "Wedding Videos",
      shortTitle: "Wedding",
      image: weddingImage,
      description:
        "Cinematic wedding films that preserve emotions, celebrations and unforgettable moments.",
    },
    {
      id: 2,
      title: "Reels & Shorts",
      shortTitle: "Reels",
      image: reelsImage,
      description:
        "Creative short-form videos designed for Instagram, YouTube and social-media campaigns.",
    },
    {
      id: 3,
      title: "Content Creation",
      shortTitle: "Content",
      image: contentImage,
      description:
        "Professional visual content for creators, businesses, brands and digital campaigns.",
    },
    {
      id: 4,
      title: "Video Editing",
      shortTitle: "Editing",
      image: editingImage,
      description:
        "Professional editing, colour grading, sound enhancement and polished final delivery.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedService, setSelectedService] = useState(null);

  const movePrevious = () => {
    setActiveIndex((previousIndex) =>
      previousIndex === 0 ? services.length - 1 : previousIndex - 1
    );
  };

  const moveNext = () => {
    setActiveIndex((previousIndex) =>
      previousIndex === services.length - 1 ? 0 : previousIndex + 1
    );
  };

  const selectService = (service, index) => {
    setActiveIndex(index);
    setSelectedService(service);
  };

  const cancelSelection = () => {
    setSelectedService(null);
  };

  const proceedToContact = () => {
    if (!selectedService) {
      return;
    }

    navigate("/contact", {
      state: {
        selectedService: selectedService.title,
      },
    });
  };

  const getCardPosition = (index) => {
    const difference = index - activeIndex;

    if (difference === 0) {
      return "booking-card-active";
    }

    if (
      difference === -1 ||
      (activeIndex === 0 && index === services.length - 1)
    ) {
      return "booking-card-left";
    }

    if (
      difference === 1 ||
      (activeIndex === services.length - 1 && index === 0)
    ) {
      return "booking-card-right";
    }

    return "booking-card-hidden";
  };

  return (
    <main className="booking-gallery-page">
      <section className="booking-gallery">
        <div className="booking-gallery-heading">
          <span>CHOOSE YOUR SERVICE</span>

          <h1>What Would You Like Us to Create?</h1>

          <p>
            Explore our creative services, select the one that matches your
            vision and continue to share your project details.
          </p>
        </div>

        <div className="booking-service-tabs">
          {services.map((service, index) => (
            <button
              type="button"
              key={service.id}
              className={activeIndex === index ? "active" : ""}
              onClick={() => setActiveIndex(index)}
            >
              {service.shortTitle}
            </button>
          ))}
        </div>

        <div className="booking-carousel">
          {services.map((service, index) => (
            <article
              key={service.id}
              className={`booking-service-card ${getCardPosition(index)} ${
                selectedService?.id === service.id
                  ? "booking-service-selected"
                  : ""
              }`}
              onClick={() => selectService(service, index)}
            >
              <img src={service.image} alt={service.title} />

              <div className="booking-card-overlay"></div>

              <div className="booking-card-content">
                <span>THE DESTINATION</span>
                <h2>{service.title}</h2>
                <p>{service.description}</p>

                <button type="button">Select Service</button>
              </div>
            </article>
          ))}
        </div>

        <div className="booking-carousel-controls">
          <button
            type="button"
            onClick={movePrevious}
            aria-label="Previous service"
          >
            ←
          </button>

          <button
            type="button"
            onClick={moveNext}
            aria-label="Next service"
          >
            →
          </button>
        </div>

        {selectedService && (
          <div className="booking-selection-panel">
            <div>
              <span>SELECTED SERVICE</span>
              <h3>{selectedService.title}</h3>
              <p>{selectedService.description}</p>
            </div>

            <div className="booking-selection-actions">
              <button
                type="button"
                className="booking-cancel-button"
                onClick={cancelSelection}
              >
                Cancel
              </button>

              <button
                type="button"
                className="booking-proceed-button"
                onClick={proceedToContact}
              >
                Proceed
                <span>→</span>
              </button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

export default Booking;