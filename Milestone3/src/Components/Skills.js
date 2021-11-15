import React from "react";
import "./Skills.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
export default function Skills() {
  return (
    <div>
      <p> Skills </p>
      <h2>
        <i>
          The future belongs to those who learn more skills and combine them in
          creative ways.
        </i>
      </h2>
      <ul className="skills">
        <li className="skill">
          <FaHtml5 />
        </li>
        <li className="skill">
          <FaCss3 />
        </li>
        <li className="skill">
          <FaJs />
        </li>
        <li className="skill">
          <FaBootstrap />
        </li>
        <li className="skill">
          <FaGit />
        </li>
      </ul>
    </div>
  );
}
