import React from "react";
// CVA import
import { cva } from "class-variance-authority";

const Blur = ({ position, color, size, gradientFrom, gradientTo, opacity }) => {
  const blurVariants = cva(

  )
  
  return (
    <div className={containerStyle}>
      <div className={overlayStyle}></div>
    </div>
  );
};
export default Blur;

// Example usage:
// <Blur position="relative" color="blue" size={50} gradientFrom="dark" gradientTo="light-green" opacity={50} />
