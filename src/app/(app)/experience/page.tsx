"use client";
import { useState, useEffect } from "react";
import React from "react";
import { LoadingScreen } from "~/_components/intro-scene/LoadingScreen";
import { useProgress } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import Scene from "~/_components/intro-scene/Scene";

export default function ExperiencePage() {
  const { progress, active } = useProgress();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (progress === 100 && !active) {
      const timer = setTimeout(() => setIsLoading(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [progress, active]);

  return (
    <div className="relative min-h-screen bg-black">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="relative h-screen w-full"
          >
            <div className="fixed inset-0 z-0">
              <Scene />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
