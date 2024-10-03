import React, { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { VideoBackground } from "../components/VideoBackground";
import { BrowseType } from "../components/BrowseType";
import { Explore } from "../components/Explore";

export const LandingPage = () => {
  return (
    <>
      <Navbar />
      <VideoBackground/>
      <BrowseType/>
      <Explore/>
    </>
  );
}