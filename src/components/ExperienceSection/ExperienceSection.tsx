// src/components/ExperienceSection.tsx

import React from "react";
import ExperienceItem from "./ExperienceItem";
import { NextSeo } from "next-seo";

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
          <ExperienceItem
            year="Janeiro/2024 - Presente"
            description={
              <>
                <p data-testid="experience-item-description">
                  Desenvolvi e mantive sistemas móveis, com foco em design e
                  usabilidade.
                </p>
                <p data-testid="experience-item-description">
                  Participei de reuniões de projeto para garantir a entrega
                  eficaz das soluções.
                </p>
                <p data-testid="experience-item-description">
                  Tecnologias: React Native, Expo, TypeScript, JavaScript, Git,
                  Jest, Cypress
                </p>
              </>
            }
            data-testid="experience-item"
          />

          {/* Freelancer | Desenvolvedor Front-end (Anterior) */}
          <ExperienceItem
            year="Janeiro/2022 - Setembro/2022"
            description={
              <>
                <p data-testid="experience-item-description">
                  Desenvolvi e mantive sistemas web com foco em design
                  responsivo e experiência do usuário.
                </p>
                <p data-testid="experience-item-description">
                  Colaborei em reuniões para alinhamento de requisitos e
                  acompanhamento de progresso.
                </p>
                <p data-testid="experience-item-description">
                  Tecnologias: React.js, Next.js, Material UI, TypeScript,
                  JavaScript, Git
                </p>
              </>
            }
            data-testid="experience-item"
          />

          {/* Cybertec Informática | Técnico de TI */}
          <ExperienceItem
            year="Janeiro/2018 - Julho/2018"
            description={
              <>
                <p data-testid="experience-item-description">
                  Forneci manutenção de hardware e suporte técnico, incluindo
                  impressoras e computadores.
                </p>
                <p data-testid="experience-item-description">
                  Preparei relatórios técnicos e documentação de processos.
                </p>
              </>
            }
            data-testid="experience-item"
          />
        </div>
      </section>
    </>
  );
};

export default ExperienceSection;
