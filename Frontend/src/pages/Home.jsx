import { useState } from "react";
import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import CallbackModal from "../components/CallbackModal";

import "../css/Home.css";

function Home() {
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);

  const openCallbackModal = () => {
    setIsCallbackOpen(true);
  };

  const closeCallbackModal = () => {
    setIsCallbackOpen(false);
  };

  return (
    <main className="home-page">
      {/* Hero section */}
      <Hero />

      {/* Request callback section */}
      <section className="home-callback-section">
        <div className="home-callback-content">
          <span>NEED HELP CHOOSING?</span>

          <h2>Let&apos;s discuss your project.</h2>

          <p>
            Request a callback and our team will help you choose the right
            service for your vision.
          </p>
        </div>

        <button
          type="button"
          className="home-callback-button"
          onClick={openCallbackModal}
        >
          Request a Callback
        </button>
      </section>


      {/* Existing Why Choose Us section */}
      <WhyChooseUs />

      {/* Booking CTA below Why Choose Us */}
      <section className="home-story-cta">
        <div className="home-story-cta-content">
          <span>LET&apos;S BEGIN THE JOURNEY</span>

          <h2>Have a Story You Want to Create?</h2>

          <p>
            Share your vision with us and let&apos;s build something meaningful
            together.
          </p>

          <Link to="/booking" className="home-story-button">
            Book Your Shoot
          </Link>
        </div>
      </section>

      {/* Callback popup */}
      <CallbackModal
        isOpen={isCallbackOpen}
        onClose={closeCallbackModal}
      />
    </main>
  );
}

export default Home;