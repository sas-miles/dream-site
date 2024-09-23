"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Landing() {
  return (
    <div className="z-50 py-32">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
        className={`fixed flex h-screen w-full flex-col items-center justify-between gap-4 py-12 align-middle`}
      >
        <Image src={"/logo.svg"} alt={"logo"} width={252} height={31} />
        <h1 className="text-center text-4xl">
          Unmatched Autonomy. Unyielding Precision.
        </h1>
        <Link href="/experience">
          <Button size={"lg"}>Enter_</Button>
        </Link>
      </motion.main>
    </div>
  );
}
