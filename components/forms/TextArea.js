import React from "react";

const TextArea = ({
  name,
  type = "text",
  placeholder = "",
  required = false,
}) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      required={required}
      className="border border-gray-600 rounded-lg focus:border-[#232BB1] focus:outline-hidden focus:ring-none focus:ring-offset-0 p-2 w-full"
    ></textarea>
  );
};

export default TextArea;
