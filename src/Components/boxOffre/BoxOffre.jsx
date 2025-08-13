/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const animations = [
  { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }, // slide up
  { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } }, // slide down
  { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }, // slide left
  { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }, // slide right
  { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }, // zoom
  { hidden: { opacity: 0, rotate: -10 }, visible: { opacity: 1, rotate: 0 } }, // rotate in
  { hidden: { opacity: 0, scale: 0.5, y: 50 }, visible: { opacity: 1, scale: 1, y: 0 } }, // zoom + slide
  { hidden: { opacity: 0, x: -80, rotate: -5 }, visible: { opacity: 1, x: 0, rotate: 0 } }, // swing in
];

const BoxOffre = ({ car, index }) => {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.getBoundingClientRect().height);
    }
  }, []);
  const isInView = useInView(ref, { margin: `-${height / 2}px`, once: true });

  const anim = animations[index % animations.length];

  return (
    <motion.div
      ref={ref}
      className="flex flex-col bg-white shadow-2xl cursor-pointer rounded-4xl group hover:-translate-y-1.5 transition-transform duration-300"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={anim}
      transition={{ duration: 0.6, ease: "easeOut" }}>
      <div className="relative w-full overflow-hidden shadow-2xl rounded-4xl">
        <img
          src={car.image}
          alt={car.type}
          className="object-cover w-full transition-transform duration-300 rounded-3xl h-80 sm:h-60 group-hover:scale-105"
        />
        <img
          src="/bag.png"
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
