"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";

function IntroSequence() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="w-screen">
          <div className="flex h-screen items-center justify-center align-middle">
            <h1 className="text-center text-4xl">
              Unmatched Autonomy. Unyielding Precision.
            </h1>
          </div>
          <div className="flex h-screen items-center justify-center align-middle">
            <h1 className="text-center text-4xl">
              Equipped with advanced AI capabilities
            </h1>
          </div>
          <div className="flex h-screen items-center justify-center align-middle">
            <h1 className="text-center text-4xl">
              Surveillance to rapid deployment
            </h1>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default IntroSequence;
