import Header from "../../Components/header/Header";
import ImageFooter from "../../Components/imageFooter/ImageFooter";

const FooterSection = () => {
  return (
    <section className="w-full py-5 overflow-hidden h-fit snap-center">
      <div className="container flex flex-col gap-14">
        <ImageFooter />
        <Header side="top" />
      </div>
    </section>
  );
};

export default FooterSection;
