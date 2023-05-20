import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";


import { Link } from "react-scroll";
function Header() {
  
  
  return (
    <div className="header">
      <img src={Logo} alt="Fitbodyclub-Logo" className="logo" />
      
        <ul className="header-menu">
          <li>
            <Link
              to="home"
              activeClass="active"
              spy={true}
              smooth={true}
              
            >
              Anasayfa
            </Link>
          </li>
          <li>
            <Link
              
              to="programs"
              spy={true}
              smooth={true}
            >
              Programlar
            </Link>
          </li>
          <li>
            <Link
              
              to="plans"
              spy={true}
              smooth={true}
            >
              Planlar
            </Link>
          </li>
        </ul>
      
    </div>
  );
}

export default Header;
