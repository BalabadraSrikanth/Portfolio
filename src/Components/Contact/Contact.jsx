import React from 'react';
import './Contact.css'; // Ensure to create and style this CSS file accordingly

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p>Feel free to contact me through any of the following methods:</p>
      <ul>
        <li>Email: <a href="mailto:srikanthbalabadra0@gmail.com">srikanthbalabadra0@gmail.com</a></li>
        <li>Location:</li>
          <li id='location'>Malkajgiri, Hyderabad </li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/srikanthbalabadra" target="_blank" rel="noopener noreferrer">linkedin.com/in/srikanthbalabadra</a></li>
        <li>GitHub: <a href="https://github.com/BalabadraSrikanth" target="_blank" rel="noopener noreferrer">github.com/srikanthbalabadra</a></li>
      </ul>
    </div>
  );
};

export default Contact;
