"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Event } from "@/interfaces/types";
import { useInView } from "react-intersection-observer";
import { NextSeo } from "next-seo";

// Define the props type
interface TimelineEventProps {
  event: Event;
  index: number;
}

const TimelineEvent: React.FC<TimelineEventProps> = ({ event, index }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false, // Ensures that the animation can be reactivated
    threshold: 0.4,
  });

  useEffect(() => {
    controls.start({ opacity: inView ? 1 : 0, x: inView ? 0 : 30 });
  }, [inView, controls]);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

  return (
    <>
      <NextSeo
        title="Expectativas ao ser Contratado"
        description="Expectativas ao ser Contratado"
        canonical={baseUrl}
        openGraph={{
          url: `${baseUrl}/#expectativas`,
          title: "Career Timeline at Buzzvel",
          description: "Expectativas ao ser Contratado",
          site_name: "portfolio-diego-mota",
        }}
      />
      <motion.div
        ref={ref} // This ref is still used here for the intersection observer
        initial={{ opacity: 0, x: 30 }}
        animate={controls}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="mb-8 flex items-start flex-col md:flex-row"
        data-testid={`timeline-event-${index}`}
      >
        <div
          className={`absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-white transition-all duration-300 ${
            inView ? "w-4 h-4 bg-blue-500" : "bg-red-500"
          }`}
          data-testid={`timeline-indicator-${index}`}
        />
        <div
          className="ml-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          data-testid={`timeline-content-${index}`}
        >
          <h3
            className="text-xl font-semibold text-gray-800 dark:text-gray-200"
            data-testid={`timeline-year-${index}`}
          >
            {event.year}
          </h3>
          <h4
            className="text-lg font-medium text-gray-700 dark:text-gray-300"
            data-testid={`timeline-title-${index}`}
          >
            {event.title}
          </h4>
          <ul
            className="list-disc ml-5 mt-2 text-gray-600 dark:text-gray-400"
            data-testid={`timeline-details-${index}`}
          >
            {event.details.map((detail, i) => (
              <li key={i} data-testid={`timeline-detail-${index}-${i}`}>
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default TimelineEvent;
