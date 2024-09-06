markdown

# Buzzvel Microsite

This project is a fully responsive and SEO-optimized microsite developed to showcase my experience, explain my motivation to work at Buzzvel, and highlight Buzzvel's projects. Built using Next.js with TypeScript and styled with TailwindCSS, this site incorporates animations using GSAP and Framer Motion, ensuring a smooth and visually engaging user experience.

## Table of Contents

- [Buzzvel Microsite](#buzzvel-microsite)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Project Structure](#project-structure)

## Features

- **Landing Page**:
  - Animated introduction with name, title, and welcome message.
  - Hero section with a photo, tagline, and smooth entrance animations.
  - Responsive navigation bar with smooth scrolling.

- **About Me Section**:
  - Animated timeline of professional experience and skills.
  - Explanation of why I want to work at Buzzvel with text fades.

- **Buzzvel Projects Slideshow**:
  - Interactive slideshow featuring key Buzzvel projects.
  - Smooth transitions and responsiveness for all screen sizes.

- **Career Timeline**:
  - Visual timeline outlining a 3-5 year career progression at Buzzvel.
  - Smooth scrolling and reveal animations as users navigate through the timeline.

## Technologies Used

- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: GSAP, Framer Motion
- **Testing**: Jest
- **SEO Optimization**: Semantic HTML, Meta Tags, nex-seo
- **Responsive Design**: Media queries, Flexible layouts, Responsive units

## Project Structure

Here's a breakdown of the project structure:

```plaintext
├── src
│   ├── animations
│   │   └── // Large animation files and utilities
│   ├── page
│   │   ├── _document.tsx
│   │   ├── _app_.tsx
│   │   ├── layout.tsx
│   │   ├── index.tsx
│   │   ├── 404.tsx
│   │   └── ...
│   ├── components
│   │   ├── ExperienceSection
│   │   │   ├── ExperienceItem.tsx
│   │   │   ├── ExperienceSection.tsx
│   │   │   └── __tests__
│   │   │       ├── ExperienceItem.test.tsx
│   │   │       └── ExperienceSection.test.tsx
│   │   ├── Footer
│   │   │   ├── Footer.tsx
│   │   │   ├── Footer.test.tsx
│   │   │   └── ...
│   │   ├── HeroSection
│   │   │   ├── HeroSection.tsx
│   │   │   ├── HeroSection.test.tsx
│   │   │   └── ...
│   │   ├── Introduction
│   │   │   ├── Introduction.tsx
│   │   │   ├── Introduction.test.tsx
│   │   │   └── ...
│   │   ├── NavBar
│   │   │   ├── DesktopMenu.tsx
│   │   │   ├── HamburgerButton.tsx
│   │   │   ├── MenuItems.tsx
│   │   │   ├── NavBar.tsx
│   │   │   ├── ThemeToggle.tsx
│   │   │   └── __tests__
│   │   │       ├── DesktopMenu.test.tsx
│   │   │       ├── HamburgerButton.test.tsx
│   │   │       ├── MenuItems.test.tsx
│   │   │       ├── NavBar.test.tsx
│   │   │       └── ThemeToggle.test.tsx
│   │   ├── SlideShow
│   │   │   ├── PreviousNextButton.tsx
│   │   │   ├── Slide.tsx
│   │   │   ├── SlideShow.tsx
│   │   │   └── __tests__
│   │   │       ├── PreviousNextButton.test.tsx
│   │   │       ├── Slide.test.tsx
│   │   │       └── SlideShow.test.tsx
│   │   ├── SocialLinks
│   │   │   ├── SocialLinks.tsx
│   │   │   ├── SocialLinks.test.tsx
│   │   │   └── ...
│   │   ├── TimeLine
│   │   │   ├── TimeLine.tsx
│   │   │   ├── TimeLineEvent.tsx
│   │   │   └── __tests__
│   │   │       ├── TimeLine.test.tsx
│   │   │       └── TimeLineEvent.test.tsx
│   │   └── WhyBuzzvelSection
│   │       ├── WhyBuzzvelSection.tsx
│   │       ├── WhyBuzzvelSection.test.tsx
│   │       └── ...
│   ├── hooks
│   │   └── // Custom React hooks
│   ├── interfaces
│   │   └── types.ts // TypeScript interfaces and types
│   ├── styles
│   │   ├── globals.css
│   │   └── ...
│   └── setupTests.ts // Jest configuration for tests
├── public
│   ├── assets
│   │   ├── images
│   │   │   └── // General images for the site
│   │   └── projectsBuzzvel
│   │       └── // Images of Buzzvel projects
├── .env
├── .eslintrc.json
├── .gitignore
├── eslint.config.mjs
├── jest.config.js
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
├── tsconfig.json
└── ...

Installation

    Clone the repository:

    bash

git clone https://github.com/diegomota2374/buzzvel-challenge.git


Install dependencies:

bash

    npm install

Running the Project

To start the development server, run:

bash

npm run dev

Navigate to http://localhost:3000 in your browser to view the site.
Testing

This project uses Jest for testing. To run tests, use:

bash

npm run test

SEO Optimization

The site is optimized for search engines using the following techniques:

    Semantic HTML tags (header, main, article, section, footer).
    Meta tags for page title, description, and keywords.
    Integration with next-seo for comprehensive SEO management, including OpenGraph.
    Server-side rendering (SSR) with Next.js for faster loading and better indexing.

Responsive Design

    The microsite is fully responsive, ensuring optimal viewing on mobile, tablet, and desktop devices.
    Implemented using TailwindCSS's utility-first approach with media queries and responsive units (em, rem, %).

Animations

    Used GSAP and Framer Motion for smooth, visually appealing animations.
    CSS3 animations are employed for simple effects such as fading, sliding, and hover states.

Deployment

The project can be deployed on platforms like Vercel, Netlify, or any other hosting service that supports Next.js. To deploy, follow the steps provided by your chosen platform.
Contact

For any inquiries or feedback, feel free to contact me at diegomota2374@gmail.com.