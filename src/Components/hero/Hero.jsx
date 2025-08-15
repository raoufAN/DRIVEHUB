/* eslint-disable no-unused-vars */
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import ImageHero from "./ImageHero";
const Hero = () => {
  const controls = useAnimation();
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-200px", once: false });

  useEffect(() => {
    if (isInView) {
      async function sequence() {
        // First animate position and opacity
        await controls.start({
          x: 0,
          opacity: 1,
          transition: { duration: 2 },
        });

        // Then animate color after position animation is done
        await controls.start({
          color: "#419fe6", // target color
          transition: { duration: 0.5 },
        });
      }

      sequence();
    } else {
      // Reset when out of view
      controls.start({
        x: 200,
        opacity: 0.5,
        color: "#000", // back to default color if you want
      });
    }
  }, [controls, isInView]);
  return (
    <div className="w-full py-20 xl:px-4" ref={ref}>
      <div className="flex flex-wrap justify-center gap-6 font-extrabold text-5xl md:text-6xl xl:text-[6rem] leading-[1] tracking-tight">
        <motion.span
          animate={
            isInView
              ? {
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 1,
                  },
                }
              : { x: -200, opacity: 1 }
          }>
          YOUR
        </motion.span>
        <motion.span
          animate={
            isInView
              ? {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    duration: 1,
                  },
                }
              : { scale: 0, opacity: 0 }
          }>
          NEXT
        </motion.span>
        <motion.span initial={{ x: 200, opacity: 0.5 }} animate={controls}>
          CAR
        </motion.span>
      </div>
      <ImageHero isInView={isInView} />
    </div>
  );
};

export default Hero;
