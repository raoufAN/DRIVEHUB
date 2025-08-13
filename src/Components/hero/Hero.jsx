/* eslint-disable no-unused-vars */
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import ImageHero from "./ImageHero";
const Hero = () => {
  const controls = useAnimation();

  useEffect(() => {
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
  }, [controls]);
  return (
    <div className="w-full py-20 xl:px-4">
      <div className="flex flex-wrap justify-center gap-6 font-extrabold text-5xl md:text-6xl xl:text-[6rem] leading-[1] tracking-tight">
        <motion.span
          initial={{ x: -200, opacity: 1 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 2,
            },
          }}>
          YOUR
        </motion.span>
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            transition: {
              duration: 2,
            },
          }}>
          NEXT
        </motion.span>
        <motion.span initial={{ x: 200, opacity: 0.5 }} animate={controls}>
          CAR
        </motion.span>
      </div>

      <ImageHero />
    </div>
  );
};

export default Hero;
