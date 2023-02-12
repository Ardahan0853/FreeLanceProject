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
      {isDesktop && (
        <div className="left-r">
          <img src={image1} alt="" />
          <img src={image3} alt="" />
          <img src={image4} alt="" />
        </div>
      )}
      <div className="right-r">
        <span>Bizi Seçmeniz</span>
        <div>
          <span className="bosluk-text">İçin </span>
          <span>Nedenler</span>
        </div>
        <div className="details-r">
          <div>
            <img src={whiteTick} alt=""></img>
            <span>Deneyimli Antrenör</span>
          </div>
          <div>
            <img src={whiteTick} alt="" />
            <span>Geniş Çalışma Alanı</span>
          </div>
          <div>
            <img src={whiteTick} alt="" />
            <span>Son Teknoloji Ekipmanlar</span>
          </div>
          <div>
            <img src={whiteTick} alt="" />
            <span>Saygılı Bir Ortam</span>
          </div>
          <div>
            <img src={whiteTick} alt="" />
            <span>Vitamin Bar Alanı - FitCafe </span>
          </div>
          <div>
            <img src={whiteTick} alt="" />
            <span>Üst Düzey Hijyen </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reasons;
