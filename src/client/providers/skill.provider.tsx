"use  client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface SkillProviderProps {
  src: string;
  width: number;
  heigth: number;
  index: number;
}

export default function SkillProvider({
  src,
  width,
  heigth,
  index,
}: SkillProviderProps): JSX.Element {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const imageVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    }),
    []
  );

  const animationDelay = 0.3;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
    >
      <Image src={src} width={width} height={heigth} alt="Skill image" />
    </motion.div>
  );
}
