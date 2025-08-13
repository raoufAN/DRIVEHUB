import Offres from "./sections/OffresSec/OffresSection";
import Services from "./Components/services/Services";
import HeroSection from "./sections/heroS/HeroSection";

const App = () => {
  return (
    <div className="App">
      <HeroSection />
      <Services />
      <Offres />
    </div>
  );
};

export default App;
