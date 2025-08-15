/* eslint-disable no-unused-vars */
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import image1 from "../../assets/hero.avif";
import image2 from "../../assets/hero1.avif";
import image3 from "../../assets/hero2.jpg";

const listImages = [
  { id: 1, image: image1 },
  { id: 2, image: image2 },
  { id: 3, image: image3 },
];

const ImageHero = ({ isInView }) => {
  const [activeSpan, setActiveSpan] = useState(1);
  const controls = useAnimation();
  const controls2 = useAnimation();
  useEffect(() => {
    if (isInView) {
      async function sequence() {
        // First animate position and opacity
        await controls.start({
          scale: 1,
          transition: { duration: 1 },
        });

        // Then animate the image inside after scale animation is done
        await controls2.start({
          scale: 1,
          transition: { duration: 1 },
        });
      }
      sequence();
    } else {
      controls.start({
        scale: 0,
      });
      controls2.start({
        scale: 1.1,
      });
    }
  }, [controls, controls2, isInView]);
  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={controls}
        className="w-full xl:w-11/12 xl:max-w-5xl mx-auto mt-16 overflow-hidden rounded-[60px] md:rounded-[100px] shadow-lg group transition-all duration-200">
        {listImages.map((item) => (
          <motion.img
            key={item.id}
            initial={{ scale: 1.1 }}
            animate={controls2}
            src={item.image}
            alt="car"
            className={`${
              item.id === activeSpan ? "flex" : "hidden"
            } object-cover w-full h-40 transition-transform duration-300 ease-in-out md:h-70 xl:h-90 group-hover:scale-110`}
          />
        ))}
      </motion.div>
      <div className="flex justify-center gap-3 mt-6">
        {listImages.map((item) => (
          <span
            key={item.id}
            className={`${
              item.id === activeSpan ? "w-10 bg-black" : "w-6 bg-gray-400"
            } h-1  rounded-full cursor-pointer`}
            onClick={() => setActiveSpan(item.id)}></span>
        ))}
      </div>
    </>
  );
};

export default ImageHero;
