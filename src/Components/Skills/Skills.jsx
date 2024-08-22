import React from 'react';
import './Skills.css';
import css from '../../assets/css.png'; // Going up two directories
import html from '../../assets/html.jpeg';
import js from '../../assets/js.jpeg';
import java from '../../assets/java.jpeg';
import reactjs from '../../assets/reactjs.jpeg';
import spring from '../../assets/spring.jpeg';
import sql from '../../assets/sql.jpeg';
import springboot from '../../assets/springboot.jpeg';
import oracle from '../../assets/oracle.jpeg';

 
function Skillgpt() {
  return (
    <div className="skills-component">
    <div className="heading">
      <h1>Skills</h1>
    </div>
    <div className="skills-wrapper">
      {/* Frontend Category */}
      <div className="skill-category">
        <h2>Frontend</h2>
        <table>
          <thead>
            {/* <tr>
              <th>Skill</th>
              <th>Logo</th>
            </tr> */}
          </thead>
          <tbody>
            <tr>
              <td id="html">HTML</td>
              <td><img src={html} alt="html" /></td>
            </tr>
            <tr>
              <td id="css">CSS</td>
              <td><img src={css} alt="css"  /></td>
            </tr>
            <tr>
              <td id="javascript">JavaScript</td>
              <td><img src={js} alt="js" /></td>
            </tr>
            <tr>
              <td id="reactjs">React.js</td>
              <td><img src={reactjs} alt="reactjs" /></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Backend Category */}
      <div className="skill-category">
        <h2>Backend</h2>
        <table>
          <thead>
            {/* <tr>
              <th>Skill</th>
              <th>Logo</th>
            </tr> */}
          </thead>
          <tbody>
            <tr>
              <td id="java">Java</td>
              <td><img src={java} alt="java" /></td>
            </tr>
            <tr>
              <td id="spring">Spring</td>
              <td><img src={spring} alt="spring" /></td>
            </tr>
            <tr>
              <td id="springboot">Spring Boot</td>
              <td><img src={springboot} alt="springboot" /></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Database Category */}
      <div className="skill-category">
        <h2>Database</h2>
        <table>
          <thead>
            {/* <tr>
              <th>Skill</th>
              <th>Logo</th>
            </tr> */}
          </thead>
          <tbody>
            <tr>
              <td id="sql">SQL</td>
              <td><img src={sql} alt="sql" /></td>
            </tr>
            <tr>
              <td id="oracle">Oracle</td>
              <td><img src={oracle} alt="oracle" /></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Other Category */}
      <div className="skill-category">
        <h2>Other</h2>
        <table>
          <thead>
            {/* <tr>
              <th>Tool</th>
              <th>Logo</th>
            </tr> */}
          </thead>
          <tbody>
            <tr>
              <td id="eclipse">Eclipse</td>
              
            </tr>
            <tr>
              <td id="maven">Maven</td>
             
            </tr>
            <tr>
              <td id="eclipse">Waterfall</td>
              
            </tr>
            <tr>
              <td id="eclipse">Agile</td>
              
            </tr>
            
            <tr>
              <td id="eclipse">Jira</td>
              
            </tr>
            <tr>
              <td id="eclipse">Apache Tomcat</td>
              
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  </div>
  );
}

export default Skillgpt;
