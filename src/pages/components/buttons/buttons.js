import React from "react";

const Button = ({ children, onClick, className }) => {
  return (
    <button className={`px-4 py-2 min-h-10 rounded-full ${className}`}>
      {children}
    </button>
  );
};

export default Button;
