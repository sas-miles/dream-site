"use client";

import React from "react";
import { useSmartBarStore } from "~/store/smartbarStore";
import { motion } from "framer-motion";
import ClosedSmartBar from "./ClosedSmartBar";
import OpenSmartBar from "./OpenSmartBar";
import { usePathname } from "next/navigation";

function SmartBar() {
  const pathname = usePathname();

  const isOpen = useSmartBarStore((state) => state.isOpen);
  if (pathname === "/experience") return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {isOpen ? <OpenSmartBar /> : <ClosedSmartBar />}
    </motion.div>
  );
}

export default SmartBar;
