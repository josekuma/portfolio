import React from "react";
import "../App.css";

const Projects = () => {
  return (
    <section className="section-3" id="projects">
      <h1 className="section-heading section-3-heading">My Projects</h1>
      <div className="projects-wrapper center">
        <div className="project">
          <div className="project-text">
            <h2 className="project-name">Takeaway restaurant</h2>
            <h4 className="project-technologies">HTML / CSS / JS</h4>
          </div>
          <img src="images/project-1.png" className="project-img" />
          <a href="#" className="project-link" target="_blank">
            Go to Website
          </a>
        </div>
        <div className="project">
          <div className="project-text">
            <h2 className="project-name">Netflix</h2>
            <h4 className="project-technologies">
              ReactJS / Tailwind / Firebase
            </h4>
          </div>
          <img src="images/project-2.png" className="project-img" />
          <a
            href="https://netplix-jk.web.app"
            className="project-link"
            target="_blank"
          >
            Go to Website
          </a>
        </div>
        <div className="project">
          <div className="project-text">
            <h2 className="project-name">E-commerce</h2>
            <h4 className="project-technologies">
              React / Material-UI / Firebase
            </h4>
          </div>
          <img src="images/project-3.png" className="project-img" />
          <a
            href="https://e-commercejk.web.app"
            className="project-link"
            target="_blank"
          >
            Go to Website
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
