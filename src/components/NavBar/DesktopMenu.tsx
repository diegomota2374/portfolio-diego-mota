"use client";

import { DesktopMenuProps } from "@/interfaces/types";
import React from "react";

const DesktopMenu: React.FC<DesktopMenuProps> = ({ handleScrollToSection }) => {
  const sections = [
    "introdução",
    "sobre-Mim",
    "experiências",
    "por-que-Eu",
    "projetos",
    "expectativas",
  ];

  return (
    <div
      data-testid="menu-items-desktop"
      className="hidden md:flex flex-grow items-center justify-center space-x-4"
    >
      {sections.map((section) => {
        // Format section title and ID
        const formattedSection = section.replace("-", " "); // Replace hyphen with space
        const sectionId = section.replace(/\s+/g, "-").toLowerCase(); // ID with hyphen

        return (
          <button
            key={section}
            onClick={() => handleScrollToSection(section)}
            className="text-lightText dark:text-darkText hover:underline"
            data-testid={`desktop-menu-button-${sectionId}`}
          >
            {formattedSection.charAt(0).toUpperCase() +
              formattedSection.slice(1)}
          </button>
        );
      })}
    </div>
  );
};

export default DesktopMenu;
