import React from "react";
import SmartBar from "~/_components/smartbar/SmartBar";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <SmartBar />
    </div>
  );
}

export default layout;
