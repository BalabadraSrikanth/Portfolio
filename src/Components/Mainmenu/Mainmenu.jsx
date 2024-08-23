import React from 'react';
import { Link } from 'react-scroll';
import './Mainmenu.css';

function Mainmenu() {
  return (
    <nav >
      <div className="mainmenu">
      <ul>
        <li className='homee'>
          <Link to="home" smooth={true} duration={500}>Home</Link>
        </li>
        <li className='aboutmee'>
          <Link to="aboutme" smooth={true} duration={500}>About Me</Link>
        </li>
        <li className='education'>
          <Link to="education" smooth={true} duration={500}>Education</Link>
        </li>
        <li className='skillss'>
          <Link to="skills" smooth={true} duration={500}>Skills</Link>
        </li>
        <li className='projectss'>
          <Link to="project" smooth={true} duration={500}>Projects</Link>
        </li>
        <li className='contactt'>
          <Link to="contact" smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>
      </div>
    </nav>
  );
}

export default Mainmenu;
