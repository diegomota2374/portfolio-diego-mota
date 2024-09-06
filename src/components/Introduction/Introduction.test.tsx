import React from "react";
import { render, screen } from "@testing-library/react";
import Introduction from "./Introduction";

// Grouping related tests for the Introduction component
describe("Introduction Component", () => {
  test("renders the introduction section", () => {
    // Render the Introduction component
    render(<Introduction />);

    // Check if the main section is in the document
    const sectionElement = screen.getByTestId("introduction-section");
    expect(sectionElement).toBeInTheDocument();

    // Check if the gradient overlay is present
    const gradientOverlay = screen.getByTestId("gradient-overlay");
    expect(gradientOverlay).toBeInTheDocument();

    // Check if the animated content is present
    const animatedContent = screen.getByTestId("animated-content");
    expect(animatedContent).toBeInTheDocument();

    // Check if the animated diagonalStripeTopLeft is present
    const diagonalStripeTopLeft = screen.getByTestId("left-stripe");
    expect(diagonalStripeTopLeft).toBeInTheDocument();

    // Check if the animated diagonalStripeBottomRight is present
    const diagonalStripeBottomRight = screen.getByTestId("right-stripe");
    expect(diagonalStripeBottomRight).toBeInTheDocument();

    // Check if the main heading text is correct
    const mainHeading = screen.getByTestId("main-heading");
    expect(mainHeading).toHaveTextContent("Bem-vindo ao Meu Portfólio!");

    // Check if the subheading text is correct
    const subheading = screen.getByTestId("subheading");
    expect(subheading).toHaveTextContent(
      "Sou Diego Mota Cavalcante, desenvolvedor focado em criar experiências web inovadoras."
    );
  });
});
