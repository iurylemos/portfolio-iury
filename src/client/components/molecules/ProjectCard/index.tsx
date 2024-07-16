import Image from "next/image";
import React from "react";

export interface ProjectCardProps {
  src: string;
  title: string;
  description: string;
}

export default function ProjectCard({
  src,
  title,
  description,
}: Readonly<ProjectCardProps>): JSX.Element {
  return (
    <div className="relative overflow-hidden rounded shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        title={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
        alt="test"
      />
      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
}
