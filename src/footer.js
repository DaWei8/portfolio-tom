import React from "react";

function Footer() {
  return (
    <div className="footer " id="footer-section">
      <div className="leftfooter ">
        <h2>Got a job for me ?</h2>
        <p className="footP">Ensure to call and contact me</p>
        <h5>Copyright 2023 @ThePackage</h5>
      </div>
      <div className="rightfooter">
        <button className="footerbtn">Hire me</button>
        <br />
        <i class="fa-brands faf fa-twitter"></i>
        <i class="fa-brands faf fa-facebook-f"></i>
        <i class="fa-solid faf fa-envelope"></i>
        <i class="fa-brands faf fa-instagram"></i>
      </div>
    </div>
  );
}

export default Footer;
