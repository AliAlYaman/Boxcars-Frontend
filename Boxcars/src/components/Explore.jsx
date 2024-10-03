import { useState } from "react";
import { Link } from "react-router-dom";
import { CarCard } from "./CarCard";

export const Explore = () => {
  const [activeTab, setActiveTab] = useState("recent");

  const recents = [
    {
      id: 1,
      src: "assets/images/gclass.jpg",
      title: "G-Class",
      subtitle: "3.5 D5 PowerPulse Momentum 5dr",
      miles: "20",
      petrol: "petrol",
      gear: "Automatic",
      price: "$40,000",
    },
    {
      id: 2,
      src: "assets/images/gclass.jpg",
      title: "G-Class",
      subtitle: "3.5 D5 PowerPulse Momentum 5dr",
      miles: "20",
      petrol: "petrol",
      gear: "Automatic",
      price: "$40,000",
    },
    {
      id: 3,
      src: "assets/images/gclass.jpg",
      title: "G-Class",
      subtitle: "3.5 D5 PowerPulse Momentum 5dr",
      miles: "20",
      petrol: "petrol",
      gear: "Automatic",
      price: "$40,000",
    },
  ];
  const featured = [
    {
      id: 1,
      src: "assets/images/ml.jpg",
      title: "G-Class",
      subtitle: "3.5 D5 PowerPulse Momentum 5dr",
      miles: "20",
      petrol: "petrol",
      gear: "Automatic",
      price: "$40,000",
    },
    {
      id: 2,
      src: "assets/images/ml.jpg",
      title: "G-Class",
      subtitle: "3.5 D5 PowerPulse Momentum 5dr",
      miles: "20",
      petrol: "petrol",
      gear: "Automatic",
      price: "$40,000",
    },
    {
      id: 3,
      src: "assets/images/ml.jpg",
      title: "G-Class",
      subtitle: "3.5 D5 PowerPulse Momentum 5dr",
      miles: "20",
      petrol: "petrol",
      gear: "Automatic",
      price: "$40,000",
    },
  ];
  const popular = [
    {
      id: 1,
      src: "assets/images/gls.jpg",
      title: "G-Class",
      subtitle: "3.5 D5 PowerPulse Momentum 5dr",
      miles: "20",
      petrol: "petrol",
      gear: "Automatic",
      price: "$40,000",
    },
    {
      id: 2,
      src: "assets/images/gls.jpg",
      title: "G-Class",
      subtitle: "3.5 D5 PowerPulse Momentum 5dr",
      miles: "20",
      petrol: "petrol",
      gear: "Automatic",
      price: "$40,000",
    },
    {
      id: 3,
      src: "assets/images/gls.jpg",
      title: "G-Class",
      subtitle: "3.5 D5 PowerPulse Momentum 5dr",
      miles: "20",
      petrol: "petrol",
      gear: "Automatic",
      price: "$40,000",
    },
  ];

  return (
    <>
      <div className="flex flex-col w-full px-4 sm:px-6 lg:px-8 pt-20 gap-12">
        <div className="flex justify-between w-full">
          <p className="text-2xl font-bold font-dmSans">Explore All Vehicles</p>
          <Link to="" className="font-semibold">
            View All
          </Link>
        </div>
        <div className="flex justify-start items-center gap-8 font-semibold ">
          <Link
            onClick={() => setActiveTab("recent")}
            className={`pb-1  ${
              activeTab === "recent" ? "border-b-2 border-blue-500" : ""
            }`}
          >
            Recent Cars
          </Link>
          <Link
            onClick={() => setActiveTab("featured")}
            className={`pb-1 ${
              activeTab === "featured" ? "border-b-2 border-blue-500" : ""
            }`}
          >
            Featured Cars
          </Link>
          <Link
            onClick={() => setActiveTab("popular")}
            className={`pb-1 ${
              activeTab === "popular" ? "border-b-2 border-blue-500" : ""
            }`}
          >
            Popular Cars
          </Link>
        </div>
        <div className="flex  max-md:flex-col max-md:items-start justify-around items-center w-full h-full gap-6">
          {activeTab === "recent"
            ? recents.map((recent) => {
                return (
                  <CarCard
                    src={recent.src}
                    key={recent.id}
                    title={recent.title}
                    gear={recent.gear}
                    miles={recent.miles}
                    petrol={recent.petrol}
                    price={recent.price}
                    subtitle={recent.subtitle}
                  />
                );
              })
            : null}
          {activeTab === "featured"
            ? featured.map((recent) => {
                return (
                  <CarCard
                    src={recent.src}
                    key={recent.id}
                    title={recent.title}
                    gear={recent.gear}
                    miles={recent.miles}
                    petrol={recent.petrol}
                    price={recent.price}
                    subtitle={recent.subtitle}
                  />
                );
              })
            : null}
          {activeTab === "popular" 
            ? popular.map((recent) => {
                return (
                  <CarCard
                    src={recent.src}
                    key={recent.id}
                    title={recent.title}
                    gear={recent.gear}
                    miles={recent.miles}
                    petrol={recent.petrol}
                    price={recent.price}
                    subtitle={recent.subtitle}
                  />
                );
              })
            : null}
        </div>
      </div>
    </>
  );
};
