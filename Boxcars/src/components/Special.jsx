import { Link } from "react-router-dom";
import { CarCard } from "./CarCard";

export const Special = () => {
    const cars = [
        {
            id: 1,
            src: "assets/images/c-class.jpg",
            title: "G-Class",
            subtitle: "3.5 D5 PowerPulse Momentum 5dr",
            miles: "20",
            petrol: "petrol",
            gear: "Automatic",
            price: "$40,000",
          },
          {
            id: 2,
            src: "assets/images/eclass.jpg",
            title: "G-Class",
            subtitle: "3.5 D5 PowerPulse Momentum 5dr",
            miles: "20",
            petrol: "petrol",
            gear: "Automatic",
            price: "$40,000",
          },
          {
            id: 3,
            src: "assets/images/gt.jpg",
            title: "G-Class",
            subtitle: "3.5 D5 PowerPulse Momentum 5dr",
            miles: "20",
            petrol: "petrol",
            gear: "Automatic",
            price: "$40,000",
          }
    ]
    return (<div className="flex flex-col  w-full px-4 sm:px-6 lg:px-8 pt-28 gap-12">
    <div className="flex justify-between items-center">
        <p className="text-4xl font-dmSans font-bold">Specials</p>
        <Link to="" className="font-semibold">
            View All
          </Link>
    </div>
    <div className="flex  max-md:flex-col max-md:items-start justify-between items-center w-full h-full gap-6">
        {cars.map((car) => {
            return (
                <div className="w-1/3 max-md:w-full" 
                key={car.id}>
                <CarCard
                    src={car.src}
                    title={car.title}
                    gear={car.gear}
                    miles={car.miles}
                    petrol={car.petrol}
                    price={car.price}
                    subtitle={car.subtitle}
                  />
                  </div>
            );
        })}
    </div>
    </div>);
}