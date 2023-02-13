import React from "react";
import { programsData } from "../../data/programsData";
import "./Program.css";
import RightArrow from "../../assets/rightArrow.png";

function Program() {
  const handleClick = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=<05434242415>&text=<FitBody!>",
      "_blank"
    );
  };
  return (
    <div className="Programs" id="programs">
      {/* header */}
      <div className="programs-header">
        <span className="bosluk-text">Fit bir Vücut için</span>
        <span>Programlarımızı</span>
        <span className="bosluk-text">İnceleyin</span>
      </div>
      {/* Program Kategorisi altındaki segmentler */}
      <div className="program-catagories">
        {programsData.map((program, i) => (
          <div onClick={handleClick} className="category" key={i}>
            {program.image}
            <span>{program.heading} </span>
            <span>{program.details} </span>
            <div className="join-now">
              <img src={RightArrow} alt="" />
              <span>Bize Katılın!</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Program;
