import { useRef } from "react";
import imageFooter from "../../assets/footer.webp";
/* eslint-disable no-unused-vars */
import { motion, useInView } from "motion/react";
import { delay } from "motion";

const ImageFooter = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  const textVariants = {
    initial: {
      x: 50,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        staggerChildren: 1,
        duration: 1,
      },
    },
  };
  return (
    <motion.div
      className="w-full  mx-auto mt-5 md:mt-16 overflow-hidden rounded-[60px] md:rounded-[100px] shadow-lg group transition-all duration-200 relative"
      ref={ref}
      animate={
        isInView
          ? {
              scale: 1,
              transition: {
                duration: 1,
              },
            }
          : { scale: 0 }
      }>
      <motion.img
        animate={
          isInView
            ? {
                scale: 1,
                transition: {
                  duration: 1,
                  delay: 1,
                },
              }
            : { scale: 1.3 }
        }
        src={imageFooter}
        alt="car"
        loading="lazy"
        className={`object-cover w-full h-60  transition-transform duration-300 ease-in-out md:h-70 xl:h-90 group-hover:scale-110`}
      />
      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
        className="absolute top-1/2 translate-y-[-50%] left-10 flex flex-col  gap-5 text-white">
        <motion.h1 variants={textVariants} className="text-4xl font-bold sm:text-6xl">
          Free Test Drive
        </motion.h1>
        <motion.p variants={textVariants} className="w-11/12 sm:w-9/12">
          Sign up for early access and be the first to experience our upcoming car modeles
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default ImageFooter;
