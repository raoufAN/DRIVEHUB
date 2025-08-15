import { FaCar } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";
/* eslint-disable no-unused-vars */
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import wheels from "../../assets/wheels.jpg";
import steeringWheel from "../../assets/steeringWheel.jpg";
import service1 from "../../assets/service1.jpg";

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

const Services = () => {
  const ref = useRef();
  const imageRef = useRef();

  const isInView = useInView(ref, { margin: "-200px" });
  const ImageIsInView = useInView(imageRef, { margin: "-20px" });

  return (
    <div
      className="flex flex-col gap-y-20 lg:flex-row items-center justify-between my-[calc(100px+40px)]"
      ref={ref}>
      <motion.div
        variants={listVariant}
        animate={isInView ? "animate" : "initial"}
        className="w-full lg:w-[55%] flex flex-col space-y-5">
        <motion.h1
          variants={listVariant}
          className="w-full text-center md:text-left font-bold uppercase text-5xl 2xl:text-7xl pr-2.5">
          Find your dream car today
        </motion.h1>
        <motion.p
          variants={listVariant}
          className="pl-1 font-semibold text-center text-gray-500 md:text-left xl:w-8/12">
          At Unique Car,We offer a wide selection of high-quality vehicles to suit every style and
          budget,Browse our inventory
        </motion.p>
        <motion.div
          variants={TwoSecVariants}
          animate={isInView ? "animate" : "initial"}
          className="w-full px-2.5 flex flex-col md:flex-row items-center gap-5 text-center md:text-left">
          <motion.div variants={TwoSecVariants} className="flex flex-col  xl:w-[30%]">
            <div className="flex items-center justify-center md:justify-start">
              <FaCar className="p-2 mr-2 text-white bg-black rounded-full size-[35px]" />
              <h5 className="text-lg font-bold">Quality Cars</h5>
            </div>
            <div>
              <p className="mt-3 font-semibold text-gray-500">
                Explore our collection of top-notch vehicles that Combine
              </p>
            </div>
          </motion.div>
          <div variants={TwoSecVariants} className="flex flex-col xl:w-[30%]">
            <div className="flex items-center justify-center md:justify-start">
              <RiCustomerService2Line className="p-2 mr-2 text-white bg-black rounded-full size-[35px]" />
              <h5 className="text-lg font-bold">Exception Service</h5>
            </div>
            <div>
              <p className="mt-3 font-semibold text-gray-500">
                Experience our personlized approch to car buying
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={TwoSecVariants}
          animate={isInView ? "animate" : "initial"}
          className="flex items-center justify-center md:justify-start gap-2.5">
          <motion.button
            variants={TwoSecVariants}
            className="bg-[#419fe6] text-white font-bold px-4 py-2 rounded-full cursor-pointer hover:bg-[#415ae6] hover:scale-105 transition-all duration-200 ">
            Sign Up
          </motion.button>
          <motion.a variants={TwoSecVariants} href="/" className="font-bold">
            Learn More
          </motion.a>
        </motion.div>
      </motion.div>
      <motion.div
        ref={imageRef}
        variants={BigImageVariants}
        animate={ImageIsInView ? "animate" : "initial"}
        className="w-full lg:w-[40%] relative">
        <img src={service1} alt="car" className="w-full h-full rounded-[40px]" />
        <motion.div
          variants={smallImageVariant}
          animate={ImageIsInView ? "animate" : "initial"}
          className="absolute bottom-[-40px] left-[100px]  md:bottom-[-60px] md:left-[180px] p-1 bg-white rounded-full w-22 h-22 md:w-30 md:h-30">
          <img src={wheels} alt="wheels" className="object-cover w-full h-full rounded-full" />
        </motion.div>
        <motion.div
          variants={smallImageVariant}
          animate={ImageIsInView ? "animate" : "initial"}
          className="absolute bottom-[-40px] md:bottom-[-60px] md:left-[30px] p-1 bg-white rounded-full w-22 h-22 md:w-30 md:h-30">
          <img
            src={steeringWheel}
            alt="steeringWheel"
            className="object-cover w-full h-full rounded-full"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
