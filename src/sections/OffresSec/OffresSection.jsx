import BoxOffre from "../../Components/boxOffre/boxOffre";

const carTypes = [
  { id: 1, image: "suv.jpg", type: "SUV", color: "Gray", price: "$32,500" },
  { id: 2, image: "sedan.avif", type: "Sedan", color: "Black", price: "$28,900" },
  { id: 3, image: "superCar.avif", type: "SUPER car", color: "Cerulean", price: "$145,000" },
  { id: 4, image: "Convertible.jpg", type: "Convertible", color: "Red", price: "$57,300" },
  { id: 5, image: "Hatchback.jpg", type: "Hatchback", color: "Gray", price: "$21,700" },
  { id: 6, image: "Pickup_Truck.avif", type: "Pickup Truck", color: "Gray", price: "$42,800" },
  { id: 7, image: "van.avif", type: "Van", color: "White", price: "$26,400" },
  { id: 8, image: "sportCar.jpg", type: "Sports Car", color: "Gray", price: "$89,900" },
];

const OffresSection = () => {
  return (
    <section className="container py-5 overflow-hidden xl:h-screen snap-center">
      <div className="container">
        <div className="flex flex-col items-center w-full mb-5 text-center sm:text-left">
          <h3 className="mb-2 font-semibold">Discover</h3>
          <h1 className="mb-2 text-5xl font-bold uppercase">featured Prominently</h1>
          <p className="font-semibold text-gray-500">
            Explore our wide selection of high-quality cars
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-5 mx-auto sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:w-9/12 2xl:w-8/12 ">
          {carTypes.map((car) => (
            <BoxOffre car={car} key={car.id} index={car.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffresSection;
