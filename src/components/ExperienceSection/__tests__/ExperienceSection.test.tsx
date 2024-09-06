import React from "react";
import { render, screen } from "@testing-library/react";
import ExperienceSection from "../ExperienceSection";

describe("ExperienceSection", () => {
  test("renders the section title", () => {
    render(<ExperienceSection />);
    const titleElement = screen.getByTestId("experience-section-title");
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent("Experiência");
  });

  test("renders all experience items", () => {
    render(<ExperienceSection />);
    const experienceItems = screen.getAllByTestId("experience-item");
    expect(experienceItems.length).toBe(3); // Há 3 itens de experiência no componente
  });

  test("renders correct descriptions for experience items", () => {
    render(<ExperienceSection />);
    const descriptions = screen.getAllByTestId("experience-item-description");
    expect(descriptions.length).toBeGreaterThanOrEqual(9); // Total de parágrafos
  });
});
