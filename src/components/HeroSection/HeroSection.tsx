"use client";

import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import { NextSeo } from "next-seo";
import Image from "next/image";

const HeroSection = () => {
  const profileImageRef = useRef<HTMLImageElement>(null);
  const sloganRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null); // Corrigido para HTMLParagraphElement

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

  // Track if the section is in view
  const { ref, inView } = useInView({
    triggerOnce: false, // Ensure the animation can re-trigger
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      // GSAP animations for profile image and slogan
      gsap.from(profileImageRef.current, {
        opacity: 0,
        y: -50,
        duration: 1.5,
        ease: "power3.out",
      });

      gsap.from(sloganRef.current, {
        opacity: 0,
        y: 30,
        duration: 1.5,
        delay: 0.5,
        ease: "power3.out",
      });

      gsap.from(paragraphRef.current, {
        opacity: 0,
        y: 20,
        duration: 1.5,
        delay: 1,
        ease: "power3.out",
      });
    }
  }, [inView]); // Re-run the effect when inView changes

  return (
    <>
      <NextSeo
        title="Sobre Mim"
        description="Olá, sou Analista de Desenvolvimento Front-end. Especializado em
            JavaScript, TypeScript, React, React Native, Next.js, e Node.js,"
        canonical={baseUrl}
        openGraph={{
          url: `${baseUrl}/#sobre-Min`,
          title: "Diego Mota Cavalcante",
          description:
            "Olá, sou Analista de Desenvolvimento Front-end. Especializado em JavaScript, TypeScript, React, React Native, Next.js, e Node.js,",
          images: [
            {
              url: `${baseUrl}/assets/diego02.jpg`,
              width: 800,
              height: 600,
              alt: "Diego Mota Cavalcante",
            },
            {
              url: `${baseUrl}/assets/hero-section-back.jpg`,
              width: 800,
              height: 600,
              alt: "Background of Hero Section",
            },
          ],
          site_name: "portfolio-diego-mota",
        }}
      />
      <section
        id="sobre-Mim"
        ref={ref} // Attach ref to the section
        className="min-h-[95vh] bg-cover bg-center relative flex items-center justify-center"
        data-testid="hero-section" // Added data-testid
      >
        {/* Tailwind Styles for Background Image Based on Screen Size */}
        <style jsx>{`
          #sobre-Mim {
            background-image: url("/assets/hero-section-back.jpg");
          }

          @media (max-width: 768px) {
            #sobre-Mim {
              background-image: url("/assets/hero-section-back-min.jpg");
            }
          }
        `}</style>

        {/* Overlay to darken background image and improve text readability */}
        <div
          className="absolute inset-0 bg-black opacity-50"
          data-testid="overlay"
        />

        {/* Container for content */}
        <div
          className="relative z-10 flex flex-col items-center justify-center p-6 md:p-8 text-center bg-white bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80 rounded-lg shadow-lg max-w-4xl"
          data-testid="content-container" // Added data-testid
        >
          <Image
            ref={profileImageRef}
            src="/assets/diego02.jpg"
            alt="Profile"
            width={160} // Adjust dimensions as needed
            height={160}
            className="rounded-full mb-4 object-cover border-4 border-gray-200 dark:border-gray-700"
            data-testid="profile-image" // Added data-testid
          />
          <h1
            ref={sloganRef}
            className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-4"
            data-testid="slogan" // Added data-testid
          >
            Diego Mota Cavalcante
          </h1>
          <p
            ref={paragraphRef}
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300"
            data-testid="paragraph" // Added data-testid
          >
            Olá, sou Analista de Desenvolvimento Front-end. Especializado em
            JavaScript, TypeScript, React, React Native, Next.js, e Node.js,
            além de ferramentas de teste como Jest e Cypress. Focado em
            resultados e eficiência, busco continuamente aprimorar minhas
            habilidades.
          </p>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
