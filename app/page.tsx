"use client";

import Image from "next/image";
import React from "react";
// import LandingPage from './Components/Navbar';
import HeroBanner from '../public/images/Herobanner.svg';
import Footer from "./Components/Footer";
import Skills from "./Components/Skills";

export default function Home() {
  return (
    <div className="">
      {/* <div>
        <LandingPage />
      </div> */}
      <div>
        <Skills/>
      </div>
      <div>
        <Footer/>
      </div>
    
    
    </div>
  );
}
