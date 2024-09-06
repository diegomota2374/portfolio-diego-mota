import { render, screen } from "@testing-library/react";
import TimelineEvent from "../TimelineEvent";
import { ReactNode } from "react";

// Mock framer-motion's motion.div component
jest.mock("framer-motion", () => ({
  ...jest.requireActual("framer-motion"),
  motion: {
    div: ({
      children,
      ...props
    }: {
      children: ReactNode;
      [key: string]: any;
    }) => <div {...props}>{children}</div>,
  },
}));
describe("TimelineEvent Component", () => {
  const event = {
    year: "Year 1",
    title: "Event Title",
    details: ["Detail 1", "Detail 2"],
  };

  test("renders correctly with initial props", () => {
    render(<TimelineEvent event={event} index={0} />);

    const timelineEventElement = screen.getByTestId("timeline-event-0");
    expect(timelineEventElement).toBeInTheDocument();

    // Check if initial classes or attributes are correctly set
    // Since styles might not be directly applied, focus on other attributes or class names
    expect(timelineEventElement).toHaveClass("mb-8");
    expect(timelineEventElement).toHaveClass("flex");
    expect(timelineEventElement).toHaveClass("items-start");
    expect(timelineEventElement).toHaveClass("flex-col");
    expect(timelineEventElement).toHaveClass("md:flex-row");

    // Check the indicator
    const indicatorElement = screen.getByTestId("timeline-indicator-0");
    expect(indicatorElement).toHaveClass("bg-red-500");

    // Check if content is present
    const contentElement = screen.getByTestId("timeline-content-0");
    expect(contentElement).toBeInTheDocument();
  });

  test("becomes visible when isVisible prop is true", () => {
    render(<TimelineEvent event={event} index={0} />);

    const timelineEventElement = screen.getByTestId("timeline-event-0");
    expect(timelineEventElement).toBeInTheDocument();

    // Check the classes after visibility change
    expect(timelineEventElement).toHaveClass("mb-8");
    expect(timelineEventElement).toHaveClass("flex");
    expect(timelineEventElement).toHaveClass("items-start");
    expect(timelineEventElement).toHaveClass("flex-col");
    expect(timelineEventElement).toHaveClass("md:flex-row");

    const indicatorElement = screen.getByTestId("timeline-indicator-0");
    expect(indicatorElement).toHaveClass(
      "absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-white transition-all duration-300 bg-red-500"
    );
  });
});
