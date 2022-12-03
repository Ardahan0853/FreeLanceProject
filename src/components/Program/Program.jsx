import React from "react";
import { programsData } from "../../data/programsData";
import "./Program.css";
import RightArrow from "../../assets/rightArrow.png";

function Program() {
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
          <div className="category" key={i}>
            {program.image}
            <span>{program.heading} </span>
            <span>{program.details} </span>
            <div className="join-now">
              <img src={RightArrow} alt="" />
              <span>Katıl Bize!</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Program;
