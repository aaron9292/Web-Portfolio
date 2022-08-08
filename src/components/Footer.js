import React from "react";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <GithubIcon onClick={() => window.open('http://www.github.com/aaron9292')}></GithubIcon>
        <LinkedInIcon onClick={() => window.open('http://www.linkedin.com/aaron-xu')}></LinkedInIcon>
      </div>
      <p> &copy; 2022 aaronxu.com</p>
    </div>
  );
}

export default Footer;
