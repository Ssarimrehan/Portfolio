import { useState, useEffect } from "react";

export default function Skills() {
  const [skills, setSkills] = useState({
    programming: [],
    webFrameworks: [],
    tools: [],
    hardwareEmbedded: [],
    interests: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        setLoading(true);
        const baseUrl = process.env.REACT_APP_API_URL || 'https://portfolio-backend-five-tau.vercel.app';
        const apiUrl = `${baseUrl}/api/skills`;
        console.log('Fetching from:', apiUrl);
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Failed to fetch skills data");
        const data = await response.json();
        setSkills(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching skills:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  if (loading)
    return (
      <section className="page skills-page">
        <p>Loading...</p>
      </section>
    );
  if (error)
    return (
      <section className="page skills-page">
        <p>Error: {error}</p>
      </section>
    );

  const skillsData = {
    Programming: skills.programming,
    "Web Frameworks": skills.webFrameworks,
    "Tools & Software": skills.tools,
    "Hardware & Embedded": skills.hardwareEmbedded,
  };

  return (
    <section className="page skills-page">
      <h2>Technical Skills</h2>

      <div className="skills-grid">
        {Object.entries(skillsData).map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category[0]}</h3>
            <ul>
              {category[1].map((skill, i) => (
                <li key={i} className="skill-badge">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="content-section">
        <h3>Other Interests</h3>
        <ul className="interests-list">
          {skills.interests.map((interest, i) => (
            <li key={i}>{interest}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
