"use client";

import React from "react";
import { useSmartBarStore } from "../store/smartbarStore";
import ClosedSmartBar from "./ClosedSmartBar";
import OpenSmartBar from "./OpenSmartBar";

function SmartBar() {
  const isOpen = useSmartBarStore((state) => state.isOpen);

  return isOpen ? <OpenSmartBar /> : <ClosedSmartBar />;
}

export default SmartBar;
