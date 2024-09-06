import React from "react";
import { motion } from "framer-motion";
import { menuVariants } from "@/animations/NavBar";
import { MenuItemsProps } from "@/interfaces/types";
import { sections } from "@/mocks/mocks";

const MenuItems: React.FC<MenuItemsProps> = ({
  handleScrollToSection,
  setIsMenuOpen,
}) => {
  return (
    <motion.div
      className="flex flex-col p-4 bg-lightBackground dark:bg-darkBackground shadow-lg"
      variants={menuVariants}
      data-testid="menu-items"
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.3 }}
    >
      {sections.map((section) => (
        <button
          key={section}
          onClick={() => {
            handleScrollToSection(section);
            setIsMenuOpen(false);
          }}
          className="block px-4 py-2 text-lightText dark:text-darkText hover:bg-gray-200 dark:hover:bg-gray-700"
          data-testid={`menu-item-${section
            .replace(/\s+/g, "-")
            .toLowerCase()}`}
        >
          {section
            .replace(/-/g, " ")
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
        </button>
      ))}
    </motion.div>
  );
};

export default MenuItems;
