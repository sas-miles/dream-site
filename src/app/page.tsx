import Landing from "~/_components/intro-scene/Landing";
export default function Home() {
  return (
    <div className="relative min-h-screen bg-black">
      <div className="fixed inset-0 z-50 h-screen w-full">
        <Landing />
      </div>
    </div>
  );
}
