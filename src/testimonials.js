import React from "react";
import imagecs1 from "./imagesvg/Ellipse 1.png";
import imagecs2 from "./imagesvg/Ellipse 2.png";

function Testimonials() {
  return (
    <div className="testimonials" id="testimonials-section">
      <h4>What do my customers think about me</h4>
      <h2>Testimonials</h2>
      <div className="container">
        <div className="row justify-content-center">
          <div className="commentbox col-lg-6 col-md-6">
            <img src={imagecs1} className="cspic" />
            <div className="comments">
              <p>
                I highly recommend Emmanuel for your web development needs. They
                possess a remarkable combination of technical expertise,
                creativity, and attention to detail.
              </p>
              <h3>Moses</h3>
            </div>
          </div>
          <div className="commentbox col-lg-6 col-md-6">
            <img src={imagecs2} className="cspic" />
            <div className="comments">
              <p>
                I highly recommend Emmanuel for your web development needs. They
                possess a remarkable combination of technical expertise,
                creativity, and attention to detail.
              </p>
              <h3>David</h3>
            </div>
          </div>
        </div>
      </div>
      <h4>View more &gt;&gt;&gt;</h4>
    </div>
  );
}

export default Testimonials;
