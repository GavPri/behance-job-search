// -----
// The blur component is used in the background of the getting started page.
// className is passed as prop to allow more styling of each individual blur. 
// from color and toColor allow for manipulation of the gradient colors.
// -----
import React from "react";

const Blur = ({ className, fromColor, toColor }) => {
  return (
    <div className={`absolute ${className} bg-dark blur-clip blur-lg`}>
      <div
        className={`aspect-square bg-gradient-to-r from-${fromColor} to-${toColor} opacity-50`}
      ></div>
    </div>
  );
};
export default Blur;

// Example usage:
// <Blur position="relative" color="blue" size={50} gradientFrom="dark" gradientTo="light-green" opacity={50} />
