"use client";

import React from "react";
import { useSmartBarStore } from "~/store/smartbarStore";
import { motion } from "framer-motion";
import ClosedSmartBar from "./ClosedSmartBar";
import OpenSmartBar from "./OpenSmartBar";
import ContextSideBar from "./ContextSideBar";

function SmartBar() {
  const isOpen = useSmartBarStore((state) => state.isOpen);
  const toggleOpen = useSmartBarStore((state) => state.toggleOpen);

  const handleToggleContextSideBar = () => {
    // Your logic to toggle the context sidebar
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {isOpen ? <OpenSmartBar /> : <ClosedSmartBar />}
      <ContextSideBar
        isOpen={isOpen}
        onClose={toggleOpen}
        onToggleContextSideBar={toggleOpen}
        // ... other props
      />
    </motion.div>
  );
}

export default SmartBar;
