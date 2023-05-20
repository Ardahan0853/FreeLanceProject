import Header from "./Header/Header";
import "./Hero.css";
import NumberCounter from "number-counter";

const transition = { type: "spring", duration: 3 };
const mobile = window.innerWidth <= 768 ? true : false;

function Hero() {
  const handleClick = () => {
    window.open("https://fitbody.team/fitcafe", "_blank");
  };
  return (
    <div className="hero" id="home">
      
      <div className="left-h">
      <Header />
        {/* slogan */}
        
        {/* Büyük Slogan */}
        <div className="hero-text">
          <div className="flex-span">
            <span className="bosluk-text">Hayalinizdeki </span>
            <span className='bosluk-text2'>Vücuda </span>
            <span className="bosluk-text-divelement">Kavuşma Zamanı</span>
          </div>
          <div className="hayal-vucud-div">
            <span className="hayal-vucud">
              Burada sizlere hayalinizdeki vücuda kavuşmanıza yardım ediyoruz.
              Siz de yapabilirsiniz!
            </span>
          </div>
        </div>
        {/* Figürler */}
        <div className="button-body">
          <div className="figures">
            <div>
              <span className="number-counter">
                <NumberCounter end={1600} start={1000} delay="6" preFix="+" />
              </span>
              <span className="span-color">M2</span>
            </div>
            <div>
              <span className="number-counter">
                <NumberCounter end={1000} start={500} delay="7" preFix="+" />
              </span>
              <span className="span-color">Aktif Üyelik</span>
            </div>
            <div>
              <span className="number-counter">
                <NumberCounter end={500} start={150} delay="5" preFix="+" />
              </span>
              <span className="span-color">Ekipman</span>
            </div>
          </div>
          {/*Butonlar  */}
          <div onClick={handleClick} className="hero-buttons">
            <button id="button2" className="btn">
              FITCAFE
            </button>
          </div>
        </div>
      </div>
      <div className="right-hs">
        
  
        
      
        
      </div>
    </div>
  );
}

export default Hero;
