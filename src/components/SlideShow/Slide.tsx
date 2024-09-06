import React from "react";
import Image from "next/image";
import { SlideProps } from "@/interfaces/types";
import Link from "next/link";

const Slide = React.forwardRef<HTMLDivElement, SlideProps>(({ slide }, ref) => {
  return (
    <div
      ref={ref}
      className="w-full flex-shrink-0 bg-white dark:bg-gray-800 p-4 md:p-6 lg:p-8 rounded-lg shadow-lg flex flex-col justify-start items-center"
      data-testid="slide-container"
    >
      <div
        className="w-full h-[300px] lg:h-[400px] flex justify-center items-center"
        data-testid="slide-image-container"
      >
        <Image
          src={slide.imagePath}
          alt={`Project ${slide.title}`}
          width={900}
          height={500}
          className="rounded-lg object-cover h-full w-auto shadow-md"
          data-testid="slide-image"
        />
      </div>
      <h3
        className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100 mt-4 lg:mt-6 text-center"
        data-testid="slide-title"
      >
        {slide.title}
      </h3>
      <p
        className="text-gray-700 dark:text-gray-300 mt-2 md:mt-4 lg:mt-6 lg:text-lg text-center"
        data-testid="slide-description"
      >
        {slide.description}
      </p>
      {slide.urlProject !== "developing" && (
        <div className="w-full flex justify-end mt-5">
          <Link
            href={slide.urlProject}
            passHref
            aria-label="Ir para o projeto"
            className="ml-auto border border-gray-400 rounded px-2 py-1 text-gray-600 hover:bg-gray-200 transition-opacity duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ir para
          </Link>
        </div>
      )}
    </div>
  );
});

Slide.displayName = "Slide";
export default Slide;
