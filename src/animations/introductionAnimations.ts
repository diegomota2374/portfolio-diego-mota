// src/animations/introductionAnimations.ts
import { Variants } from "framer-motion";

// Variants for diagonal stripes
export const diagonalStripeTopLeft: Variants = {
  hidden: { x: "-100%", y: "-100%" },
  visible: { x: "0%", y: "0%" },
};

export const diagonalStripeBottomRight: Variants = {
  hidden: { x: "100%", y: "100%" },
  visible: { x: "0%", y: "0%" },
};

// Variants for main content
export const contentAnimation: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};
