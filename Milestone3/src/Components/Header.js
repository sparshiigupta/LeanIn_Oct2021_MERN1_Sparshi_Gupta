import React from "react";
import Navbar from "./Navbar";
import "./Header.css";
import logo from "../images/header-imgage.png";

export default function Header() {
  return (
    <div>
      <Navbar />
      <div className="home">
        <div className="home-content">
          <div className="text">
            <div className="text-one">Hey,</div>
            <div className="text-two">I'm Sparshi Gupta</div>
            <div className="text-three">A DEVELOPER, LEARNER, CODER</div>
            <div className="text-four">From India</div>
          </div>
        </div>
        <img className="header-img" src={logo} />
      </div>
    </div>
  );
}
