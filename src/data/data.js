import suv from "../assets/suv.jpg";
import Sedan from "../assets/sedan.avif";
import SUPERCar from "../assets/superCar.avif";
import Convertible from "../assets/Convertible.jpg";
import Hatchback from "../assets/Hatchback.jpg";
import Pickup from "../assets/Pickup_Truck.avif";
import van from "../assets/van.avif";
import sportCar from "../assets/sportCar.jpg";
import carlogo2 from "../assets/carlogo2.png";
import carlogo from "../assets/carlogo.png";
import carlogo3 from "../assets/carlogo3.png";
import carLogo4 from "../assets/carLogo4.png";
import carlogo5 from "../assets/carlogo5.png";
import carlogo6 from "../assets/carlogo6.png";
import carlogo7 from "../assets/carlogo7.png";
import carlogo8 from "../assets/carlogo8.png";
import carlogo9 from "../assets/carlogo8.png";

export const logos = [
  carlogo2,
  carlogo,
  carlogo3,
  carLogo4,
  carlogo5,
  carlogo6,
  carlogo7,
  carlogo8,
  carlogo9,
];
export const carTypes = [
  { id: 1, image: suv, type: "SUV", color: "Gray", price: "$32,500" },
  { id: 2, image: Sedan, type: "Sedan", color: "Black", price: "$28,900" },
  { id: 3, image: SUPERCar, type: "SUPER car", color: "Cerulean", price: "$145,000" },
  { id: 4, image: Convertible, type: "Convertible", color: "Red", price: "$57,300" },
  { id: 5, image: Hatchback, type: "Hatchback", color: "Gray", price: "$21,700" },
  { id: 6, image: Pickup, type: "Pickup Truck", color: "Gray", price: "$42,800" },
  { id: 7, image: van, type: "Van", color: "White", price: "$26,400" },
  { id: 8, image: sportCar, type: "Sports Car", color: "Gray", price: "$89,900" },
];

export const animationsArray = [
  { hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0 } },
  { hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0 } },
  { hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0 } },
  { hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0 } },
  { hidden: { opacity: 0, scale: 0 }, visible: { opacity: 1, scale: 1 } },
  { hidden: { opacity: 0, rotate: -360 }, visible: { opacity: 1, rotate: 0 } },
  { hidden: { opacity: 0, scale: 0, y: 100 }, visible: { opacity: 1, scale: 1, y: 0 } },
  { hidden: { opacity: 0, rotate: 360 }, visible: { opacity: 1, rotate: 0 } },
];

export const showAndHideAnimationMenu = {
  initial: { top: -10, right: 10, scaleX: 0, scaleY: 0, opacity: 0 },
  animateBottom: { top: 70, right: 0, scaleX: 1, scaleY: 1, opacity: 1 },
  animateTop: { top: -380, right: 0, scaleX: 1, scaleY: 1, opacity: 1 },
  exit: { top: 10, right: 10, scaleX: 0, scaleY: 0, opacity: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  style: { position: "absolute", left: 0, transformOrigin: "top right" },
};
