"use client";

import React from "react";
import TimelineEvent from "./TimelineEvent";
import { Event } from "@/interfaces/types";

const Timeline: React.FC = () => {
  const events: Event[] = [
    {
      year: "Ano 1",
      title: "Estabelecendo a Fundação",
      details: [
        "Imersão: Vou me aprofundar no ecossistema da empresa, conhecendo suas ferramentas, processos e a dinâmica da equipe.",
        "Aprendizado Guiado: Vou trabalhar junto a um desenvolvedor sênior para acelerar meu entendimento e habilidades de desenvolvimento.",
        "Contribuições Iniciais: Vou resolver tarefas menores, focando em dominar os padrões de código e fluxos de trabalho da empresa.",
      ],
    },
    {
      year: "Ano 2-3",
      title: "Expandindo Habilidades e Assumindo Controle",
      details: [
        "Liderança de Projetos: Vou assumir a responsabilidade por projetos de pequeno e médio porte, garantindo que estejam alinhados com os objetivos da empresa.",
        "Aprimoramento de Habilidades: Vou aprofundar meu conhecimento em conceitos avançados e explorar novas tecnologias que são fundamentais para o sucesso da empresa.",
        "Papel de Mentor: Vou começar a orientar desenvolvedores juniores, ajudando-os a se integrar e crescer dentro da equipe.",
      ],
    },
    {
      year: "Ano 4-5",
      title: "Liderança e Inovação",
      details: [
        "Avançando: Vou buscar um papel de liderança, seja como líder de equipe ou desenvolvedor sênior, impulsionando iniciativas importantes.",
        "Contribuição Estratégica: Vou desempenhar um papel significativo na definição da direção do desenvolvimento front-end na empresa, introduzindo soluções inovadoras.",
        "Aprendizado Contínuo: Vou me manter à frente das tendências da indústria e constantemente trazer novos insights para os projetos da empresa.",
      ],
    },
  ];

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
