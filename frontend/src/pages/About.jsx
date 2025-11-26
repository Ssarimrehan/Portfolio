import { useState, useEffect } from "react";

export default function About() {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        setLoading(true);
        const apiUrl = `${process.env.REACT_APP_API_URL}/api/about`;
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Failed to fetch about data");
        const data = await response.json();
        setAbout(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching about:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAbout();
  }, []);

  if (loading)
    return (
      <section className="page about-page">
        <p>Loading...</p>
      </section>
    );
  if (error)
    return (
      <section className="page about-page">
        <p>Error: {error}</p>
      </section>
    );
  if (!about)
    return (
      <section className="page about-page">
        <p>No data found</p>
      </section>
    );

  return (
    <section className="page about-page">
      <div className="hero">
        <h2>{about.name}</h2>
        <p className="subtitle">{about.title}</p>
      </div>

      <div className="content-section">
        <h3>About Me</h3>
        <p>{about.bio}</p>
        <p>
          My expertise spans the MERN stack (MongoDB, Express, React, Node.js),
          complemented by experience in hardware design, robotics, and embedded
          systems. I'm passionate about continuous learning and delivering
          innovative, sustainable solutions.
        </p>
      </div>

      <div className="content-section">
        <h3>Key Highlights</h3>
        <ul className="highlights-list">
          <li>✓ Full Stack Development (MERN Stack)</li>
          <li>✓ Strong project execution from planning to deployment</li>
          <li>✓ Hardware & Embedded Systems background</li>
          <li>✓ Leadership and team management experience</li>
          <li>✓ Problem-solving with engineering discipline</li>
        </ul>
      </div>

      <div className="content-section contact-info">
        <h3>Contact Info</h3>
        <p>📱 {about.phone}</p>
        <p>
          📧 <a href={`mailto:${about.email}`}>{about.email}</a>
        </p>
        <p>
          🔗{" "}
          <a
            href="https://www.linkedin.com/in/sarim-rehan"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </a>
        </p>
      </div>

      <div className="content-section">
        <h3>Languages</h3>
        <ul className="lang-list">
          <li>Urdu — Native</li>
          <li>English — Fluent</li>
          <li>Chinese — Intermediate</li>
        </ul>
      </div>
    </section>
  );
}
