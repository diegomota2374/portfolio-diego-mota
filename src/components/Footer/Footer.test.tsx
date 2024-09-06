import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer Component", () => {
  it("renders footer correctly", () => {
    render(<Footer />);

    // Check if the footer element is present
    const footer = screen.getByTestId("footer");
    expect(footer).toBeInTheDocument();

    // Check if the footer container is present
    const footerContainer = screen.getByTestId("footer-container");
    expect(footerContainer).toBeInTheDocument();

    // Check if the footer content is present
    const footerContent = screen.getByTestId("footer-content");
    expect(footerContent).toBeInTheDocument();

    // Check if the footer navigation section is present
    const footerNavigation = screen.getByTestId("footer-navigation");
    expect(footerNavigation).toBeInTheDocument();

    // Check if the navigation links are present
    expect(
      screen.getByTestId("footer-nav-link-introduction")
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("footer-nav-link-experience")
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("footer-nav-link-why-buzzvel")
    ).toBeInTheDocument();

    // Check if the social media links are present
    const socialLinks = screen.getByTestId("social-links");
    expect(socialLinks).toBeInTheDocument();

    // Check if the copyright section is present
    const footerCopyright = screen.getByTestId("footer-copyright");
    expect(footerCopyright).toBeInTheDocument();

    // Verify that the copyright text is correct and up-to-date
    const copyrightText = screen.getByTestId("footer-copyright-text");
    expect(copyrightText).toHaveTextContent(
      `© ${new Date().getFullYear()} Meu Portfolio. Diego Mota Cavalcante.`
    );
  });
});
