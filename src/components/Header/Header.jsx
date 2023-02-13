import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import bars from "../../assets/bars.png";
import { useState } from "react";
import { Link } from "react-scroll";
function Header() {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="header">
      <img src={Logo} alt="Fitbodyclub-Logo" className="logo" />
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "8px",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={bars}
            style={{ width: "1.5rem", height: "1.5rem" }}
            alt=""
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              to="home"
              activeClass="active"
              spy={true}
              smooth={true}
              onClick={() => setMenuOpened(false)}
            >
              Anasayfa
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="Testimonials"
              spy={true}
              smooth={true}
            >
              İmkanlar
            </Link>
          </li>
          <Link
            onClick={() => setMenuOpened(false)}
            to="reasons"
            spy={true}
            smooth={true}
          >
            Olanaklar
          </Link>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="programs"
              spy={true}
              smooth={true}
            >
              Programlar
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="plans"
              spy={true}
              smooth={true}
            >
              Planlar
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Header;
