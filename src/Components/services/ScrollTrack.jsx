/* eslint-disable no-unused-vars */
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const logos = [
  "/carlogo2.png",
  "/carlogo.png",
  "/carlogo3.png",
  "/carLogo4.png",
  "/carlogo5.png",
  "/carlogo6.png",
  "/carlogo7.png",
];

function ScrollTrack() {
  const controls = useAnimation();
  const trackRef = useRef();

  useEffect(() => {
    const firstHalfWidth = trackRef.current.scrollWidth / 3;

    const loop = async () => {
      while (true) {
        await controls.start({
          x: -firstHalfWidth,
          transition: { duration: 20, ease: "linear" },
        });
        controls.set({ x: 0 }); // instant reset
      }
    };

    loop();
  }, [controls]);

  return (
    <div className="w-full overflow-hidden h-ful fade-edges ">
      <motion.div ref={trackRef} className="flex items-center" animate={controls}>
        {logos.map((src, i) => (
          <img key={i} src={src} className="h-[60px] mx-10" />
        ))}
        {logos.map((src, i) => (
          <img key={`dup-${i}`} src={src} className="h-[60px] mx-10" />
        ))}
      </motion.div>
    </div>
  );
}

export default ScrollTrack;
