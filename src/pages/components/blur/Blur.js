import React from "react";

const Blur = ({className, fromColor, toColor}) => {
  return (
    <div className={`absolute ${className} bg-dark blur-clip blur-lg`}>
      <div className={`w-[80vw] aspect-square bg-gradient-to-r from-${fromColor} to-${toColor} opacity-50`}></div>
    </div>
  );
};
export default Blur;

// Example usage:
// <Blur position="relative" color="blue" size={50} gradientFrom="dark" gradientTo="light-green" opacity={50} />
