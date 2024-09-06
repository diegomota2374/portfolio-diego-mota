// src/components/ExperienceSection.tsx

import React from "react";
import ExperienceItem from "./ExperienceItem";
import { NextSeo } from "next-seo";
import { experiences } from "@/mocks/mocks";

const ExperienceSection = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <>
      {/* Setting up SEO for the experience section */}
      <NextSeo
        title="Experiências"
        description="Desenvolvi e mantive sistemas móveis, com foco em design e
                  usabilidade."
        openGraph={{
          title: "Experiências",
          description:
            "Desenvolvi e mantive sistemas móveis, com foco em design e usabilidade.",
          url: `${baseUrl}/#experiências`,

          site_name: "portfolio-diego-mota",
        }}
      />
      <section
        id="experiências"
        className="py-12 px-4 sm:px-6 lg:px-8"
        data-testid="experience-section"
      >
        <h2
          className="text-3xl font-bold text-center text-gray-600 dark:text-gray-200 mb-8"
          data-testid="experience-section-title"
        >
          Experiências
        </h2>
        <div
          className="max-w-2xl mx-auto"
          data-testid="experience-items-container"
        >
          {/* Freelancer | Desenvolvedor Front-end (Atual) */}
          {experiences.map((experience, index) => (
            <ExperienceItem
              key={index}
              year={experience.year}
              description={
                <>
                  {experience.description.map((desc, idx) => (
                    <p key={idx} data-testid="experience-item-description">
                      {desc}
                    </p>
                  ))}
                </>
              }
              data-testid="experience-item"
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default ExperienceSection;
