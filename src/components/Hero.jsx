import Header from "./Header/Header";
import "./Hero.css";
import hero_image from "../assets/hero_image.png";
import hero_image_back from "../assets/hero_image_back.png";
import Heart from "../assets/heart.png";
import Calories from "../assets/calories.png";
import NumberCounter from "number-counter";
import { motion } from "framer-motion";

const transition = { type: "spring", duration: 3 };
const mobile = window.innerWidth <= 768 ? true : false;

function Hero() {
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* slogan */}
        <div className="slogan">
          <motion.div
            initial={{ left: mobile ? "165px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>Sporun Kalbi burada atıyor 💛💛</span>
        </div>
        {/* Büyük Slogan */}
        <div className="hero-text">
          <div>
            <span className="bosluk-text">Hayalinizdeki </span>
            <span>Vücuda</span>
          </div>
          <div>
            <span>Kavuşma Zamanı</span>
          </div>
          <div>
            <span>
              Burada sizlere hayalinizdeki vücuda kavuşmanıza yardım ediyoruz.
              Sen de yapabilirsin!
            </span>
          </div>
        </div>
        {/* Figürler */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={500} start={400} delay="4" preFix="+" />
            </span>
            <span>metrekare</span>
          </div>
          <div>
            <span>
              <NumberCounter end={2000} start={1900} delay="5" preFix="+" />
            </span>
            <span>Üyelik</span>
          </div>
          <div>
            <span>
              <NumberCounter end={200} start={150} delay="3" preFix="+" />
            </span>
            <span>Ekipman</span>
          </div>
        </div>
        {/*Butonlar  */}
        <div className="hero-buttons">
          <a href={"https://fitbodyclub.netlify.app/"}>
            <button id="button2" className="btn">
              FitBodyCafe
            </button>
          </a>
        </div>
      </div>
      <div className="right-h">
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116bpm</span>
        </motion.div>
        {/* Hero images */}
        <img src={hero_image} alt="" className="hero-image" id="hero_image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back}
          alt=""
          className="hero-image-back"
          id="hero_image_back"
        />
        {/* Kalori */}
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="" />
          <div>
            <span>Kalori</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
