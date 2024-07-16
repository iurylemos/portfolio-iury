"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/src/client/utils/motion.util";
import { SparklesIcon } from "@heroicons/react/24/solid";

export default function Hero(): JSX.Element {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="welcome-box py-[8px] px-[4px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b490ff] mr-[10px] h-5 w-5" />
          <h1 className="welcome-text text-[13px]">
            Full Stack Developer Portfolio
          </h1>
        </motion.div>
      </div>
    </motion.div>
  );
}
