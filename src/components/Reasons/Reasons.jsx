import React from "react";
import "./Reason.css";
import image1 from "../../assets/image1.png";
// import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";

import whiteTick from "../../assets/whiteTick.png";
import { useState, useEffect } from "react";

function Reasons() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="Reasons" id="reasons">
      
      <div className="right-r">
        <div className="right-r-div">
          <span  className="span-yellow">Bizi Seçmeniz </span> <span className="bosluk-text">İçin </span> <span className="span-yellow">Nedenler</span>
        </div>
        <div className="details-r">
          <div className="textalign-left">
            <img src={whiteTick} alt=""></img>
            <span>Deneyimli Antrenörler</span>
          </div>
          <div className="textalign-left">
            <img src={whiteTick} alt="" />
            <span>Geniş Çalışma Alanı</span>
          </div>
          <div className="textalign-left">
            <img src={whiteTick} alt="" />
            <span>Profesyonel Vücut Analiz Cihazı </span>
          </div>
          <div className="textalign-left">
            <img src={whiteTick} alt="" />
            <span>Vitamin Bar Alanı - FItCafe </span>
          </div>
          <div className="textalign-left">
            <img src={whiteTick} alt="" />
            <span>Üst Düzey Hijyen </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reasons;
