import { Link } from "react-router-dom";
import "../css/PortfolioPage.css";

function PortfolioPage() {
  const portfolioVideos = [
    "/videos/wedding.mp4",
    "/videos/reels.mp4",
    "/videos/content.mp4",
    "/videos/editing.mp4",
  ];

  return (
    <main className="portfolio-page">
      <section className="portfolio-introduction">
        <span>OUR PORTFOLIO</span>

        <h1 className="single-line-text">The Destination</h1>

        <p className="single-line-text">
          The Destination creates cinematic wedding films, engaging reels,
          creative brand content and professional video edits that transform
          meaningful moments into powerful visual stories.
        </p>
      </section>

      <section className="portfolio-video-list">
        {portfolioVideos.map((video, index) => (
          <div className="portfolio-video-item" key={index}>
            <video
              src={video}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </section>

      <section className="portfolio-page-cta">
        <span>YOUR STORY COULD BE NEXT</span>

        <h2>Let Us Create Something Memorable</h2>

        <p className="single-line-text">
          Share your idea with us and let&apos;s turn it into a beautiful visual
          story.
        </p>

        <Link to="/booking" className="portfolio-book-button">
          Book Your Shoot
        </Link>
      </section>
    </main>
  );
}

export default PortfolioPage;