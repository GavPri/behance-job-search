// The blur is a background effect that
// will be used on the get started page.
import React from "react";
import PropTypes from "prop-types";

const Blur = ({ position, color, size }) => {
  return (
    <div className={`${position} top-0 left-0 bg-${color} blur-clip blur-lg`}>
      <div
        className={`w-[${size}] aspect-square bg-gradient-to-r from-dark to-light-green opacity-50`}
      ></div>
    </div>
  );
};

// ---- Declare Prop Types
Blur.propTypes = {
  position: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
};

// ---- Defualt props
Blur.defaultProps = {
  position: "absolute",
  color: "dark",
  size: "80vw",
};
export default Blur;
