import React from "react";
import "./Project-Card.css";
import { projects } from "./project-data";

export default function ProjectCard() {
  return (
    <>
      {projects.map((project) => (
        <div className="containers">
          <div className="card">
            <div className="image">
              <img src={project.image} alt="project1" />
            </div>
            <div className="content">
              <h3>{project.title}</h3>
              <h4 className="project-subtitle">{project.subtitle}</h4>
              <div>{project.description}</div>
              <a className="github-link" href={project.link}>
                View on Github
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
