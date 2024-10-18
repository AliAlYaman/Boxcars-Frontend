import { useState } from "react";
import { CarCard } from "./CarCard";

export const Listings = () => {

    const cars = [
        { id: 1, src: "assets/images/toyota.png", title: "G-Class", subtitle: "3.5 D5 PowerPulse Momentum 5dr", miles: "20", petrol: "petrol", gear: "Automatic", price: "$40,000" },
        { id: 2, src: "assets/images/gcl.png", title: "G-Class", subtitle: "3.5 D5 PowerPulse Momentum 5dr", miles: "20", petrol: "petrol", gear: "Automatic", price: "$40,000" },
        { id: 3, src: "assets/images/ford.png", title: "G-Class", subtitle: "3.5 D5 PowerPulse Momentum 5dr", miles: "20", petrol: "petrol", gear: "Automatic", price: "$40,000" },
        { id: 4, src: "assets/images/gcl.png", title: "G-Class", subtitle: "3.5 D5 PowerPulse Momentum 5dr", miles: "20", petrol: "petrol", gear: "Automatic", price: "$40,000" },
        { id: 5, src: "assets/images/toyota.png", title: "G-Class", subtitle: "3.5 D5 PowerPulse Momentum 5dr", miles: "20", petrol: "petrol", gear: "Automatic", price: "$40,000" },
        { id: 6, src: "assets/images/ford.png", title: "G-Class", subtitle: "3.5 D5 PowerPulse Momentum 5dr", miles: "20", petrol: "petrol", gear: "Automatic", price: "$40,000" },
        { id: 7, src: "assets/images/toyota.png", title: "G-Class", subtitle: "3.5 D5 PowerPulse Momentum 5dr", miles: "20", petrol: "petrol", gear: "Automatic", price: "$40,000" },
        { id: 8, src: "assets/images/ford.png", title: "G-Class", subtitle: "3.5 D5 PowerPulse Momentum 5dr", miles: "20", petrol: "petrol", gear: "Automatic", price: "$40,000" },
        { id: 9, src: "assets/images/gcl.png", title: "G-Class", subtitle: "3.5 D5 PowerPulse Momentum 5dr", miles: "20", petrol: "petrol", gear: "Automatic", price: "$40,000" },
        { id: 10, src: "assets/images/toyota.png", title: "G-Class", subtitle: "3.5 D5 PowerPulse Momentum 5dr", miles: "20", petrol: "petrol", gear: "Automatic", price: "$40,000" },
        { id: 11, src: "assets/images/ford.png", title: "G-Class", subtitle: "3.5 D5 PowerPulse Momentum 5dr", miles: "20", petrol: "petrol", gear: "Automatic", price: "$40,000" },
        { id: 12, src: "assets/images/gcl.png", title: "G-Class", subtitle: "3.5 D5 PowerPulse Momentum 5dr", miles: "20", petrol: "petrol", gear: "Automatic", price: "$40,000" },
        { id: 13, src: "assets/images/toyota.png", title: "G-Class", subtitle: "3.5 D5 PowerPulse Momentum 5dr", miles: "20", petrol: "petrol", gear: "Automatic", price: "$40,000" },
        { id: 14, src: "assets/images/ford.png", title: "G-Class", subtitle: "3.5 D5 PowerPulse Momentum 5dr", miles: "20", petrol: "petrol", gear: "Automatic", price: "$40,000" },
        { id: 15, src: "assets/images/toyota.png", title: "G-Class", subtitle: "3.5 D5 PowerPulse Momentum 5dr", miles: "20", petrol: "petrol", gear: "Automatic", price: "$40,000" },
        { id: 16, src: "assets/images/gcl.png", title: "G-Class", subtitle: "3.5 D5 PowerPulse Momentum 5dr", miles: "20", petrol: "petrol", gear: "Automatic", price: "$40,000" },
        { id: 17, src: "assets/images/ford.png", title: "G-Class", subtitle: "3.5 D5 PowerPulse Momentum 5dr", miles: "20", petrol: "petrol", gear: "Automatic", price: "$40,000" },
        { id: 18, src: "assets/images/toyota.png", title: "G-Class", subtitle: "3.5 D5 PowerPulse Momentum 5dr", miles: "20", petrol: "petrol", gear: "Automatic", price: "$40,000" },
        { id: 19, src: "assets/images/gcl.png", title: "G-Class", subtitle: "3.5 D5 PowerPulse Momentum 5dr", miles: "20", petrol: "petrol", gear: "Automatic", price: "$40,000" },
        { id: 20, src: "assets/images/ford.png", title: "G-Class", subtitle: "3.5 D5 PowerPulse Momentum 5dr", miles: "20", petrol: "petrol", gear: "Automatic", price: "$40,000" },
        { id: 21, src: "assets/images/toyota.png", title: "G-Class", subtitle: "3.5 D5 PowerPulse Momentum 5dr", miles: "20", petrol: "petrol", gear: "Automatic", price: "$40,000" },
        { id: 22, src: "assets/images/gcl.png", title: "G-Class", subtitle: "3.5 D5 PowerPulse Momentum 5dr", miles: "20", petrol: "petrol", gear: "Automatic", price: "$40,000" },
        { id: 23, src: "assets/images/ford.png", title: "G-Class", subtitle: "3.5 D5 PowerPulse Momentum 5dr", miles: "20", petrol: "petrol", gear: "Automatic", price: "$40,000" },
        { id: 24, src: "assets/images/toyota.png", title: "G-Class", subtitle: "3.5 D5 PowerPulse Momentum 5dr", miles: "20", petrol: "petrol", gear: "Automatic", price: "$40,000" },
        { id: 25, src: "assets/images/gcl.png", title: "G-Class", subtitle: "3.5 D5 PowerPulse Momentum 5dr", miles: "20", petrol: "petrol", gear: "Automatic", price: "$40,000" },
        { id: 26, src: "assets/images/ford.png", title: "G-Class", subtitle: "3.5 D5 PowerPulse Momentum 5dr", miles: "20", petrol: "petrol", gear: "Automatic", price: "$40,000" },
        { id: 27, src: "assets/images/toyota.png", title: "G-Class", subtitle: "3.5 D5 PowerPulse Momentum 5dr", miles: "20", petrol: "petrol", gear: "Automatic", price: "$40,000" },
        { id: 28, src: "assets/images/ford.png", title: "G-Class", subtitle: "3.5 D5 PowerPulse Momentum 5dr", miles: "20", petrol: "petrol", gear: "Automatic", price: "$40,000" },
        { id: 29, src: "assets/images/toyota.png", title: "G-Class", subtitle: "3.5 D5 PowerPulse Momentum 5dr", miles: "20", petrol: "petrol", gear: "Automatic", price: "$40,000" },
        { id: 30, src: "assets/images/gcl.png", title: "G-Class", subtitle: "3.5 D5 PowerPulse Momentum 5dr", miles: "20", petrol: "petrol", gear: "Automatic", price: "$40,000" },
        { id: 31, src: "assets/images/ford.png", title: "G-Class", subtitle: "3.5 D5 PowerPulse Momentum 5dr", miles: "20", petrol: "petrol", gear: "Automatic", price: "$40,000" },
        { id: 32, src: "assets/images/toyota.png", title: "G-Class", subtitle: "3.5 D5 PowerPulse Momentum 5dr", miles: "20", petrol: "petrol", gear: "Automatic", price: "$40,000" },
        { id: 33, src: "assets/images/gcl.png", title: "G-Class", subtitle: "3.5 D5 PowerPulse Momentum 5dr", miles: "20", petrol: "petrol"}
  ];

    const [currentPage, setCurrentPage] = useState(1);
    const carsPerPage = 12;

    // Calculate total pages
    const totalPages = Math.ceil(cars.length / carsPerPage);

    // Get the current cars to display
    const indexOfLastCar = currentPage * carsPerPage;
    const indexOfFirstCar = indexOfLastCar - carsPerPage;
    const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

    // Handle page change
    const goToNextPage = () => {
        if (currentPage < totalPages) {
        setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
        setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    

  return (
    <div className="bg-white h-full rounded-[48px] px-4 sm:px-6 lg:px-8">
  <div className="py-8 sm:py-12 lg:py-16">
    <p className="font-dmSans sm:text-left mb-4 sm:mb-6 px-4">
      <span className="text-blue-500">Home</span>/Listing
    </p>
    <p className="px-4 mb-8 text-4xl font-dmSans font-bold">Listings</p>
    <div className="flex flex-col items-center">
      {/* Car Cards Container */}
      <div className="flex justify-around items-center gap-2 flex-wrap w-full">
        {currentCars.map((car) => (
          <CarCard
            key={car.id}
            src={car.src}
            title={car.title}
            subtitle={car.subtitle}
            miles={car.miles}
            petrol={car.petrol}
            gear={car.gear}
            price={car.price}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-xs sm:max-w-md mt-8">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 mb-2 sm:mb-0 ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-blue-500 hover:text-blue-700'}`}
        >
          Previous
        </button>
        <p className="text-gray-700 mb-2 sm:mb-0">
          Page {currentPage} of {totalPages}
        </p>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-blue-500 hover:text-blue-700'}`}
        >
          Next
        </button>
      </div>
    </div>
  </div>
</div>

  );
};
