import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MenuItems from "../MenuItems";
import "@testing-library/jest-dom"; // Import jest-dom for custom matchers

describe("MenuItems", () => {
  test("renders the menu items", () => {
    render(
      <MenuItems handleScrollToSection={() => {}} setIsMenuOpen={() => {}} />
    );

    // Check if the menu container is in the document
    expect(screen.getByTestId("menu-items")).toBeInTheDocument();

    // Check if each menu item button is rendered
    const sections = [
      "introdução",
      "sobre-Mim",
      "experiências",
      "por-que-Eu",
      "projetos",
      "expectativas",
    ];

    sections.forEach((section) => {
      expect(
        screen.getByTestId(
          `menu-item-${section.replace(/\s+/g, "-").toLowerCase()}`
        )
      ).toBeInTheDocument();
    });
  });

  test("calls handleScrollToSection and setIsMenuOpen on button click", () => {
    const handleScrollToSection = jest.fn();
    const setIsMenuOpen = jest.fn();

    render(
      <MenuItems
        handleScrollToSection={handleScrollToSection}
        setIsMenuOpen={setIsMenuOpen}
      />
    );

    // Simulate button click
    fireEvent.click(screen.getByTestId("menu-item-introdução"));

    // Check if handleScrollToSection and setIsMenuOpen were called
    expect(handleScrollToSection).toHaveBeenCalledWith("introdução");
    expect(setIsMenuOpen).toHaveBeenCalledWith(false);
  });

  test("applies correct animation states", () => {
    render(
      <MenuItems handleScrollToSection={() => {}} setIsMenuOpen={() => {}} />
    );

    // Check initial animation states
    const menu = screen.getByTestId("menu-items");
    expect(menu).toHaveClass("flex-col");

    // Additional checks can be added if specific classes or styles are applied based on the animation states
  });
});
