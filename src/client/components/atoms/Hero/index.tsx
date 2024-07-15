import React from "react";

export default function Hero(): JSX.Element {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] left-0 z-[1] w-full h-full object-cover"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>
    </div>
  );
}
