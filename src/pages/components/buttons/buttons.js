/* -----
  Button Component:

  This React component represents a basic button with customizable styles.
  
  Props:
  - children: Content to be rendered inside the button.
  - onClick: Function to be called when the button is clicked. (to be added)
  - className: Additional CSS classes to be applied to the button.
----- */
import React from "react";

const Button = ({ children, onClick, className }) => {
  return (
    <button className={`px-4 py-4 min-h-10 rounded-full ${className}`}>
      {children}
    </button>
  );
};

export default Button;
