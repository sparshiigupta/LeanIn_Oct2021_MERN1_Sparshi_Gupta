import React from "react";
import "./About.css";
import AboutImage from "../images/about-image.jpeg";
export default function About() {
  return (
    <section className="about" id="about">
      <div className="content">
        <div className="title">
          <span>About Me</span>
        </div>
        <div className="about-details">
          <div className="left">
            <img src={AboutImage} alt="" />
          </div>
          <div className="right">
            <div className="topic">Designing Is My Passion</div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Deserunt, porro veritatis pariatur, nobis voluptatem ipsum
              repellat nemo quisquam error reprehenderit recusandae odio vel,
              suscipit. Voluptas mollitia accusantium quaerat aspernatur labore
              dolorum placeat ipsa sint nam perspiciatis eos consectetur
              veritatis debitis, quis aliquam unde sed maiores sit! Hic
              molestiae optio iste iure earum amet nostrum quaerat facere quae
              veniam maiores harum iusto aperiam vel inventore illo voluptatibus
              voluptates quo impedit voluptatum error vitae, omnis praesentium?
              Aperiam nulla non, nesciunt fuga rem perferendis alias et,
              temporibus, distinctio culpa unde a laborum libero ducimus.
              Facilis veniam sit praesentium, voluptatibus sint maxime iusto
              eaque.
            </div>
            <div className="button">
              <button>Download CV</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
