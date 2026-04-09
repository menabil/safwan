import React from "react";

const Button = ({ className, btnText }) => {
  return (
    <div className={`${className} bg-secondary px-1 py-5 cursor-pointer`}>
      <span className="px-10 py-4 border-2 border-white bg-secondary text-white ">
        {btnText}
      </span>
    </div>
  );
};

export default Button;
