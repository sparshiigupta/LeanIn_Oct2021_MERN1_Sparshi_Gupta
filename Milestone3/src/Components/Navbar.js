import React from "react";
// import { FaTimes } from "react-icons/fa";
// import { FaBars } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div>
      <>
        {/* <div
          className={click ? "main-container" : ""}
          onClick={() => Close()}
        /> */}
        <nav className="navbar" onClick={(e) => e.stopPropagation()}>
          <div className="nav-container">
            <a href="#" className="nav-logo">
              Sparshi
            </a>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <a
                  href="#"
                  // activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#about"
                  // activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#projects"
                  // activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#contact"
                  // activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
          </div>
        </nav>
      </>
    </div>
  );
}
