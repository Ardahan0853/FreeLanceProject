import React from "react";
import instagram from "../../../assets/instagram.png";
import whatsapp from "../../../assets/WhatsApp.png";

import "./Bora.css";

function Bora() {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social">
          <a target={"blank"} href="https://www.instagram.com/fitbodyyclub/">
            <img height={"36rem"} src={instagram} alt="" />
          </a>
          <a
            target={"blank"}
            href="https://api.whatsapp.com/send?phone=<05434242415>&text=<FitBody!>"
          >
            <img height={"36rem"} src={whatsapp} alt="" />
          </a>
        </div>
      </div>
      <div className="blur blur-f1"></div>
      <div className="blur blur-f2"></div>
    </div>
  );
}

export default Bora;
