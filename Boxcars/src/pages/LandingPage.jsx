import React, { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { VideoBackground } from "../components/VideoBackground";
import { BrowseType } from "../components/BrowseType";
import { Explore } from "../components/Explore";
import { Details } from "../components/Details";
import { Features } from "../components/Features";
import { Special } from "../components/Special";
import { Reviews } from "../components/Reviews";
import { OurTeam } from "../components/OurTeam";
import { Ad } from "../components/Ad";
import { Footer } from "../components/Footer";

export const LandingPage = () => {
  const brands = [
    {
      id: 1,
      type: "Audi",
      icon: "assets/icons/audi.png",
    },
    {
      id: 2,
      type: "BMW",
      icon: "assets/icons/bmw.png",
    },
    {
      id: 3,
      type: "Ford",
      icon: "assets/icons/ford.png",
    },
    {
      id: 4,
      type: "Mercedes Benz",
      icon: "assets/icons/mercedes.png",
    },
    {
      id: 5,
      type: "Peugeot",
      icon: "assets/icons/peugot.png",
    },
    {
      id: 6,
      type: "Volkswagen",
      icon: "assets/icons/volkswagen.png",
    },
  ];
  const types = [
    {
      id: 1,
      type: "SUV",
      icon: "assets/icons/suv.png",
    },
    {
      id: 2,
      type: "Sedan",
      icon: "assets/icons/sedan.png",
    },
    {
      id: 3,
      type: "Hatchback",
      icon: "assets/icons/hatchback.png",
    },
    {
      id: 4,
      type: "Coupe",
      icon: "assets/icons/coupe.png",
    },
    {
      id: 5,
      type: "Hybrid",
      icon: "assets/icons/hybrid.png",
    },
    {
      id: 6,
      type: "Convertible",
      icon: "assets/icons/convertible.png",
    },
  ];
  return (
    <>
      <Navbar />
      <VideoBackground />
      <BrowseType types={types} text='Browse by Type' />
      <Explore />
      <Details />
      <Features />
      <Special />
      <Reviews />
      <OurTeam />
      <BrowseType types={brands} text='Explore Our Premium Brands' />
      <Ad/>
      <Footer/>
    </>
  );
};
