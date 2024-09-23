"use client";

import React, { useState, useEffect } from "react";
import { useProgress } from "@react-three/drei";
import Image from "next/image";
import { motion } from "framer-motion";

export function LoadingScreen() {
  const { progress } = useProgress();
  const [showProgress, setShowProgress] = useState(false);

  useEffect(() => {
    setShowProgress(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white"
    >
      <Image src="/logo.svg" alt="logo" width={252} height={31} priority />
      <div className="relative mb-4 h-[200px] w-[400px]">
        <div className="bg-grid-pattern absolute inset-0 opacity-30" />
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-white"
          initial={{ width: "0%" }}
          animate={{ width: showProgress ? `${progress}%` : "0%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>
      <div className="text-sm font-light">
        {showProgress ? `Loading... ${Math.round(progress)}%` : "Loading..."}
      </div>
    </motion.div>
  );
}
