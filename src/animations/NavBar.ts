// src/config/animations.ts
import { Variants } from "framer-motion";

export const hamburgerLineVariants: Variants = {
  initial: { rotate: 0, y: 8, opacity: 1 },
  openTop: { rotate: 45, y: 0, opacity: 1 },
  openMiddle: { opacity: 0 },
  openBottom: { rotate: -45, y: 0, opacity: 1 },
  closedTop: { rotate: 0, y: 8, opacity: 1 },
  closedMiddle: { y: 0, opacity: 1 },
  closedBottom: { rotate: 0, y: -8, opacity: 1 },
};

export const menuVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

export const themeButtonVariants: Variants = {
  default: { backgroundColor: "#f3f4f6", color: "#374151" }, // Light mode
  darkMode: { backgroundColor: "#374151", color: "#f3f4f6" }, // Dark mode
};
