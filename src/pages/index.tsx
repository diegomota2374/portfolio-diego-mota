// app/page.tsx
"use client";

import HeroSection from "@/components/HeroSection/HeroSection";
import Introduction from "@/components/Introduction/Introduction";
import NavigationBar from "@/components/NavBar/NavBar";
import SlideShow from "@/components/SlideShow/SlideShow";
import WhyMeSection from "@/components/WhyMeSection/WhyMeSection";
import Footer from "@/components/Footer/Footer"; // Importando o Footer
import React from "react";
import ExperienceSection from "@/components/ExperienceSection/ExperienceSection";
import Timeline from "@/components/TimelineSection/Timeline";

const Home = () => {
  return (
    <>
      <NavigationBar />
      <div className="min-h-screen">
        <Introduction />
        <HeroSection />
        <ExperienceSection />
        <WhyMeSection />
        <SlideShow />
        <Timeline />
      </div>
      <Footer />
    </>
  );
};

export default Home;
