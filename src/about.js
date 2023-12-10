import React from "react";
import imageMe from "./imagesvg/mrme.png";
import CV_PDF from "../src/disturbance.pdf";

function AboutMe() {
  return (
    <div className="about" id="about-section">
      <img src={imageMe} className="messi" />
      <div className="about-text">
        <h4>Who am I?</h4>
        <h2>About me</h2>
        <p>
          I'm a web designer / developer based in Lagos, Nigeria. I have a
          passion for web design and love to create for web and mobile devices.
        </p>

        <a href={CV_PDF} >
          <button className="lightbutton">View my CV</button>
        </a>
      </div>
    </div>
  );
}

export default AboutMe;
