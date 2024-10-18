import { useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { CarDetailsCard } from "../components/CarDetailsCard";

export const CarDetails = () => {
  const location = useLocation();
  const { src, title, subtitle, miles, petrol, gear, price } = location.state;

  return (
    <>
    <Navbar/>
    <CarDetailsCard src={src}  title={title} subtitle={subtitle} miles={miles} petrol={petrol} gear={gear} price={price} />
    </>
  );
};
