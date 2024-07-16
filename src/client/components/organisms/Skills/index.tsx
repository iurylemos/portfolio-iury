"use client";

import {
  backendSkills,
  frontendSkills,
  fullStackSkills,
  otherSkill,
  skillData,
} from "@/src/client/constants/navbar.constant";
import SkillProvider from "@/src/client/providers/skill.provider";
import React from "react";
import SkillText from "@/src/client/components/atoms/SkillText";

export default function Skills(): JSX.Element {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {skillData.map((skill, idx) => (
          <React.Fragment key={skill.skill_name}>
            <SkillProvider
              src={skill.Image}
              heigth={skill.height}
              width={skill.width}
              index={idx}
            />
          </React.Fragment>
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {frontendSkills.map((skill, idx) => (
          <React.Fragment key={skill.skill_name}>
            <SkillProvider
              src={skill.Image}
              heigth={skill.height}
              width={skill.width}
              index={idx}
            />
          </React.Fragment>
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {backendSkills.map((skill, idx) => (
          <React.Fragment key={skill.skill_name}>
            <SkillProvider
              src={skill.Image}
              heigth={skill.height}
              width={skill.width}
              index={idx}
            />
          </React.Fragment>
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {fullStackSkills.map((skill, idx) => (
          <React.Fragment key={skill.skill_name}>
            <SkillProvider
              src={skill.Image}
              heigth={skill.height}
              width={skill.width}
              index={idx}
            />
          </React.Fragment>
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {otherSkill.map((skill, idx) => (
          <React.Fragment key={skill.skill_name}>
            <SkillProvider
              src={skill.Image}
              heigth={skill.height}
              width={skill.width}
              index={idx}
            />
          </React.Fragment>
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/cards-video.mp4" type="video/mp4" />
            <source src="/videos/cards-video.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
}
