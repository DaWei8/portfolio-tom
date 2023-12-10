import gpt3 from "./imagesvg/gptweb 1.png";
import softbread from "./imagesvg/softbread web 1.png";
import snapit from "./imagesvg/snapit 1.png";
export default function Front() {
  return (
    <div className="front">
      <div className="container">
        <h2>Front-end Websites</h2>
        <div className="skill-content">
          <h3>GPT3</h3>
          <img src={gpt3}></img>
          <p>A website used to create other websites using AI tool; ChatGpt</p>
          <a href="https://gpt3-tomiwa-dev.netlify.app/">
            <button className="skill-bt">view project</button>
          </a>
        </div>
        <div className="skill-content">
          <h3>softbread</h3>
          <img src={softbread}></img>
          <p>
            The frontend of website for a restaurant with features showcasing
            the various products offered by the restaurant and also a means for
            customers to order what they require from the restaurant
          </p>
          <a href="https://bakery-tomiwadev.netlify.app/">
            <button className="skill-bt">view project</button>
          </a>
        </div>
        <div className="skill-content">
          <h3>Snapit</h3>
          <img src={snapit}></img>
          <p>
            The frontend of a website used to collaborate people working
            remotely.
          </p>
          <a href="https://snap-tomiwadev.netlify.app/">
            <button className="skill-bt">view project</button>
          </a>
        </div>
      </div>
    </div>
  );
}
