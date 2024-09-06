"use client";

import React from "react";
import TimelineEvent from "./TimelineEvent";
import { events } from "@/mocks/mocks";

const Timeline: React.FC = () => {
  return (
    <>
      <section
        id="expectativas"
        className="py-10 px-4 bg-lightBackground dark:bg-darkBackground scroll-smooth"
        data-testid="timeline-section"
      >
        <h1
          className="text-3xl font-bold text-center text-lightText dark:text-darkText mb-8"
          data-testid="timeline-title"
        >
          Expectativas ao ser Contratado
        </h1>

        <div
          className="w-full max-w-4xl mx-auto px-4 py-8"
          data-testid="timeline-container"
        >
          <div
            className="relative border-l-2 border-gray-300"
            data-testid="timeline"
          >
            {events.map((event, index) => (
              <TimelineEvent
                key={index}
                event={event}
                index={index}
                data-testid={`timeline-event-${index}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Timeline;
