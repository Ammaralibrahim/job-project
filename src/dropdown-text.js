import React, { useState } from "react";

function Accordion({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="bg-white  p-4 cursor-pointer  my-4 border-b-[1px] border-gray-900"
      onClick={toggleAccordion}
    >
      <div className="flex items-center justify-between ">
        <h2 className="text-2xl font-semibold text-[#4AC97D]">{title}</h2>
        <button className="text-gray-600 hover:text-gray-800">
          {isOpen ? (
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 5L7.5 12L1 5"
                stroke="#000000"
                stroke-linecap="square"
              />
            </svg>
          ) : (
            <svg
              width="15px"
              height="15px"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="48" height="48" fill="white" fill-opacity="0.01" />
              <path
                d="M13 30L25 18L37 30"
                stroke="#000000"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          )}
        </button>
      </div>
      {isOpen && <div className="mt-4 text-gray-700">{description}</div>}
    </div>
  );
}

export default Accordion;
