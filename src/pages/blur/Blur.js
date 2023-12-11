import React from "react";
// CVA import
import { cva } from "class-variance-authority";

const Blur = ({ position, color, size, gradientFrom, gradientTo, opacity }) => {
  const blurVariants = cva(
    "absolute bg-linear-to-r from-bg-dark to-light-green top-0 left-0 blur-clip"
  );

  return (
    <div className={containerStyle}>
      <div className={overlayStyle}></div>
    </div>
  );
};
export default Blur;

// Example usage:
// <Blur position="relative" color="blue" size={50} gradientFrom="dark" gradientTo="light-green" opacity={50} />
