"use client";
import React from "react";
import { Sparkles } from "../UI/sparkles";
import { MdArrowOutward } from "react-icons/md";

function HeroSection() {
  return (
    <div className="h-[80vh] w-full bg-[#0A0A0A] flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-5xl  lg:text-7xl text-3xl font-Regular text-center text-[#5F5F5F] relative z-20 !lg:leading-[5rem] !md:leading-[4rem] !sm:leading-[2.5rem]">
        Where Art Meets <span className="font-semibold text-white">Code,</span>{" "}
        <br />
        Crafting Interactive{" "}
        <span className="font-semibold text-white">Elegance.</span> <br />
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <Sparkles
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-[#0A0A0A] [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
      <div className="flex gap-5 justify-center items-center">
        <button className="border-[1px] border-[#A9A9A9] py-3 px-5 rounded-3xl transition duration-300 ease-in-out hover:opacity-70">
          Say HI 👏
        </button>
        <button className="border-[1px] border-[#A9A9A9] py-3 px-5 rounded-3xl flex items-center gap-2 transition duration-300 ease-in-out hover:opacity-70">
          Resume{" "}
          <span>
            <MdArrowOutward />
          </span>
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
