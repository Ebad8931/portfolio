import React from "react";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-6">
            <h2>Get In Touch</h2>
            <p>
              to learn more about my professional experience
            </p>
            <Socials />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
