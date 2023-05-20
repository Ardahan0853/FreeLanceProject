import React from "react";
import "./Footer.css";
import instagram from "../../assets/instagram.png";
import whatsapp from "../../assets/WhatsApp.png";


function Footer() {
  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        
        <div>
          {/* <span className="bosluk-text">Lütfen </span>
          <span>Bize</span> */}
          <hr />
        </div>
        <div className="d-flex">
        
          <span></span>
          <span className="bosluk-text"> Aklınıza Takılan Her Şey İçin</span>
          <div className="social">
          

          
          <a target={"blank"} href="https://www.instagram.com/fitbodyyclub/">
            <img height={"33rem"} src={instagram} alt="" />
          </a>
          <div className="d-flex-2">
            <img style={{cursor:"default"}} height={"36rem"} src={whatsapp} alt="" />
            <h6>+90 543 424 24 16</h6>
          </div>
          
          
          
        </div>
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
