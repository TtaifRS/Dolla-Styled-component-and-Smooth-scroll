import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/Info";
import {
  homeObject,
  homeObjectThree,
  homeObjectTwo,
} from "../components/Info/Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObject} />
      <InfoSection {...homeObjectTwo} />
      <InfoSection {...homeObjectThree} />
    </>
  );
};

export default Home;
