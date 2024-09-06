import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SlideShow from "../SlideShow";
import Image from "next/image";

// Mocking the Slide component
jest.mock("../Slide", () => {
  const MockSlide: React.FC<any> = (props) => (
    <div data-testid={props["data-testid"]}>
      <Image
        src={props.slide.imagePath}
        alt={`Project ${props.slide.title}`}
        width={800} // Ajuste conforme necessário
        height={600} // Ajuste conforme necessário
        layout="responsive"
      />
      <h3>{props.slide.title}</h3>
      <p>{props.slide.description}</p>
    </div>
  );
  MockSlide.displayName = "Slide"; // Adicionar nome de exibição
  return MockSlide;
});

// Mocking the PreviousButton and NextButton components
jest.mock("../PreviousNextButton", () => {
  const MockPreviousButton: React.FC<any> = (props) => (
    <button data-testid={props["data-testid"]} onClick={props.onClick}>
      Previous
    </button>
  );
  MockPreviousButton.displayName = "PreviousButton";

  const MockNextButton: React.FC<any> = (props) => (
    <button data-testid={props["data-testid"]} onClick={props.onClick}>
      Next
    </button>
  );
  MockNextButton.displayName = "NextButton";

  return {
    PreviousButton: MockPreviousButton,
    NextButton: MockNextButton,
  };
});

describe("SlideShow Component", () => {
  test("renders without crashing", () => {
    render(<SlideShow />);

    // Check if the title is in the document
    expect(screen.getByTestId("slideshow-title")).toBeInTheDocument();

    // Check if the container for slides is present
    expect(screen.getByTestId("slideshow-container")).toBeInTheDocument();

    // Check if the previous and next buttons are present
    expect(screen.getByTestId("previous-button")).toBeInTheDocument();
    expect(screen.getByTestId("next-button")).toBeInTheDocument();
  });

  test("changes slides when next and previous buttons are clicked", async () => {
    render(<SlideShow />);

    const previousButton = screen.getByTestId("previous-button");
    const nextButton = screen.getByTestId("next-button");

    // Click next button to go to the next slide
    fireEvent.click(nextButton);

    // Wait for the slide transition to occur
    await waitFor(() => {
      expect(screen.getByTestId("slide-1")).toBeInTheDocument();
    });

    // Click previous button to go back to the previous slide
    fireEvent.click(previousButton);

    // Wait for the slide transition to occur
    await waitFor(() => {
      expect(screen.getByTestId("slide-0")).toBeInTheDocument();
    });
  });
});
