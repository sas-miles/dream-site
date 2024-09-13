"use client";
import Image from "next/image";
import LoadingScreen from "~/components/LoadingScreen";
import Scene from "~/components/Scene";
import { Button } from "~/components/ui/button";

export default function Home() {
  return (
    <main className="relative flex min-h-screen justify-between align-middle text-white">
      <LoadingScreen />
      <div className="fixed z-0 h-screen w-screen">
        <Scene />
      </div>
      <div className="z-10 flex w-full flex-col items-center justify-between gap-4 py-12 align-middle">
        <Image src={"/logo.svg"} alt={"logo"} width={252} height={31} />
        <h1 className="text-center text-4xl">
          Unmatched Autonomy. Unyielding Precision.
        </h1>
        <Button size={"lg"}>Enter_</Button>
      </div>
    </main>
  );
}
