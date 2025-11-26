import { useState, useEffect } from "react";
import { getApiUrl } from "../config/api";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const apiUrl = getApiUrl("/api/projects");
        console.log('Fetching from:', apiUrl);
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Failed to fetch projects data");
        let data = await response.json();
        setProjects(Array.isArray(data) ? data : []);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading)
    return (
      <section className="page projects-page">
        <p>Loading...</p>
      </section>
    );
  if (error)
    return (
      <section className="page projects-page">
        <p>Error: {error}</p>
      </section>
    );

  return (
    <section className="page projects-page">
      <h2>Projects</h2>

      <div className="projects-grid">
        {Array.isArray(projects) && projects.length > 0 ? (
          projects.map((project, index) => (
            <div key={project.id || index} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-type">
                  {project.type || "Project"}
                </span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-skills">
                {Array.isArray(project.skills) &&
                  project.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">
                      {skill}
                    </span>
                  ))}
              </div>
            </div>
          ))
        ) : (
          <p>No projects available</p>
        )}
      </div>
    </section>
  );
}
