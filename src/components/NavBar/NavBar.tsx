// src/components/NavigationBar/NavigationBar.tsx
"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import HamburgerButton from "./HamburgerButton";
import MenuItems from "./MenuItems";
import DesktopMenu from "./DesktopMenu";
import ThemeToggle from "./ThemeToggle";
import { useNavBar } from "@/hooks/useNavBar/useNavBar";

const NavigationBar = () => {
  const {
    isDarkMode,
    setIsDarkMode,
    isMenuOpen,
    setIsMenuOpen,
    handleScrollToSection,
  } = useNavBar();

  return (
    <nav
      className="fixed w-full top-0 left-0 z-50 flex items-center justify-between px-4 py-2 bg-lightBackground dark:bg-darkBackground shadow-md"
      data-testid="navigation-bar"
    >
      {/* Mobile Menu Button */}
      <HamburgerButton
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        data-testid="hamburger-button"
      />

      {/* Challenge title */}
      <div
        className="flex flex-grow items-center justify-center text-lg font-semibold text-lightText dark:text-darkText"
        data-testid="buzzvel-title"
      >
        Diego Mota
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute top-14 left-0 w-full bg-lightBackground dark:bg-darkBackground shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            data-testid="mobile-menu"
          >
            <MenuItems
              handleScrollToSection={handleScrollToSection}
              setIsMenuOpen={setIsMenuOpen}
              data-testid="menu-items"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Menu on Larger Screens */}
      <DesktopMenu
        handleScrollToSection={handleScrollToSection}
        data-testid="desktop-menu"
      />

      {/* Title and Theme Toggle Button */}
      <ThemeToggle
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        data-testid="theme-toggle"
      />
    </nav>
  );
};

export default NavigationBar;
