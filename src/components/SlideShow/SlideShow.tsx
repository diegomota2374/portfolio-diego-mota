"use client";

import React, { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { NextButton, PreviousButton } from "./PreviousNextButton";
import Slide from "./Slide";
import gsap from "gsap";
import { NextSeo } from "next-seo";

const slides = [
  {
    title: "Task-Manager",
    description:
      "Este projeto é uma aplicação web para gerenciamento de tarefas, construída utilizando React para o frontend e Node.js para o backend com TypeScript.",
    imagePath: "/assets/projectsPortfolio/image-task-manager-project.jpg",
    urlProject: "https://task-manager-frontend-two-blue.vercel.app",
  },
  {
    title: "crowd app",
    description:
      "Aplicativo movel em desenvolvimento utilizando as tecnologias: React Native, Expo, TypeScript, JavaScript, Git, Jest, Cypress ",
    imagePath: "/assets/projectsPortfolio/image-crowd-project.jpg",
    urlProject: "developing",
  },
  {
    title: "Teste Simples Para Estágio",
    description:
      "Este projeto React, inclui verificação de números de Fibonacci, análise de strings e outros. A aplicação utiliza SCSS para estilização e Jest para testes.",
    imagePath: "/assets/projectsPortfolio/image-teste-estagio-project.jpg",
    urlProject: "https://estagio-ribeirao-preto-teste.vercel.app",
  },
];

const SlideShow = () => {
  const slidesRef = useRef<HTMLDivElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHolding, setIsHolding] = useState(false); // Track if holding mouse or touch

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView && !isHolding) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 5000); // Change slide every 10 seconds

      return () => clearInterval(interval);
    }
  }, [inView, isHolding]);

  const handleMouseDown = () => setIsHolding(true);
  const handleMouseUp = () => setIsHolding(false);
  const handleTouchStart = () => setIsHolding(true);
  const handleTouchEnd = () => setIsHolding(false);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      container.addEventListener("mousedown", handleMouseDown);
      container.addEventListener("mouseup", handleMouseUp);
      container.addEventListener("touchstart", handleTouchStart);
      container.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousedown", handleMouseDown);
        container.removeEventListener("mouseup", handleMouseUp);
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, []);

  useEffect(() => {
    if (inView) {
      gsap.fromTo(
        slidesRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.5,
          ease: "power3.out",
        }
      );
    }
  }, [inView]);

  return (
    <>
      <NextSeo
        title="Projetos Diego Mota"
        description="Projetos realizados ou que estão em desenvolvimento por diego mota"
        openGraph={{
          title: "Projetos Diego Mota",
          url: `${baseUrl}/#projetos`,
          description:
            "Projetos realizados ou que estão em desenvolvimento por diego mota",
          images: [
            {
              url: `${baseUrl}/assets/projectsPortfolio/image-task-manager-project.jpg`,
              width: 800,
              height: 600,
              alt: "task-manager",
            },
            {
              url: `${baseUrl}/assets/projectsPortfolio/image-task-manager-project.jpg`,
              width: 800,
              height: 600,
              alt: "task-manager",
            },
          ],
          site_name: "portfolio-diego-mota",
        }}
      />
      <section
        id="projetos"
        ref={(node) => {
          if (node) {
            ref(node);
            containerRef.current;
          }
        }}
        className="min-h-full py-10 px-4 bg-lightBackground dark:bg-darkBackground relative"
        data-testid="slideshow-section"
      >
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-lightText dark:text-darkText mb-8"
          data-testid="slideshow-title"
        >
          Projetos Diego Mota
        </h2>
        <div
          className="relative overflow-hidden max-w-6xl mx-auto min-h-80"
          data-testid="slideshow-container"
          ref={containerRef} // Reference container for mouse and touch events
        >
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            data-testid="slides-container"
          >
            {slides.map((slide, index) => (
              <Slide
                key={index}
                ref={(el) => {
                  if (el) {
                    slidesRef.current[index] = el;
                  }
                }}
                slide={slide}
                data-testid={`slide-${index}`}
              />
            ))}
          </div>
          <PreviousButton
            onClick={() =>
              setCurrentIndex(
                (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
              )
            }
            data-testid="previous-button"
          />
          <NextButton
            onClick={() =>
              setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
            }
            data-testid="next-button"
          />
        </div>
      </section>
    </>
  );
};

export default SlideShow;
