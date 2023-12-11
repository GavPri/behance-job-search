import React from "react";

const Blur = () => {
  return (
    <div className="absolute top-0 left-0 bg-dark blur-clip blur-lg">
      <div className="w-[80vw] aspect-square bg-gradient-to-r from-dark to-light-green opacity-50"></div>
    </div>
  );
};
export default Blur;

// Example usage:
// <Blur position="relative" color="blue" size={50} gradientFrom="dark" gradientTo="light-green" opacity={50} />
