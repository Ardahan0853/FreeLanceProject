import Bora from "./components/Footer/Bora/Bora";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero";
import Plans from "./components/Plans/Plans";
import Program from "./components/Program/Program";
import Reasons from "./components/Reasons/Reasons";
import Testimonials from "./components/Testimonials/Testimonials";

function HomePage() {
  return (
    <>
      <Hero />
      <Program />
      <Reasons />
      <Plans />
      <Testimonials />
      <Footer />
      <Bora />
    </>
  );
}

export default HomePage;
