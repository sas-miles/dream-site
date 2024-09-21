"use client";

import React from "react";
import { useIsSmartBarOpen } from "../store/smartbarStore";
import ClosedSmartBar from "./ClosedSmartBar";
import OpenSmartBar from "./OpenSmartBar";

function SmartBar() {
  const isOpen = useIsSmartBarOpen();

  return isOpen ? <OpenSmartBar /> : <ClosedSmartBar />;
}

export default SmartBar;
