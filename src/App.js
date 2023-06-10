import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSec from "./components/HeroSec";
import Benefits from "./components/Benefits";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Standards from "./components/Standards";
import ProtexturoApp from "./components/ProtexturoApp";
import Products from "./components/Products";
import ProductBenefits from "./components/ProductBenefits";
import Features from "./components/Features";
import StayConnected from "./components/StayConnected";
import ProtectFooter from "./components/ProtectFooter";
import GlobalConectivity from "./components/GlobalConectivity";
import FaqSection from "./components/FaqSection";
import HowEsimWorks from "./components/HowEsimWorks";
import Preloader from "./components/Preloader";
import TopBtn from "./components/TopBtn";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="bg_black overflow-x-hidden">
      <Preloader />
      <HeroSec />
      <Benefits />
      <Standards />
      <ProtexturoApp />
      <Products />
      <ProductBenefits />
      <HowEsimWorks />
      <Features />
      <StayConnected />
      <FaqSection />
      <GlobalConectivity />
      <ProtectFooter />
      <TopBtn />
    </div>
  );
}

export default App;
