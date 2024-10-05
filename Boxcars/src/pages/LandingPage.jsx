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

export const LandingPage = () => {
  return (
    <>
      <Navbar />
      <VideoBackground/>
      <BrowseType/>
      <Explore/>
      <Details/>
      <Features/>
      <Special/>
      <Reviews/>
      <OurTeam/>
    </>
  );
}