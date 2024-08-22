import React from 'react';
import './Project.css'; // Make sure this imports your Project.css file

function Project() {
  return (
    <>
      <h1 className="heading">Projects</h1>
      <div className="projects-container">
        {/* My Bank Project */}
        <div className="project-box">
          <h2 className="project-title">My Bank </h2>
          <p className="project-overview">
            A banking application providing essential financial services like account management, transactions, and payment processing. Developed a responsive front-end and built robust backend features using Spring Boot, ensuring secure and seamless banking operations.
          </p>
          <h3>Technologies Used:</h3>
          <p>Frontend: HTML, CSS, JavaScript, React</p>
          <p>Backend: Java, Spring Boot, Spring Security</p>
          <p>Database: MySQL or Oracle</p>
          <p>APIs: RESTful APIs</p>
          <p>Tools: Maven, Git, Apache Tomcat</p>

          <h3>GitHub: <a href="https://github.com/BalabadraSrikanth/MyBank" target="_blank" rel="noopener noreferrer">github.com/srikanthbalabadra</a></h3>
        </div>

        {/* Blog App Project */}
        <div className="project-box">
          <h2 className="project-title">Blog App</h2>
          <p className="project-overview">
            A user-friendly platform for managing and publishing blog content. Built with a strong SQL database and Spring Boot backend, the application allows seamless content creation and publishing while maintaining data integrity and security.
          </p>
          <h3>Technologies Used:</h3>
          <p>Frontend: HTML, CSS, JavaScript, React</p>
          <p>Backend: Java, Spring Boot, Spring Security</p>
          <p>Database: MySQL or Oracle</p>
          <p>APIs: RESTful APIs</p>
          <p>Tools: Maven, Git, Apache Tomcat</p>

          <h3>GitHub: <a href="https://github.com/BalabadraSrikanth/Blog-App" target="_blank" rel="noopener noreferrer">github.com/srikanthbalabadra</a></h3>

        </div>
      </div>
    </>
  );
}

export default Project;
