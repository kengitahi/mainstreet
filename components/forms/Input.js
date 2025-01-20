import React from "react";

const Input = ({ name, type = "text", placeholder = "", required = false }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      className="border border-gray-600 rounded-lg focus:border-[#232BB1] focus:outline-none focus:ring-none focus:ring-offset-0 p-2 w-full"
    ></input>
  );
};

export default Input;
