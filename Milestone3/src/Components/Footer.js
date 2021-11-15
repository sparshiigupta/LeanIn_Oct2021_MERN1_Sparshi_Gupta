import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="top">
      <footer className="footer">
        <div className="waves">
          <div className="wave" id="wave1" />
          <div className="wave" id="wave2" />
          <div className="wave" id="wave3" />
          <div className="wave" id="wave4" />
        </div>
        <ul className="social-icon">
          <li className="social-icon__item">
            <a
              className="social-icon__link"
              href="https://www.linkedin.com/in/sparshiigupta/"
            >
              <FaLinkedin />
            </a>
          </li>
          <li className="social-icon__item">
            <a
              className="social-icon__link"
              href="https://www.twitter.com/sparshiigupta/"
            >
              <FaTwitter />
            </a>
          </li>
          <li className="social-icon__item">
            <a
              className="social-icon__link"
              href="https://www.github.com/sparshiigupta/"
            >
              <FaGithub />
            </a>
          </li>
          <li className="social-icon__item">
            <a
              className="social-icon__link"
              href="https://www.instagram.com/_sparshigupta_/"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
        <p>©2021 Sparshi Gupta | All Rights Reserved</p>
      </footer>
    </div>
  );
}
