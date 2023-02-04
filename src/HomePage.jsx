import Bora from "./components/Footer/Bora/Bora";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero";
import Plans from "./components/Plans/Plans";
import Program from "./components/Program/Program";
import Reasons from "./components/Reasons/Reasons";
import Testimonials from "./components/Testimonials/Testimonials";
import { useState, useEffect } from "react";

function HomePage() {
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
    <>
      <Hero />
      {isDesktop && <Reasons />}
      <Plans />
      <Testimonials />
      <Program />
      <Footer />
      <Bora />
    </>
  );
}

export default HomePage;
