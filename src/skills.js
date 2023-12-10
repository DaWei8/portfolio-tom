import React from "react";
import { Link } from "react-router-dom";

function Skills() {
  return (
    <div className="skills" id="skill-section">
      <h4>What can i do?</h4>
      <h2>Skills</h2>
      <div className="container">
        <div className="row skillset justify-content-center">
          <div class="card col-lg-3 col-md-4">
            <div class="card-body">
              <h3>UI/UX design</h3>
              <div className="hidden">
                <p></p>
                <p class="card-text">
                  Very proficient with the use of figma for UI designs and also
                  creative with creation of prototyping and animations for User
                  experience on the website
                </p>
                <a href="https://www.behance.net/Olatomide">
                  <button className="lightbutton">Check it out</button>
                </a>
              </div>
            </div>
          </div>
          <div class="card col-lg-3 col-md-4">
            <div class="card-body">
              <h3>Front-end Development</h3>
              <div className="hidden">
                <p class="card-text">
                  Highly skilled in languages such as HTML, CSS, javascript with
                  frameworks and library including Bootstrap, react, react
                  native, angular
                </p>
                <Link to="./frontendpage">
                  <button className="lightbutton">Check it out</button>
                </Link>
              </div>
              <p></p>
            </div>
          </div>
          <div class="card col-lg-3 col-md-4">
            <div class="card-body">
              <h3>Back-end Development</h3>
              <div className="hidden">
                <p></p>
                <p class="card-text">
                  Good with use of Nodejs, MongoDB, Mongoose, ExpressJS to help
                  solve backend problems and requirement. Expertise in view
                </p>
                <button className="lightbutton">Check it out</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
