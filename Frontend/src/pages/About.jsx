import { Link } from "react-router-dom";

import founderImage from "../assets/images/founder.jpg";
import coFounderImage from "../assets/images/co-founder.jpg";

import "../css/About.css";

function About() {
  const founders = [
    {
      id: 1,
      role: "Founder",
      name: "SHARUQDEEN",
      image: founderImage,
      description:
        "Leading the creative direction of The Destination with a focus on visual storytelling, authentic emotions and memorable cinematic experiences.",
    },
    {
      id: 2,
      role: "Co-Founder",
      name: "MANIKANDAN",
      image: coFounderImage,
      description:
        "Managing production, planning and execution while ensuring every project is delivered with creativity, quality and attention to detail.",
    },
  ];

  const values = [
    {
      id: 1,
      title: "Authentic",
      description:
        "We capture natural emotions and meaningful moments without making them feel artificial.",
    },
    {
      id: 2,
      title: "Creative",
      description:
        "Every project receives its own visual identity, style and storytelling approach.",
    },
    {
      id: 3,
      title: "Collaborative",
      description:
        "We listen to our clients and include their vision throughout the creative process.",
    },
  ];

  return (
    <main className="editorial-about">
      {/* Our Story — first section */}
      <section className="editorial-story">
        <div className="editorial-story-heading">
          <span className="editorial-label">OUR STORY</span>

          <h1>We turn moments into something worth remembering.</h1>
        </div>

        <div className="editorial-story-copy">
          <p>
            Every wedding, creator and brand has a different story. That is why
            we do not follow one fixed style for every project.
          </p>

          <p>
            We begin by understanding the people, purpose and emotion behind
            the project. From planning and filming to editing and final
            delivery, every creative choice is made to support the story.
          </p>

          <p>
            The Destination creates cinematic wedding films, social-media
            reels, brand content and professional video edits with emotion,
            originality and purpose.
          </p>

          <blockquote>
            “The camera captures the moment. The story makes it unforgettable.”
          </blockquote>
        </div>

        <div className="editorial-story-side-message">
          VISUAL STORYTELLING STUDIO · CHENNAI
        </div>
      </section>

      {/* Founder and Co-Founder */}
      <section className="editorial-founders">
        <div className="editorial-founders-heading">
          <span className="editorial-label">THE PEOPLE BEHIND IT</span>

          <h2>Meet the minds shaping every frame.</h2>

          <p>
            The Destination is built by creative professionals who believe that
            every story deserves thoughtful planning, beautiful visuals and
            meaningful execution.
          </p>
        </div>

        <div className="editorial-founder-list">
          {founders.map((founder, index) => (
            <article
              className={`editorial-founder ${
                index === 1 ? "editorial-founder-reverse" : ""
              }`}
              key={founder.id}
            >
              <div className="editorial-founder-visual">
                <div className="founder-color-block"></div>

                <div className="founder-photo-frame">
                  <img
                    src={founder.image}
                    alt={`${founder.name} - ${founder.role}`}
                  />
                </div>
              </div>

              <div className="editorial-founder-content">
                <span>{founder.role}</span>

                <h3>{founder.name}</h3>

                <p>{founder.description}</p>

                <div className="founder-signature-line">
                  <span></span>
                  THE DESTINATION
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="editorial-values">
        <div className="editorial-values-heading">
          <span className="editorial-label">OUR APPROACH</span>

          <h2>What defines our work</h2>

          <p>
            Our approach combines creativity, collaboration and attention to
            detail throughout every stage of production.
          </p>
        </div>

        <div className="editorial-values-grid">
          {values.map((value) => (
            <article className="editorial-value-card" key={value.id}>
              <h3>{value.title}</h3>

              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Final booking section */}
      <section className="editorial-cta">
        <div className="editorial-cta-shape"></div>

        <div className="editorial-cta-content">
          <span className="editorial-label">YOUR STORY STARTS HERE</span>

          <h2>Let&apos;s make something people will remember.</h2>

          <p>
            Share your wedding, brand or content idea with us and let&apos;s
            create a visual experience around it.
          </p>

          <div className="editorial-cta-actions">
            <Link to="/booking" className="editorial-primary-button">
              Book Your Shoot
            </Link>

            
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;