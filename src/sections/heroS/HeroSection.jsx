import Header from "../../Components/header/Header";
import Hero from "../../Components/hero/Hero";

const HeroSection = () => {
  return (
    <section className="w-full pt-5 overflow-hidden h-fit snap-center">
      <div className="container">
        <Header />
        <Hero />
      </div>
    </section>
  );
};

export default HeroSection;
