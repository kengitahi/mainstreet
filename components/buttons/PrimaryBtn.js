import React from "react";

const PrimaryBtn = ({ children, text, type, disabled }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className="group flex gap-2 px-8 py-4 text-base font-medium text-center text-white bg-[#232BB1] rounded-lg max-w-fit font-lexend hover:bg-blue-800 focus:ring-4 focus:outline-hidden focus:ring-blue-300 disabled:pointer-events-none disabled:cursor-not-allowed"
    >
      {text}
      {children}
    </button>
  );
};

export default PrimaryBtn;
