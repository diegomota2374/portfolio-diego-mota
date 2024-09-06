import { useEffect, useState } from "react";

// Custom hook for managing navbar behavior
export const useNavBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initialize dark mode based on local storage or default to false
    if (typeof window !== "undefined") {
      return localStorage.getItem("darkMode") === "true";
    }
    return false;
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Effect to apply dark mode class to the root element
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // Persist dark mode preference in local storage
    localStorage.setItem("darkMode", String(isDarkMode));
  }, [isDarkMode]);

  // Function to smoothly scroll to a specific section
  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const paddingTop = parseFloat(
        window.getComputedStyle(section).paddingTop
      );

      window.scrollTo({
        top: sectionTop - paddingTop,
        behavior: "smooth",
      });
    }
  };

  return {
    isDarkMode,
    setIsDarkMode,
    isMenuOpen,
    setIsMenuOpen,
    handleScrollToSection,
  };
};
