import React from "react";
import { render, screen } from "@testing-library/react";
import SocialLinks from "./SocialLinks";

describe("SocialLinks Component", () => {
  it("renders social links with correct attributes", () => {
    // Render the SocialLinks component
    render(<SocialLinks />);

    // Check if the container div is present
    const socialLinksContainer = screen.getByTestId("social-links");
    expect(socialLinksContainer).toBeInTheDocument();

    // Check if the LinkedIn link is present
    const linkedinLink = screen.getByTestId("linkedin-link");
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/diegomotadev/"
    );
    expect(linkedinLink).toHaveAttribute("target", "_blank");
    expect(linkedinLink).toHaveAttribute("rel", "noopener noreferrer");

    // Check if the GitHub link is present
    const githubLink = screen.getByTestId("github-link");
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/diegomota2374"
    );
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");

    // Check if the LinkedIn icon is present
    const linkedinIcon = screen.getByTestId("linkedin-icon");
    expect(linkedinIcon).toBeInTheDocument();

    // Check if the GitHub icon is present
    const githubIcon = screen.getByTestId("github-icon");
    expect(githubIcon).toBeInTheDocument();
  });
});
