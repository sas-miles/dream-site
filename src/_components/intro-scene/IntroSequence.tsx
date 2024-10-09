"use client";

import React, { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useAnimationStore } from "~/store/animationStore";

function IntroSequence({
  onScreenChange,
}: {
  onScreenChange: (screen: string) => void;
}) {
  const { currentScreen, isAnimating } = useAnimationStore();
  const contentOne = useRef<HTMLElement>(null);
  const contentTwo = useRef<HTMLElement>(null);
  const contentThree = useRef<HTMLElement>(null);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="z-50 w-screen">
          <section
            className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ${
              currentScreen === "Intro" && !isAnimating
                ? ""
                : "pointer-events-none opacity-0"
            }`}
            ref={contentOne}
          >
            <h1 className="text-center text-4xl">
              Unmatched Autonomy. Unyielding Precision.
            </h1>
            <button
              onClick={() => onScreenChange("Home")}
              className="rounded-full bg-gray-400 bg-opacity-50 p-3 font-medium text-white"
            ></button>
          </section>
          <section
            className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ${
              currentScreen === "Home" && !isAnimating
                ? ""
                : "pointer-events-none opacity-0"
            }`}
            ref={contentTwo}
          >
            <h1 className="text-center text-4xl">
              Equipped with advanced AI capabilities
            </h1>
            <button
              onClick={() => onScreenChange("Experience")}
              className="rounded-full bg-gray-400 bg-opacity-50 p-3 font-medium text-white"
            ></button>
          </section>
          <section
            className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ${
              currentScreen === "Final" && !isAnimating
                ? ""
                : "pointer-events-none opacity-0"
            }`}
            ref={contentThree}
          >
            <h1 className="text-center text-4xl">
              Surveillance to rapid deployment
            </h1>
            <button
              onClick={() => onScreenChange("Intro")}
              className="rounded-full bg-gray-400 bg-opacity-50 p-3 font-medium text-white"
            ></button>
          </section>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default IntroSequence;
