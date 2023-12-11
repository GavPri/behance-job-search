import React from "react";
// CVA import
import { cva } from "class-variance-authority";

const Blur = ({ position, color, size, gradientFrom, gradientTo, opacity }) => {
  const containerStyle = `absolute ${position} top-0 left-0 bg-${color} blur-clip blur-lg`;
  const overlayStyle = `w-[${size}vw] aspect-square bg-gradient-to-r from-${gradientFrom} to-${gradientTo} opacity-${opacity}`;

  return (
    <div className={containerStyle}>
      <div className={overlayStyle}></div>
    </div>
  );
};
export default Blur;

// Example usage:
// <Blur position="relative" color="blue" size={50} gradientFrom="dark" gradientTo="light-green" opacity={50} />
