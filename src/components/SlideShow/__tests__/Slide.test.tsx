import React from "react";
import Image from "next/image";
import { render, screen } from "@testing-library/react";
import Slide from "../Slide"; // Adjust the import path based on your file structure

// Mock the Image component from Next.js
jest.mock("next/image", () => {
  // Define the MockImage component
  const MockImage = (props: React.ComponentProps<typeof Image>) => {
    // Use a type assertion to ensure compatibility with <img>
    return (
      <img
        {...(props as React.ImgHTMLAttributes<HTMLImageElement>)}
        alt={props.alt || "mock image"}
      />
    );
  };
  MockImage.displayName = "MockImage";
  return MockImage;
});

describe("Slide Component", () => {
  const slideProps = {
    slide: {
      imagePath: "/path/to/image.jpg",
      title: "Slide Title",
      description: "Slide Description",
      urlProject: "url",
    },
  };

  test("renders correctly with initial props", () => {
    render(<Slide {...slideProps} />);

    const containerElement = screen.getByTestId("slide-container");
    const imageContainerElement = screen.getByTestId("slide-image-container");
    const imageElement = screen.getByTestId("slide-image");
    const titleElement = screen.getByTestId("slide-title");
    const descriptionElement = screen.getByTestId("slide-description");

    // Check if container is in the document
    expect(containerElement).toBeInTheDocument();

    // Check if image container is in the document
    expect(imageContainerElement).toBeInTheDocument();

    // Check if image has correct src and alt attributes
    expect(imageElement).toHaveAttribute("src", slideProps.slide.imagePath);
    expect(imageElement).toHaveAttribute(
      "alt",
      `Project ${slideProps.slide.title}`
    );

    // Check if title and description are rendered correctly
    expect(titleElement).toHaveTextContent(slideProps.slide.title);
    expect(descriptionElement).toHaveTextContent(slideProps.slide.description);
  });

  test("renders correctly with different props", () => {
    const differentSlideProps = {
      slide: {
        imagePath: "/path/to/another-image.jpg",
        title: "Another Slide Title",
        description: "Another Slide Description",
        urlProject: "url",
      },
    };

    render(<Slide {...differentSlideProps} />);

    const imageElement = screen.getByTestId("slide-image");
    const titleElement = screen.getByTestId("slide-title");
    const descriptionElement = screen.getByTestId("slide-description");

    // Check if image has correct src and alt attributes
    expect(imageElement).toHaveAttribute(
      "src",
      differentSlideProps.slide.imagePath
    );
    expect(imageElement).toHaveAttribute(
      "alt",
      `Project ${differentSlideProps.slide.title}`
    );

    // Check if title and description are rendered correctly
    expect(titleElement).toHaveTextContent(differentSlideProps.slide.title);
    expect(descriptionElement).toHaveTextContent(
      differentSlideProps.slide.description
    );
  });
});
