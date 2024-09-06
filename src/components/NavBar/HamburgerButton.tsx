// src/components/HamburgerButton.tsx
import React from "react";
import { motion } from "framer-motion";
import { hamburgerLineVariants } from "@/animations/NavBar";
import { HamburgerButtonProps } from "@/interfaces/types";

const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  isMenuOpen,
  setIsMenuOpen,
}) => {
  return (
    <div className="md:hidden flex items-center">
      <button
        className="relative w-12 h-12 flex items-center justify-center"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
        data-testid="hamburger-button"
      >
        <motion.div
          className="absolute w-6 h-0.5 bg-lightText dark:bg-darkText"
          variants={hamburgerLineVariants}
          initial="initial"
          animate={isMenuOpen ? "openTop" : "closedTop"}
          transition={{ duration: 0.3 }}
          data-testid="hamburger-line-top"
        />
        <motion.div
          className="absolute w-6 h-0.5 bg-lightText dark:bg-darkText"
          variants={hamburgerLineVariants}
          initial="initial"
          animate={isMenuOpen ? "openMiddle" : "closedMiddle"}
          transition={{ duration: 0.3 }}
          data-testid="hamburger-line-middle"
        />
        <motion.div
          className="absolute w-6 h-0.5 bg-lightText dark:bg-darkText"
          variants={hamburgerLineVariants}
          initial="initial"
          animate={isMenuOpen ? "openBottom" : "closedBottom"}
          transition={{ duration: 0.3 }}
          data-testid="hamburger-line-bottom"
        />
      </button>
    </div>
  );
};

export default HamburgerButton;
