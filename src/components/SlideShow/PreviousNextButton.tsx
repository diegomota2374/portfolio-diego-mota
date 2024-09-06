import React from "react";
import { ButtonProps } from "@/interfaces/types";

export const PreviousButton: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute left-4 md:left-6 lg:left-8 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 md:p-3 lg:p-4 rounded-full hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-600"
      data-testid="previous-button"
    >
      &#10094;
    </button>
  );
};

export const NextButton: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-4 md:right-6 lg:right-8 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 md:p-3 lg:p-4 rounded-full hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-600"
      data-testid="next-button"
    >
      &#10095;
    </button>
  );
};
