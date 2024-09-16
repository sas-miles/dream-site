"use client";

import React from "react";
import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";
import { useAnimationStore } from "~/store/animationStore";

export default function Landing() {
  const controls = useAnimationControls();
  const { setTargetScreen, currentScreen, isAnimating, setIsAnimating } =
    useAnimationStore();

  const handleClick = async () => {
    if (isAnimating) return; // Prevent multiple animations

    setIsAnimating(true);
    await controls.start({ opacity: 0, y: 20, transition: { duration: 0.5 } });
    setTargetScreen("Home");
    setIsAnimating(false);
  };

  return (
    <div>
      <motion.main
        animate={controls}
        initial={{ opacity: 1, y: 0 }}
        className={`fixed flex h-screen w-full flex-col items-center justify-between gap-4 py-12 align-middle transition-opacity duration-300 ${
          currentScreen === "Intro" && !isAnimating
            ? ""
            : "pointer-events-none opacity-0"
        }`}
      >
        <Image src={"/logo.svg"} alt={"logo"} width={252} height={31} />
        <h1 className="text-center text-4xl">
          Unmatched Autonomy. Unyielding Precision.
        </h1>
        <Button size={"lg"} onClick={handleClick} disabled={isAnimating}>
          Enter_
        </Button>
      </motion.main>
    </div>
  );
}
