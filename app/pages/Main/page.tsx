import AboutSection from "@/components/AboutSection/AboutSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import MarqueeSection from "@/components/MarqueeSection/MarqueeSection";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import WorkSection from "@/components/WorkSection/WorkSection";
import React from "react";

function Main() {
  return (
    <div className="dp-container pb-10">
      <div className="">
        <NavigationBar />
        <div className=" flex flex-col gap-20">
          <HeroSection />
          <AboutSection />
          <WorkSection/>
          <MarqueeSection/>
        </div>
      </div>
    </div>
  );
}

export default Main;
