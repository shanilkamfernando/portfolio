"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../UI/infinite-moving-cards";

const testimonials = [
  {
    quote: "/assets/Images/js.png",
  },
  {
    quote: "/assets/Images/bootstrap.png",
  },
  {
    quote: "/assets/Images/github.png",
  },
  {
    quote: "/assets/Images/physics.png",
  },
  {
    quote: "/assets/Images/typescript.png",
  },
  {
    quote: "/assets/Images/webflow.png",
  },
  {
    quote: "/assets/Images/tailwindcss.svg",
  },
  {
    quote: "/assets/Images/storybook.svg",
  },
  {
    quote: "/assets/Images/scss.svg",
  },
  {
    quote: "/assets/Images/css.svg",
  },
  {
    quote: "/assets/Images/html.svg",
  },
];

function MarqueeSection() {
  return (
    <div className="w-full py-10">
      <div className="rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
        />
      </div>
    </div>
  );
}

export default MarqueeSection;
