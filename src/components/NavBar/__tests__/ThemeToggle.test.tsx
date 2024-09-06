import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ThemeToggle from "../ThemeToggle";
import "@testing-library/jest-dom"; // Import jest-dom for custom matchers

describe("ThemeToggle", () => {
  test("renders with the correct icon based on isDarkMode state", () => {
    // Test for dark mode
    render(<ThemeToggle isDarkMode={true} setIsDarkMode={() => {}} />);
    // Check for the presence of the theme toggle button
    const themeToggleButton = screen.getByTestId("theme-toggle");
    expect(themeToggleButton).toBeInTheDocument();

    // Verify that the icon is FaRegMoon
    const moonIcon = themeToggleButton.querySelector("svg");
    expect(moonIcon).toBeInTheDocument();
    expect(moonIcon).toHaveAttribute("fill", "currentColor"); // Adjust as needed

    // Test for light mode
    render(<ThemeToggle isDarkMode={false} setIsDarkMode={() => {}} />);
    // Check for the presence of the theme toggle button
    const themeToggleButtonLight = screen.getByTestId("theme-toggle");
    expect(themeToggleButtonLight).toBeInTheDocument();

    // Verify that the icon is FaRegSun
    const sunIcon = themeToggleButtonLight.querySelector("svg");
    expect(sunIcon).toBeInTheDocument();
    expect(sunIcon).toHaveAttribute("fill", "currentColor"); // Adjust as needed
  });

  test("calls setIsDarkMode with the opposite value when clicked", () => {
    const setIsDarkMode = jest.fn();

    // Render with dark mode enabled
    render(<ThemeToggle isDarkMode={true} setIsDarkMode={setIsDarkMode} />);
    fireEvent.click(screen.getByTestId("theme-toggle"));
    expect(setIsDarkMode).toHaveBeenCalledWith(false);

    // Render with dark mode disabled
    render(<ThemeToggle isDarkMode={false} setIsDarkMode={setIsDarkMode} />);
    fireEvent.click(screen.getByTestId("theme-toggle-dark"));
    expect(setIsDarkMode).toHaveBeenCalledWith(true);
  });
});
