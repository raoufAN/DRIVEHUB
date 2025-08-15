import ScrollTrack from "../../Components/services/ScrollTrack";
import Services from "../../Components/services/Services";
/* eslint-disable no-unused-vars */
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const listVariant = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const TwoSecVariants = {
  initial: {
    x: -100,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const BigImageVariants = {
  initial: {
    x: 100,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
const smallImageVariant = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
    transition: {
      delay: 1,
      duration: 1,
    },
  },
};

const ServicesSection = () => {
  const ref = useRef();
  const imageRef = useRef();

  const isInView = useInView(ref, { margin: "-200px" });
  const ImageIsInView = useInView(imageRef, { margin: "-20px" });

  return (
    <section className="w-full overflow-hidden snap-center" ref={ref}>
      <div className="container relative flex items-center justify-center h-full">
        <div className="w-full h-[100px] absolute top-0 left-0 right-0">
          <ScrollTrack />
        </div>
        <Services />
      </div>
    </section>
  );
};

export default ServicesSection;
