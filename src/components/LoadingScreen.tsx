import React, { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";
import Image from "next/image";

const LoadingScreen = () => {
  const { progress, active } = useProgress();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!active) {
      const timer = setTimeout(() => setIsVisible(false), 1000);
      return () => clearTimeout(timer);
    }
    setIsVisible(true);
  }, [active]);

  return isVisible ? (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white transition-opacity duration-1000 ${
        active ? "opacity-100" : "opacity-0"
      }`}
    >
      <Image src={"/logo.svg"} alt={"logo"} width={252} height={31} />
      <div className="relative mb-4 h-[200px] w-[400px]">
        <div className="bg-grid-pattern absolute inset-0 opacity-30"></div>
        <div
          className="absolute bottom-0 left-0 h-1 bg-white transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="text-sm font-light">
        Loading... {Math.round(progress)}%
      </div>
    </div>
  ) : null;
};

export default LoadingScreen;
