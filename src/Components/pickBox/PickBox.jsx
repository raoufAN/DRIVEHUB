import { useRef } from "react";
/* eslint-disable no-unused-vars */
import { motion, useInView } from "framer-motion";

const PickBox = ({ data }) => {
  const ref = useRef();
  const isInView = useInView(ref);
  return (
    <motion.div
      className={`relative flex flex-col items-center p-5 mt-24 cursor-pointer rounded-4xl ${
        data.id === 2 ? "bg-white -translate-y-6 shadow-2xl" : ""
      }`}
      ref={ref}
      animate={isInView ? { scale: 1 } : { scale: 0 }}
      transition={{ duration: 1 }}>
      <div className="absolute p-2 text-white bg-black rounded-full -top-10">
        <img src={data.image} alt="process" className="w-20 rounded-full" />
      </div>
      <h1 className="mb-2 text-2xl font-bold mt-15">{data.name}</h1>
      <p className="mb-4 font-semibold text-center text-gray-500">{data.desc}</p>
      <button className="bg-[#419fe6] text-white font-bold px-4 py-2 rounded-full cursor-pointer hover:bg-[#415ae6] hover:scale-105 transition-all duration-200">
        Learn More
      </button>
    </motion.div>
  );
};

export default PickBox;
