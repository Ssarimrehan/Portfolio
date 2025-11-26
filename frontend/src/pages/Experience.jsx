import { useState, useEffect } from "react";

export default function Experience() {
  const [experience, setExperience] = useState({
    jobs: [],
    education: [],
    leadership: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        setLoading(true);
        const apiUrl = `${process.env.REACT_APP_API_URL}/api/experience`;
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Failed to fetch experience data");
        const data = await response.json();
        setExperience(data || { jobs: [], education: [], leadership: [] });
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching experience:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchExperience();
  }, []);

  if (loading)
    return (
      <section className="page experience-page">
        <p>Loading...</p>
      </section>
    );
  if (error)
    return (
      <section className="page experience-page">
        <p>Error: {error}</p>
      </section>
    );

  return (
    <section className="page experience-page">
      <h2>Professional Experience</h2>

      <div className="experience-timeline">
        {Array.isArray(experience.jobs) &&
          experience.jobs.map((job, index) => (
            <div key={job.id || index} className="experience-item">
              <div className="experience-header">
                <h3>{job.position}</h3>
                <span className="duration">{job.duration}</span>
              </div>
              <p className="company">
                <strong>{job.company}</strong> · {job.location}
              </p>
              <p className="description">{job.description}</p>
              <ul className="highlights">
                {Array.isArray(job.highlights) &&
                  job.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
              </ul>
            </div>
          ))}
      </div>

      <div className="content-section">
        <h3>Leadership & Volunteering</h3>
        <ul className="leadership-list">
          {Array.isArray(experience.leadership) &&
            experience.leadership.map((item, i) => (
              <li key={i}>
                <strong>{item.organization}</strong> — {item.role} (
                {item.duration})
                <br />
                {item.description}
              </li>
            ))}
        </ul>
      </div>

      <div className="content-section">
        <h3>Education</h3>
        {Array.isArray(experience.education) &&
          experience.education.map((edu, i) => (
            <p key={i}>
              <strong>{edu.school}</strong>
              <br />
              {edu.degree} ({edu.duration})
            </p>
          ))}
      </div>
    </section>
  );
}
