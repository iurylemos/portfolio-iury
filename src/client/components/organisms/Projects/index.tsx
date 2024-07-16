"use client";

import React, { useMemo } from "react";
import ProjectCard, {
  ProjectCardProps,
} from "@/src/client/components/molecules/ProjectCard";

export default function Projects(): JSX.Element {
  const projects: ProjectCardProps[] = useMemo(
    () => [
      {
        src: "/images/nextwebsite.png",
        title: "Modern Next.js Portfolio",
        description: "description about next web site",
      },
      {
        src: "/images/cardimage.png",
        title: "Interactive website cards",
        description: "Description about cards",
      },
      {
        src: "/images/spacewebsite.png",
        title: "Space themed web site",
        description: "Description about cards",
      },
    ],
    []
  );

  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        {projects.map((project) => (
          <React.Fragment key={project.title}>
            <ProjectCard
              src={project.src}
              title={project.title}
              description={project.description}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
