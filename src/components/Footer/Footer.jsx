import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="bosluk-text">Bize Katılmaya </span>
          <span>Ne Dersiniz?</span>
        </div>
        <div>
          <span>Hazır</span>
          <span className="bosluk-text"> Mısın?</span>
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
          frameBorder={0}
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
        />
      </div>
    </div>
  );
}

export default Footer;
