"use client";

// import { useEffect, useState } from 'react';

// export default function LandingPage() {
//   const [typedName, setTypedName] = useState(''); // Tracks the letters typed so far
//   const [nameMoved, setNameMoved] = useState(false); // Tracks when the name has moved
//   const fullName = "Alice"; // The full name to be typed out

//   useEffect(() => {
//     let currentIndex = 0;
//     let typingDelay = 500; // Starting typing speed (500ms for the first letter)

//     const typeLetter = () => {
//       if (currentIndex < fullName.length) {
//         setTypedName((prev) => prev + fullName[currentIndex]);
//         currentIndex++;
//         typingDelay = Math.max(typingDelay - 100, 100); // Decrease typing delay by 0.1s (100ms) until minimum of 100ms
//         setTimeout(typeLetter, typingDelay);
//       } else {
//         // Once typing is complete, wait a moment and then move the name
//         setTimeout(() => setNameMoved(true), 150);
//       }
//     };

//     setTimeout(typeLetter, typingDelay); // Start the typing animation after the initial delay
//   }, []);

//   return (
//     <div className="relative h-screen w-screen flex justify-center items-center">
//       {/* Name animation */}
//       <h1
//         className={`text-1xl font-bold absolute transition-all duration-[1500ms] ease-out ${
//           nameMoved ? 'top-4 left-4 text-2xl' : ''
//         }`}
//       >
//         <span>{typedName}</span>
//       </h1>
//     </div>
//   );
// }

// import { useEffect, useState } from 'react';

// export default function LandingPage() {
//   const [typedName, setTypedName] = useState(''); // Tracks the letters typed so far
//   const [nameMoved, setNameMoved] = useState(false); // Tracks when the name has moved
//   const fullName = "Takunda"; // The full name to be typed out

//   useEffect(() => {
//     let currentIndex = 0;
//     let typingDelay = 500; // Starting typing speed (500ms for the first letter)

//     const typeLetter = () => {
//       if (currentIndex < fullName.length) {
//         setTypedName((prev) => prev + fullName[currentIndex]);
//         currentIndex++;
//         typingDelay = Math.max(typingDelay - 100, 100); // Decrease typing delay by 0.1s (100ms) until minimum of 100ms
//         setTimeout(typeLetter, typingDelay);
//       } else {
//         // Once typing is complete, wait 1 second and then move the name
//         setTimeout(() => setNameMoved(true), 100);
//       }
//     };

//     setTimeout(typeLetter, typingDelay); // Start the typing animation after the initial delay
//   }, []);

//   return (
//     <div className="relative h-screen w-screen flex justify-center items-center">
//       {/* Name animation */}
//       <h1
//         className={`text-2xl font-bold absolute transition-all duration-[800ms] ease-in-out ${
//           nameMoved ? 'translate-x-[-40vw] translate-y-[-43vh] scale-50' : ''
//         }`}
//       >
//         <span>{typedName}</span>
//       </h1>
//     </div>
//   );
// }

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import HeroBanner from "../../public/images/Herobanner.svg";
// import { motion } from "framer-motion";
// import { fadeIn } from "../variants";

// export default function LandingPage() {
//   const [nameMoved, setNameMoved] = useState(false);

//   useEffect(() => {
//     // Set a delay to move the name only after typing completes (adjust time to match typing duration)
//     setTimeout(() => setNameMoved(true), 200); // Typing duration is 2 seconds, movement triggers after that
//   }, []);

//   return (
//     <div className="relative h-screen w-[100%] flex justify-center items-center  px-5">
//       {/* Name animation */}
//       <h1
//         className={`typed-name text-2xl font-bold absolute transition-all duration-[8000ms] ease-in-out ${
//           nameMoved ? "move-to-top-left" : ""
//         }`}
//       >
//         Takunda
//       </h1>
//       <motion.div
//         variants={fadeIn("up", 1)}
//         initial="hidden"
//         animate="show"
//         exit="hidden"
//         className="lg:mt-[6%] xl:mt-[16%] "
//       >
//         <Image src={HeroBanner} alt="image" className="h-[90vh]" />
//       </motion.div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import Image from "next/image";
import HeroBanner from "../../public/images/Herobanner.svg";
import { motion } from "framer-motion";

// Define a simple slide-in animation for the image
const slideInFromBottom = {
  hidden: {
    opacity: 0,
    y: 100, // Start 100px down
  },
  show: {
    opacity: 1,
    y: 0, // Move to its original position
    transition: {
      duration: 1.2, // Time for the slide-in animation
      delay: 0.7, // This delay is to ensure it happens after the navbar animation
      ease: "easeInOut",
    },
  },
};

export default function LandingPage() {
  const [nameMoved, setNameMoved] = useState(false);

  useEffect(() => {
    // Set a delay to move the name only after typing completes
    setTimeout(() => setNameMoved(true), 100); // Adjust time to match typing duration
  }, []);

  return (
    <div className="relative h-screen w-full flex justify-center items-center px-5">
      {/* Name animation */}
      <h1
        className={`typed-name text-2xl font-bold absolute transition-all duration-[100ms] ease-out ${
          nameMoved ? "move-to-top-left" : ""
        }`}
      >
        Takunda
      </h1>

      {/* HeroBanner Image Slide-In */}
      <motion.div
        variants={slideInFromBottom}
        initial="hidden"
        animate="show"
        className="lg:mt-[15%] relative"
      >
        <div className="container">
          <Image src={HeroBanner} alt="image" className="" />
        </div>

        <div className="bg-white">
          <div className="flex justify-center items-center flex-col absolute top-0 left-[6px] bg-white w-[50%]">
            <div className="flex space-x-1 items-center text-[9px]">
              <p className="">Hi, my name is</p>
              <p className=" text-[13px] font-semibold">Takunda</p>
              <p className="">and i am a</p>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col absolute top-5 left-[6px] bg-white w-[50%]">
            <p>Ux/Ui Designer</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
