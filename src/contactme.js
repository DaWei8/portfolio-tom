import React from "react";

function Contactme() {
  return (
    <div className="contact-me container" id="contact-section">
      <h4>How to reach me</h4>
      <h2>Contact me</h2>
      <p className="central">
        If you have a project you want to get started and you think you`ll
        require my assistance, get in touch with me. i am also available for
        freelance jobs
      </p>
      <form>
        <div className="row form-top">
          <div className="col-lg-6 col-md-6 entry">
            {/* <label for="name">Name:</label> */}
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="col-lg-6 col-md-6 entry">
            {/* <label for="email">Email:</label> */}
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>

        <div className="form-bottom">
          {/* <label for="message">Message:</label> */}
          <textarea
            id="message"
            name="message"
            rows="3"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <button type="submit">send message</button>
      </form>
    </div>
  );
}

export default Contactme;
