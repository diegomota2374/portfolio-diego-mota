// src/components/NavigationBar/NavigationBar.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useNavBar } from "@/hooks/useNavBar/useNavBar";
import NavigationBar from "../NavBar";
const { expect, describe, it } = require("@jest/globals");

// Mock the useNavBar hook
jest.mock("@/hooks/useNavBar/useNavBar", () => ({
  useNavBar: jest.fn(),
}));

describe("NavigationBar", () => {
  beforeEach(() => {
    (useNavBar as jest.Mock).mockReturnValue({
      isDarkMode: false,
      setIsDarkMode: jest.fn(),
      isMenuOpen: false,
      setIsMenuOpen: jest.fn(),
      handleScrollToSection: jest.fn(),
    });
  });

  it("renders the navigation bar", () => {
    render(<NavigationBar />);
    expect(screen.getByTestId("navigation-bar")).toBeInTheDocument();
  });
  it;
  it("renders the Diego Mota title", () => {
    render(<NavigationBar />);
    expect(screen.getByTestId("buzzvel-title")).toHaveTextContent("Diego Mota");
  });

  it("toggles the mobile menu when hamburger button is clicked", () => {
    const setIsMenuOpen = jest.fn();
    (useNavBar as jest.Mock).mockReturnValue({
      isDarkMode: false,
      setIsDarkMode: jest.fn(),
      isMenuOpen: false,
      setIsMenuOpen,
      handleScrollToSection: jest.fn(),
    });

    render(<NavigationBar />);
    const hamburgerButton = screen.getByTestId("hamburger-button");
    fireEvent.click(hamburgerButton);
    expect(setIsMenuOpen).toHaveBeenCalledWith(true);
  });

  it("calls handleScrollToSection when a menu item is clicked", () => {
    const handleScrollToSection = jest.fn();
    (useNavBar as jest.Mock).mockReturnValue({
      isDarkMode: false,
      setIsDarkMode: jest.fn(),
      isMenuOpen: true, // Assume the menu is open for this test
      setIsMenuOpen: jest.fn(),
      handleScrollToSection,
    });

    render(<NavigationBar />);
    const menuItem = screen.getByTestId("menu-items").firstChild;
    fireEvent.click(menuItem as Element);
    expect(handleScrollToSection).toHaveBeenCalled();
  });

  it("toggles dark mode when the theme toggle button is clicked", () => {
    const setIsDarkMode = jest.fn();
    (useNavBar as jest.Mock).mockReturnValue({
      isDarkMode: false,
      setIsDarkMode,
      isMenuOpen: false,
      setIsMenuOpen: jest.fn(),
      handleScrollToSection: jest.fn(),
    });

    render(<NavigationBar />);
    const themeToggleButton = screen.getByTestId("theme-toggle-dark");
    fireEvent.click(themeToggleButton);
    expect(setIsDarkMode).toHaveBeenCalledWith(true);
  });
});
