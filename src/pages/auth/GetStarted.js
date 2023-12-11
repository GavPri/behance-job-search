import React from "react";
import Blur from "../blur/Blur";

const GetStarted = () => {
  return (
    <div className="flex flex-col items-center justify-end h-screen w-full">
      <Blur
        position="absolute"
        color="dark"
        size={80}
        gradientFrom="dark"
        gradientTo="light-green"
        opacity={50}
      />
      {/* SVG jsx & text for job search */}
      <div className="w-full h-[30vh] flex flex-col justify-evenly items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12 text-dark-green"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <p className="text-3xl text-off-white">Let's Find New Jobs!</p>
      </div>
      {/* Button for job search */}
    </div>
  );
};

export default GetStarted;
