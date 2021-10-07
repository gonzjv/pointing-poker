import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer" >
      <div className="wrapper">
        <ul className="footer-list">
          <li className="time"><time>2021</time></li>
          <li className="github-profiles">
            <a href="https://github.com/gonzjv">
            <img src="../images/github.svg" alt="github profile" />Github</a>
            <a href="https://github.com/Eansable"><img src="../images/github.svg" alt="github profile" />Github</a>
            <a href="https://github.com/makhitr">  <img src="../images/github.svg" alt="github profile" />Github</a>
          </li>
          <li className="school">
            <a href="https://rs.school/react/" target="_blank">
              <img className="school-logo" src="https://rs.school/images/rs_school_js.svg" alt="RS school" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}