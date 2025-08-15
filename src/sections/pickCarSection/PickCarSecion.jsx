import PickBox from "../../Components/pickBox/PickBox";
import process from "../../assets/process.png";
import checkmark from "../../assets/checkmark.png";
import secure from "../../assets/secure.png";
import { useRef } from "react";
/* eslint-disable no-unused-vars */
import { motion, useInView } from "framer-motion";

const pickOfferArray = [
  {
    id: 1,
    name: "Easy Process",
    desc: "At Unique Car, we offre a range of benefits you purchase a car from us, cars comes with a warranty to give you peace of mind, and our exceptional you",
    image: process,
  },
  {
    id: 2,
    name: "EFast Approval",
    desc: "At Unique Car, we offre a range of benefits you purchase a car from us, cars comes with a warranty to give you peace of mind, and our exceptional you",
    image: checkmark,
  },
  {
    id: 3,
    name: "Secure Delivery",
    desc: "At Unique Car, we offre a range of benefits you purchase a car from us, cars comes with a warranty to give you peace of mind, and our exceptional you",
    image: secure,
  },
];

const PickCarSecion = () => {
  const ref = useRef();
  const isInView = useInView(ref);
  return (
    <div className="py-20 overflow-hidden snap-center">
      <div className="container flex flex-col items-center justify-center">
        <div className="flex flex-col items-center" ref={ref}>
          <motion.h3
            animate={isInView ? { scale: 1 } : { scale: 2 }}
            transition={{ duration: 1 }}
            className="mb-2 font-semibold">
            Find Your Dream Car
          </motion.h3>
          <motion.h1
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 1 }}
            className="mb-2 text-5xl font-bold text-center uppercase">
            pick your car
          </motion.h1>
        </div>
        <div className="grid w-full grid-cols-1 gap-5 mx-auto sm:grid-cols-2 md:grid-cols-3 2xl:w-8/12">
          {pickOfferArray.map((item) => (
            <PickBox data={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PickCarSecion;
