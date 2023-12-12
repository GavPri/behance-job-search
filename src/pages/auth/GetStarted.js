// -----
// The getting started page is the first page a user see's when they open the app.
// This page uses the blur and button component.
// To clean up the return statement from getting started
// I created blur configurations & the renderSVGandText, renderButtonSVG functions.
// -----
import React from "react";
import Button from "../../components/buttons/buttons";
import Blur from "../../components/blur/Blur";

const GetStarted = () => {
  const renderSVGandText = () => {
    return (
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
    );
  };
  const renderButtonSVG = () => {
    return (
      <div className="w-[10%] aspect-square rounded-full bg-dark absolute right-3 top-3 flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-purple"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </div>
    );
  };
  return (
    <div className="flex flex-col items-center justify-end h-screen w-full">
      <Blur />
      {/* SVG jsx & text for job search */}
      {renderSVGandText()}
      {/* Button for job search */}
      <Button>
        className={`w-[95vw] bg-purple h-fit relative mb-6`}
        <h3 className="text-xl text-dark upp">Get Started!</h3>
        {renderButtonSVG()}
      </Button>
    </div>
  );
};

export default GetStarted;
