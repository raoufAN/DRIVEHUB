/* eslint-disable no-unused-vars */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import BoxOffre from "../../Components/boxOffre/boxOffre";
import { carTypes } from "../../data/data";

const OffresSection = () => {
  const ref = useRef();
  const isInView = useInView(ref);
  return (
    <section className="py-5 overflow-hidden xl:h-screen snap-center">
      <div className="container">
        <div className="flex flex-col items-center w-full mb-5 text-center sm:text-left">
          <motion.h3
            animate={{
              scale: isInView ? 1 : 5,
              y: isInView ? 0 : 70,
              transition: { duration: 0.5 },
            }}
            className="mb-2 font-semibold">
            Discover
          </motion.h3>

          <motion.h1
            animate={{
              scale: isInView ? 1 : 0,
              transition: { duration: 0.5 },
            }}
            className="mb-2 text-5xl font-bold uppercase">
            featured Prominently
          </motion.h1>
          <motion.p
            animate={{
              scale: isInView ? 1 : 0,
              transition: { duration: 0.5 },
            }}
            className="font-semibold text-gray-500">
            Explore our wide selection of high-quality cars
          </motion.p>
        </div>

        <div
          className="grid w-full grid-cols-1 gap-5 mx-auto sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:w-9/12 2xl:w-8/12"
          ref={ref}>
          {carTypes.map((car, i) => (
            <BoxOffre car={car} key={car.id} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffresSection;
