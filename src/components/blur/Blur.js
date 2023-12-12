// -----
// The blur component is used in the background of the getting started page.
// className is passed as prop to allow more styling of each individual blur.
// from color and toColor allow for manipulation of the gradient colors.
// -----
import React from "react";

const Blur = () => {
  return (
    <div className="absolute top-0 left-0 bg-dark blur-clip blur-[64px]">
      <div className="w-[40vw] aspect-square bg-gradient-to-r from-dark to-light-green opacity-50"></div>
    </div>
  );
};

export default Blur;

