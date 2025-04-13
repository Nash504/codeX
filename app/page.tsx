"use client";
import { title } from "@/components/primitives";
import { Typewriter } from "react-simple-typewriter";
import Project from "@/components/project";

export default function Home() {
  return (
    <div className="font-space-grotesk">
      <section className="flex flex-col items-center justify-center min-h-[80vh] py-16 md:py-24 bg-gradient-to-b from-background to-background/80">
        <div className="max-w-6xl mx-auto text-center px-6">
          <div className="space-y-8 mb-12">
            <div className="flex items-center justify-center">
              <h1
                className={`${title()} text-7xl md:text-8xl lg:text-9xl tracking-tight`}
              >
                Codex
              </h1>
              <h1
                className={`${title({ color: "violet" })} text-7xl md:text-8xl lg:text-9xl ml-4`}
              >
                :
              </h1>
            </div>
            <h2
              className={`${title({ color: "violet" })} text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight`}
            >
              Crafting Excellence
            </h2>
            <div className="h-24 mt-8">
              <h3 className="text-3xl md:text-4xl font-semibold">
                <Typewriter
                  words={[
                    "Digital Excellence with Web and Flutter Apps",
                    "<Your Imagination, Our Code>",
                  ]}
                  loop={3}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h3>
            </div>
          </div>
          <div className="mt-20">
            <h2 className="text-4xl font-bold mb-10">Check Out Our Projects</h2>
            <Project />
          </div>
        </div>
      </section>
    </div>
  );
}
