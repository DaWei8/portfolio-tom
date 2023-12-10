import React from "react";
import image1 from "./imagesvg/hero1.svg";
function Hero() {
  return (
    <div id="hero-section">
      <img src={image1} className="lighteff" />
      <div id="hero-text">
        <h2>Hi !</h2>
        <h1>I'm Atanniyi Emmanuel</h1>
        <p>A full-stack web developer</p>
        <a href="#skill-section">
          <button>Visit my work</button>
        </a>
      </div>
    </div>
  );
}

export default Hero;
