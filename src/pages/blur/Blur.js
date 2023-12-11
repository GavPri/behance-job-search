import React from "react";
// CVA import
import { cva } from "class-variance-authority";

const Blur = ({ position, color, size, gradientFrom, gradientTo, opacity }) => {
  const blurVariants = cva(
    "absolute bg-linear-to-r from-bg-dark to-light-green top-0 left-0 blur-clip w-fit aspect-square",
    {
      variants: {
        variant: {
          primary: "bg-linear-to-r from-bg-dark to-light-green top-0 left-0",
          secondary: "bg-linear-to-r from-bg-grey to-dark-green top-4 right-0",
          teritary: "bg-linear-to-r from-bg-charcoal to-purple top-6 left-2",
        },
        size: {
          primary : 'w-[80vw]',
          secondary: 'w-[30vw]',
          teritary: 'w-[15vw]',
        }
      },
    }
  );

  return (
    <div className={containerStyle}>
      <div className={overlayStyle}></div>
    </div>
  );
};
export default Blur;

// Example usage:
// <Blur position="relative" color="blue" size={50} gradientFrom="dark" gradientTo="light-green" opacity={50} />
