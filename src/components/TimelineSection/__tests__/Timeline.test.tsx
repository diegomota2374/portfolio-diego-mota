import { render, screen } from "@testing-library/react";
import Timeline from "../Timeline";

describe("Timeline Component", () => {
  test("renders the Timeline section and its title", () => {
    render(<Timeline />);

    expect(screen.getByTestId("timeline-section")).toBeInTheDocument();
    expect(screen.getByTestId("timeline-title")).toHaveTextContent(
      "Expectativas ao ser Contratado"
    );
  });

  test("renders all TimelineEvent components with correct data-testid attributes", () => {
    render(<Timeline />);

    const timelineEventElements = screen.getAllByTestId(/timeline-event-/);
    expect(timelineEventElements).toHaveLength(3);

    timelineEventElements.forEach((element, index) => {
      expect(element).toHaveAttribute("data-testid", `timeline-event-${index}`);
    });
  });
});
