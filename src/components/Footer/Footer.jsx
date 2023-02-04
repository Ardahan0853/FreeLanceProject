import React from "react";
import "./Footer.css";
import WhatsAppButton from "./WhatsAppButton.jsx";

function Footer() {
  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          {/* <span className="bosluk-text">Lütfen </span>
          <span>Bize</span> */}
        </div>
        <div>
          <span></span>
          <span className="bosluk-text"> Aklınıza Takılan Her Şey İçin</span>
          <span>
            <WhatsAppButton />
          </span>
        </div>
      </div>

      <div className="right-j gmap_canvas mapouter map">
        <iframe
          allow="fullscreen"
          title="fitbody"
          width={427}
          height={198}
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=Sincan%20Fitbody&t=&z=15&ie=UTF8&iwloc=&output=embed"
        />
      </div>
    </div>
  );
}

export default Footer;
