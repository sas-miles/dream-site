"use client";

import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Html } from "@react-three/drei";

interface ScrollHandlerProps {
  onExperienceTransition: () => void;
  setIsExiting: (isExiting: boolean) => void;
}

const ScrollHandler: React.FC<ScrollHandlerProps> = ({
  onExperienceTransition,
  setIsExiting,
}) => {
  const scroll = useScroll();
  const router = useRouter();
  const [isExiting, setIsExitingState] = useState(false);

  useEffect(() => {
    console.log("ScrollHandler mounted");
  }, []);

  useFrame(() => {
    if (scroll && scroll.offset === 1 && !isExiting) {
      setIsExiting(true);
      setIsExitingState(true);
      onExperienceTransition();
    }
  });

  useEffect(() => {
    if (isExiting) {
      const timer = setTimeout(() => {
        router.push("/experience/drone");
      }, 1000); // Duration of the exit animation

      return () => clearTimeout(timer);
    }
  }, [isExiting, router]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <Html center>
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </Html>
      )}
    </AnimatePresence>
  );
};

export default ScrollHandler;
