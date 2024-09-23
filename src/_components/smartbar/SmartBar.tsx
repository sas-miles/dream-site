"use client";

import React from "react";
import { useSmartBarStore } from "~/store/smartbarStore";
import { motion } from "framer-motion";
import ClosedSmartBar from "./ClosedSmartBar";
import OpenSmartBar from "./OpenSmartBar";

function SmartBar() {
  const isOpen = useSmartBarStore((state) => state.isOpen);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {isOpen ? <OpenSmartBar /> : <ClosedSmartBar />}
    </motion.div>
  );
}

export default SmartBar;
