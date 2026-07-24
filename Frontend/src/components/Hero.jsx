import { Link } from "react-router-dom";

import heroImage from "../assets/images/hero.jpg";
import "../css/Hero.css";

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <span className="hero-tagline">
          CINEMATIC STORIES • CREATIVE VISUALS
        </span>

        <h1>
          Every Frame. 
          <br />
          Every Emotion.
          <br/>
          Every Story.
        </h1>

        <p>
          Cinematic wedding films, engaging reels and creative brand content
          crafted by The Destination.
        </p>

        <div className="hero-buttons">
          <Link to="/booking" className="hero-primary-button">
            Book Now
          </Link>

        </div>
      </div>
    </section>
  );
}

export default Hero;