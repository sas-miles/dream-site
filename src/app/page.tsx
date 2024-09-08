import Scene from "~/components/Scene";
import { Button } from "~/components/ui/button";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-slate-950 align-middle text-white">
      <div className="fixed z-0 h-screen w-screen">
        <Scene />
      </div>
      <div className="z-10 flex flex-col gap-4">
        <h1 className="text-center text-4xl">Finally.</h1>
        <Button>Click me</Button>
      </div>
    </main>
  );
}
