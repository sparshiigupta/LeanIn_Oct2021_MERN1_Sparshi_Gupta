import React from "react";
import ProjectCard from "./Project-Card";
import "./Project.css";
export default function Projects() {
  return (
    <section id="projects" className="project">
      <div className="content">
        <div className="title">
          <span>Projects</span>
        </div>
      </div>

      <div className="projects">
        <ProjectCard />
      </div>
    </section>
  );
}
