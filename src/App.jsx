import Offres from "./sections/OffresSection/OffresSection";
import HeroSection from "./sections/heroSection/HeroSection";
import PickCarSecion from "./sections/pickCarSection/PickCarSecion";
import FooterSection from "./sections/FooterSection/FooterSection";
import ServicesSection from "./sections/servicesSection/servicesSection";

const App = () => {
  return (
    <div className="overflow-hidden App">
      <HeroSection />
      <ServicesSection />
      <Offres />
      <PickCarSecion />
      <FooterSection />
    </div>
  );
};

export default App;
