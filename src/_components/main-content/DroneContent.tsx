"use client";

import Image from "next/image";
import React, { useState } from "react";
import Section from "~/_components/main-content/Section";
import { useAiContextStore } from "~/store/aiContextStore";

interface Blog {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage: { asset: { url: string } };
}

interface DroneContentProps {
  blogs: Blog[];
}

const DroneContent: React.FC<DroneContentProps> = ({ blogs }) => {
  const { setContext } = useAiContextStore();
  const [, setCurrentSection] = useState<string>("");

  const handleSectionVisible = (id: string, textContent: string) => {
    setCurrentSection(id);
    setContext(textContent);
  };

  return (
    <div className="container mx-auto px-8 pb-32">
      <header className="mx-auto max-w-32 pt-12">
        <Image src="/logo.svg" alt="logo" width={252} height={31} />
      </header>

      <Section id="section1" onVisible={handleSectionVisible}>
        {blogs.map((blog: Blog) => (
          <section
            key={blog._id}
            className="flex flex-col items-center gap-8 py-20"
          >
            <Image
              src={blog?.mainImage.asset.url}
              alt="drone"
              width={500}
              height={500}
            />
            <div className="h-24 flex-grow border-r border-white"></div>
            <div className="max-w-prose text-center">
              <h2>{blog?.title}</h2>
            </div>
          </section>
        ))}
      </Section>

      <Section id="section2" onVisible={handleSectionVisible}>
        <section className="py-20 md:flex md:items-center md:justify-center md:align-middle">
          <div className="md:flex md:items-center md:gap-10">
            <div className="md:max-w-[28.125rem]">
              <h2 className="mb-4 text-2xl text-white">Drone</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, doloremque.
              </p>
            </div>

            <div className="mb-8 md:w-1/2">
              <Image
                src="/fpo/jet-fpo-01.png"
                alt="drone"
                width={500}
                height={500}
              />
            </div>
          </div>
        </section>
      </Section>

      <Section id="section3" onVisible={handleSectionVisible}>
        <section className="py-20">
          <div className="mb-12 ml-auto mr-0 max-w-[30rem] md:mb-0">
            <h2 className="mb-4 text-lg">Hybrid Engine System</h2>
            <p className="max-w-prose text-sm">
              Equipped with a hybrid propulsion system, combining electric and
              conventional fuel for optimized energy consumption and reduced
              environmental footprint.
            </p>
          </div>
          <Image
            className="mx-auto w-full"
            src="/fpo/jet-side-01.png"
            alt="drone"
            width={1000}
            height={1000}
          />
          <div className="ml-0 mr-auto mt-12 max-w-[30rem]">
            <h2 className="mb-4 text-lg">Hybrid Engine System</h2>
            <p className="max-w-prose text-sm">
              Equipped with a hybrid propulsion system, combining electric and
              conventional fuel for optimized energy consumption and reduced
              environmental footprint.
            </p>
          </div>
        </section>
      </Section>
    </div>
  );
};

export default DroneContent;
