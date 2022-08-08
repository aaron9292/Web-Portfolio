import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Aaron Xu</h2>
        <div className="prompt">
          <p>A software developer with a passion for Machine Learning and Artificial Intelligence.</p>
          <GithubIcon onClick={() => window.open('http://www.github.com/aaron9292')}></GithubIcon>
          <LinkedInIcon onClick={() => window.open('http://www.linkedin.com/aaron-xu')}></LinkedInIcon>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, MySQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>Java, Python, C++, HTML, CSS, React, SQL, JavaScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
