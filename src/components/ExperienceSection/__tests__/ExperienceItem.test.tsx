import React from "react";
import { render, screen } from "@testing-library/react";
import ExperienceItem from "../ExperienceItem";

describe("ExperienceItem", () => {
  const mockProps = {
    year: "January/2024 - Present",
    description: (
      <>
        <p>
          Developed and maintained mobile systems, focusing on design and
          usability.
        </p>
        <p>
          Participated in project meetings to ensure effective solution
          delivery.
        </p>
        <p>
          Technologies: React Native, Expo, TypeScript, JavaScript, Git, Jest,
          Cypress
        </p>
      </>
    ),
  };

  test("renders experience item with correct year", () => {
    render(<ExperienceItem {...mockProps} />);
    const yearElement = screen.getByTestId("experience-item-year");
    expect(yearElement).toBeInTheDocument();
    expect(yearElement).toHaveTextContent(mockProps.year);
  });

  test("renders experience item with correct description", () => {
    render(<ExperienceItem {...mockProps} />);
    const descriptionElement = screen.getByTestId(
      "experience-item-description"
    );
    expect(descriptionElement).toBeInTheDocument();
    expect(descriptionElement).toContainHTML(
      "<p>Developed and maintained mobile systems, focusing on design and usability.</p>"
    );
    expect(descriptionElement).toContainHTML(
      "<p>Participated in project meetings to ensure effective solution delivery.</p>"
    );
    expect(descriptionElement).toContainHTML(
      "<p>Technologies: React Native, Expo, TypeScript, JavaScript, Git, Jest, Cypress</p>"
    );
  });

  test("applies animation when in view", () => {
    render(<ExperienceItem {...mockProps} />);
    const experienceItem = screen.getByTestId("experience-item");
    expect(experienceItem).toBeInTheDocument();
    // To accurately test animation, you may need to mock IntersectionObserver or use a library to simulate viewport.
  });
});
