import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import HamburgerButton from "../HamburgerButton";

describe("HamburgerButton", () => {
  test("renders the button with the correct data-testid", () => {
    render(<HamburgerButton isMenuOpen={false} setIsMenuOpen={() => {}} />);
    expect(screen.getByTestId("hamburger-button")).toBeInTheDocument();
  });

  test("toggles menu state when clicked", () => {
    const setIsMenuOpen = jest.fn();
    const { rerender } = render(
      <HamburgerButton isMenuOpen={false} setIsMenuOpen={setIsMenuOpen} />
    );

    // Click the button
    fireEvent.click(screen.getByTestId("hamburger-button"));

    // Check if setIsMenuOpen was called with true
    expect(setIsMenuOpen).toHaveBeenCalledWith(true);

    // Re-render with the new state
    rerender(
      <HamburgerButton isMenuOpen={true} setIsMenuOpen={setIsMenuOpen} />
    );

    // Click the button again
    fireEvent.click(screen.getByTestId("hamburger-button"));

    // Check if setIsMenuOpen was called with false
    expect(setIsMenuOpen).toHaveBeenCalledWith(false);
  });

  test("applies correct animation classes based on isMenuOpen prop", () => {
    const { rerender } = render(
      <HamburgerButton isMenuOpen={false} setIsMenuOpen={() => {}} />
    );

    // Check initial animation states
    expect(screen.getByTestId("hamburger-line-top")).toHaveClass(
      "bg-lightText"
    );
    expect(screen.getByTestId("hamburger-line-middle")).toHaveClass(
      "bg-lightText"
    );
    expect(screen.getByTestId("hamburger-line-bottom")).toHaveClass(
      "bg-lightText"
    );

    // Re-render with isMenuOpen true
    rerender(<HamburgerButton isMenuOpen={true} setIsMenuOpen={() => {}} />);

    // Check animation states after change
    expect(screen.getByTestId("hamburger-line-top")).toHaveClass(
      "bg-lightText"
    );
    expect(screen.getByTestId("hamburger-line-middle")).toHaveClass(
      "bg-lightText"
    );
    expect(screen.getByTestId("hamburger-line-bottom")).toHaveClass(
      "bg-lightText"
    );
  });
});
