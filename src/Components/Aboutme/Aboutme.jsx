
import React from 'react';
import './Aboutme.css'; // Make sure this imports your Aboutme.css file

function Aboutme() {
  return (
    <>
      <div className="about-container">
        <h1 className="about-heading">About Me</h1>
        <div className="about-content">
          <h3 className="about-name">Hi, I'm Srikanth Balabadra</h3>
          <p className="about-intro">
            I’m a Full Stack Java Developer with a specialization in building scalable and efficient web applications. I hold a degree in Computer Science and Engineering (2023) from Geethanjali College of Engineering and Technology.
          </p>
          <p className="about-experience">
            I have hands-on experience with Java, Spring Boot, React, and SQL. My projects include a Banking System and Blog App, where I worked on both front-end and back-end development to deliver high-quality solutions.
          </p>
          <p className="about-interests">
            I am passionate about solving complex problems, collaborating in teams, and continuously learning new technologies.
          </p>
        </div>
      </div>
    </>
  );
}

export default Aboutme;
