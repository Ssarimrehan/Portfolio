import { useState } from "react";
import "./App.css";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

function App() {
  const [currentPage, setCurrentPage] = useState("about");

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <About />;
      case "skills":
        return <Skills />;
      case "projects":
        return <Projects />;
      case "experience":
        return <Experience />;
      case "contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-brand">
          <h1>Sarim Rehan</h1>
          <p className="nav-subtitle">Full Stack Developer (MERN)</p>
        </div>
        <ul className="nav-links">
          <li>
            <button
              className={currentPage === "about" ? "active" : ""}
              onClick={() => setCurrentPage("about")}
            >
              About
            </button>
          </li>
          <li>
            <button
              className={currentPage === "skills" ? "active" : ""}
              onClick={() => setCurrentPage("skills")}
            >
              Skills
            </button>
          </li>
          <li>
            <button
              className={currentPage === "projects" ? "active" : ""}
              onClick={() => setCurrentPage("projects")}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              className={currentPage === "experience" ? "active" : ""}
              onClick={() => setCurrentPage("experience")}
            >
              Experience
            </button>
          </li>
          <li>
            <button
              className={currentPage === "contact" ? "active" : ""}
              onClick={() => setCurrentPage("contact")}
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>

      <main className="main-content">{renderPage()}</main>

      <footer className="footer">
        <p>&copy; 2025 Muhammad Sarim Rehan Shami. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
