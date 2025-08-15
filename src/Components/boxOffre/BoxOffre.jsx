/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import bag from "../../assets/bag.png";
import { animationsArray } from "../../data/data";

const BoxOffre = ({ car, index }) => {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.getBoundingClientRect().height);
    }
  }, [height]);
  const isInView = useInView(ref, { margin: `-${height / 2}px`, once: false });

  const anim = animationsArray[index % animationsArray.length];

  return (
    <motion.div
      ref={ref}
      className="flex flex-col bg-white shadow-md cursor-pointer rounded-4xl group hover:-translate-y-1.5 transition-transform duration-300"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={anim}
      transition={{ duration: 0.5, ease: "easeOut" }}>
      <div className="relative w-full overflow-hidden shadow-2xl rounded-4xl">
        <img
          src={car.image}
          alt={car.type}
          className="object-cover w-full transition-transform duration-300 rounded-3xl h-80 sm:h-60 group-hover:scale-105"
        />
        <img
          src={bag}
          alt="bag"
          className="absolute z-10 w-10 bg-white rounded-full bottom-2 right-2 p-2.5 cursor-pointer hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="flex flex-col items-center justify-center p-5">
        <h3 className="text-xl font-bold uppercase">{car.type}</h3>
        <p className="font-semibold text-gray-400">{car.color}</p>
        <span className="text-xl font-bold">{car.price}</span>
      </div>
    </motion.div>
  );
};

export default BoxOffre;
