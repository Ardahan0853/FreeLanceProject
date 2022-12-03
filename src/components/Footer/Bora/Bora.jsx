import React from "react";
import Github from "../../../assets/github.png";
import LınkedIn from "../../../assets/linkedin.png";
import instagram from "../../../assets/instagram.png";

import "./Bora.css";

function Bora() {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social">
          <a target={"blank"} href="https://github.com/kececibora">
            <img height={"36rem"} src={Github} alt="" />
          </a>
          <img src={LınkedIn} alt="" />
          <img src={instagram} alt="" />
        </div>
      </div>
      <div className="blur blur-f1"></div>
      <div className="blur blur-f2"></div>
    </div>
  );
}

export default Bora;
