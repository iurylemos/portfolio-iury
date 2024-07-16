import React from "react";
import Hero from "@/src/client/components/atoms/Hero";

export default function HeroContainer(): JSX.Element {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] w-full h-full left-0 z-[1] object-cover"
      >
        <source src="/videos/blackhole.mp4" type="video/mp4" />
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>
      <Hero />
    </div>
  );
}
