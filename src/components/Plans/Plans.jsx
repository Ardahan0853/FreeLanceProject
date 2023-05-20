import React from "react";
import { plansData } from "../../data/plansData";
import "./Plans.css";
import whiteTick from "../../assets/whiteTick.png";

function Plans() {
  const handleClick = () => {
    window.open(
      "https://www.instagram.com/fitbodyyclub/",
      "_blank"
    );
  };

  return (
    <div className="plans-container" id="plans">
      <div className="blur plan1"></div>
      <div className="blur plan2"></div>
      <div className="programs-header" style={{ gap: "4rem" }}>
        {/* <span className="bosluk-text">aylık </span> */}
        <span> Paketler</span>
        {/* <span className="bosluk-text">ücretleri</span> */}
      </div>
      {/* Planlar */}
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>{plan.price}₺</span>

            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <span>
              {i === plansData.length - 1
                ? "Daha fazlası için"
                : "Daha fazlası için"}
            </span>
            <button onClick={handleClick} className="btn">
              Tıklayın!
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;
