import { useState } from "react";
/* eslint-disable no-unused-vars */
import { AnimatePresence, motion } from "motion/react";
import { IoMenu } from "react-icons/io5";
import Logo from "../../assets/logo.png";
import showAndHideAnimationMenu from "../../data/data";

const linksList = ["Home", "Services", "About Us", "Benefits", "Our Solutions"];

const headerVariants = {
  initial: {
    scale: 2,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};
const logoVariants = {
  initial: {
    rotate: 0,
  },
  animate: {
    rotate: 360,
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const Header = ({ side }) => {
  const [activeLink, setActiveLink] = useState("Home");
  const [MenuisOpen, setMenuIsOpen] = useState(false);
  return (
    <motion.div
      className="w-full bg-white flex items-center justify-between px-5 py-2.5 rounded-full relative"
      variants={headerVariants}
      animate="animate"
      initial="initial">
      <div className="flex items-center gap-2.5 cursor-pointer">
        <motion.img
          src={Logo}
          alt="logo"
          className="w-7 md:w-10"
          variants={logoVariants}
          animate="animate"
          initial="initial"
        />
        <span className="text-[#419fe6] font-bold font-['Bebas_Neue'] text-xl md:text-3xl">
          DRIVEHUB
        </span>
      </div>
      <ul className="items-center justify-between hidden w-8/12 lg:flex">
        {linksList.map((link, index) => (
          <li
            key={index}
            className={`${
              activeLink === link
                ? "bg-gray-100 py-2 px-3 rounded-2xl font-bold"
                : "text-gray-500 font-medium hover:scale-110"
            }  cursor-pointer transition-all duration-200`}
            onClick={() => setActiveLink(link)}>
            {link}
          </li>
        ))}
        <li className="bg-[#419fe6] text-white font-bold px-4 py-2 rounded-full cursor-pointer hover:bg-[#415ae6] hover:scale-105 transition-all duration-200 ">
          Contact Us
        </li>
      </ul>
      <span className="flex cursor-pointer lg:hidden" onClick={() => setMenuIsOpen(!MenuisOpen)}>
        <IoMenu className="text-[#419fe6] size-7 md:size-9" />
      </span>
      <AnimatePresence>
        {MenuisOpen && (
          <motion.ul
            initial={showAndHideAnimationMenu.initial}
            animate={
              side === "top"
                ? showAndHideAnimationMenu.animateTop
                : showAndHideAnimationMenu.animateBottom
            }
            exit={showAndHideAnimationMenu.exit}
            transition={showAndHideAnimationMenu.transition}
            style={showAndHideAnimationMenu.style}
            className="absolute z-50 flex flex-col items-center justify-center gap-5 px-5 py-10 bg-white shadow-lg lg:hidden rounded-xl">
            {linksList.map((link) => (
              <li
                key={link}
                className={`${
                  activeLink === link
                    ? "bg-gray-100 py-2 px-3 rounded-2xl font-bold"
                    : "text-gray-500 font-medium hover:scale-110"
                } cursor-pointer transition-all duration-200`}
                onClick={() => {
                  setActiveLink(link);
                  setMenuIsOpen(!MenuisOpen);
                }}>
                {link}
              </li>
            ))}
            <li
              className="bg-[#419fe6] text-white font-bold px-4 py-2 rounded-full cursor-pointer hover:bg-[#415ae6] hover:scale-105 transition-all duration-200"
              onClick={() => setMenuIsOpen(false)}>
              Contact Us
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Header;
