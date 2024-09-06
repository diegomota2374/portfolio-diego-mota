import { render, screen, fireEvent } from "@testing-library/react";
import { PreviousButton, NextButton } from "../PreviousNextButton";

describe("Button Components", () => {
  test("renders PreviousButton and handles click event", () => {
    const handleClick = jest.fn(); // Mock function

    render(<PreviousButton onClick={handleClick} />);

    // Check if the button is in the document
    const button = screen.getByTestId("previous-button");
    expect(button).toBeInTheDocument();

    // Check if the button has the correct text
    expect(button).toHaveTextContent("❮");

    // Simulate a click event
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("renders NextButton and handles click event", () => {
    const handleClick = jest.fn(); // Mock function

    render(<NextButton onClick={handleClick} />);

    // Check if the button is in the document
    const button = screen.getByTestId("next-button");
    expect(button).toBeInTheDocument();

    // Check if the button has the correct text
    expect(button).toHaveTextContent("❯");

    // Simulate a click event
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
