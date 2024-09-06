// src/components/ThemeToggle.tsx
import React from "react";
import { motion } from "framer-motion";
import { themeButtonVariants } from "@/animations/NavBar";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import { ThemeToggleProps } from "@/interfaces/types";

const ThemeToggle: React.FC<ThemeToggleProps> = ({
  isDarkMode,
  setIsDarkMode,
}) => {
  return (
    <div className="flex sm:flex-grow items-center justify-center">
      <motion.button
        data-testid={isDarkMode ? "theme-toggle" : "theme-toggle-dark"}
        className="ml-4 text-lightText dark:text-darkText p-2 rounded-full transition-colors duration-300"
        variants={themeButtonVariants}
        animate={isDarkMode ? "darkMode" : "default"}
        onClick={() => setIsDarkMode(!isDarkMode)}
        aria-label="Toggle Dark Mode"
      >
        {isDarkMode ? <FaRegMoon /> : <FaRegSun />}
      </motion.button>
    </div>
  );
};

export default ThemeToggle;
