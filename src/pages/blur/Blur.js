// The blur is a background effect that
// will be used on the get started page.

import React from "react";

const Blur = () => {
  return (
    <div className="absolute top-0 left-0 bg-dark blur-clip blur-lg">
      <div className="w-[80vw] aspect-square bg-gradient-to-r from-dark to-charcoal opacity-50"></div>
    </div>
  );
};

export default Blur;
