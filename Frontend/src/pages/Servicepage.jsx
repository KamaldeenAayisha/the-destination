import { Link } from "react-router-dom";
import "../css/ServicePage.css";

import reelsImage from "../assets/images/youtube.jpg";
import contentImage from "../assets/images/reels.jpg";
import editingImage from "../assets/images/editing.jpg";
import weddingImage from "../assets/images/wedding.jpg";

function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Reels & Shorts",
      image: reelsImage,
      description:
        "Engaging short-form videos designed for Instagram, YouTube Shorts and other social media platforms.",
      features: [
        "Creative concept planning",
        "Professional video shooting",
        "Trending transitions",
        "Music and sound effects",
        "Colour correction",
      ],
    },
    {
      id: 2,
      title: "Content Creation",
      image: contentImage,
      description:
        "Complete visual content solutions for creators, businesses, brands and social media campaigns.",
      features: [
        "Content strategy",
        "Script assistance",
        "Indoor and outdoor shoots",
        "Brand-focused visuals",
        "Platform-ready delivery",
      ],
    },
    {
      id: 3,
      title: "Video Editing",
      image: editingImage,
      description:
        "Professional editing that transforms your raw footage into polished and engaging visual stories.",
      features: [
        "Professional cuts",
        "Colour grading",
        "Motion graphics",
        "Audio enhancement",
        "Multiple export formats",
      ],
    },
    {
      id: 4,
      title: "Wedding Videos",
      image: weddingImage,
      description:
        "Cinematic wedding films that preserve your emotions, celebrations and unforgettable moments.",
      features: [
        "Traditional coverage",
        "Candid moments",
        "Wedding highlights",
        "Cinematic storytelling",
        "Full-event editing",
      ],
    },
  ];

  return (
    <main className="services-page">
      <section className="services-page-hero">
        <div className="services-page-overlay"></div>

        <div className="services-page-hero-content">
          <span>OUR SERVICES</span>

          <h1 className="single-line-text">Stories Created With Purpose</h1>

          <p className="single-line-text">
            From cinematic wedding films to high-impact social media content, we create videos that connect with your audience.
          </p>

          <Link to="/booking" className="services-hero-button">
            Book Your Shoot
          </Link>
        </div>
      </section>

      <section className="services-page-content">
        <div className="services-page-heading">
          <span>WHAT WE CREATE</span>
          <h2 className="single-line-text">Professional Video Services</h2>

          <p className="single-line-text">
            Choose the service that matches your vision. Every project is
            planned, captured and edited with attention to detail.
          </p>
        </div>

        <div className="services-page-grid">
          {services.map((service, index) => (
            <article className="service-page-card" key={service.id}>
              <div className="service-page-image">
                <img src={service.image} alt={service.title} />

                <span className="service-page-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="service-page-card-content">
                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <ul>
                  {service.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <Link
                  to="/booking"
                  state={{ selectedService: service.title }}
                  className="service-book-link"
                >
                  Book This Service
                  <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="services-page-cta">
        <span>HAVE A DIFFERENT IDEA?</span>

        <h2>Let Us Turn Your Vision Into a Story</h2>

        <p className="single-line-text">
          Tell us about your project, event or creative idea. We will help you
          choose the right production plan.
        </p>

        <Link to="/contact" className="services-contact-button">
          Contact Us
        </Link>
      </section>
    </main>
  );
}

export default ServicesPage;