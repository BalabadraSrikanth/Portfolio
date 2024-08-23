

import './Education.css';

function Education() {
  return (
    <>
      <h1 className="heading">Education</h1>
      

      <table className="education-table">
        <tbody>
          <tr>
            <td className="degree">Bachelor of Technology (B.Tech)</td>
            <td>
               <a href='https://www.geethanjaliinstitutions.com/engineering/'>
                Geethanjali College of Engineering and Technology (2020 - 2023)<br></br>
                <br></br>
               </a>MAJOR :-<p id='major'>  Computer Science and Engineering </p>
               </td>
          </tr>
          <tr>
            <td className="degree">Diploma in Engineering</td>
            <td>
<a href='https://www.bing.com/search?q=samskruti+college+of+engineering+%26+technology&qs=HS&pq=sam&sc=10-3&cvid=8E809904E2284C01AD088F9BADE3F393&FORM=QBRE&sp=1&ghc=1&lq=0'>
            Samskruti College of Engineering & Technology (2017 - 2020)</a>
            <br></br>    <br></br>
            MAJOR :-<p id='major'>  Computer Engineering </p>

            </td>
          </tr>
          <tr>
            <td className="degree" rowSpan={2}>Schooling (SSC)</td>
            <td>Nalanda High School (8th - 10th)</td>
          </tr>
          <tr>
            
            <td> Rajadhani High School (5th - 7th)</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Education;
