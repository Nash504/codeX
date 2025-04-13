"use client";
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { GithubIcon } from "@/components/icons";
import { Typewriter } from "react-simple-typewriter";
import Project from "@/components/project";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-2 py-8 md:py-10">
      <div className="font-mono absolute justify-center inline-block max-w-lg text-center top-36 ">
        <h1 className={`${title()} font-inter`}>Codex:&nbsp;</h1>
        <h1 className={`${title({ color: "violet" })} font-inter`}>
          Crafting&nbsp;
        </h1>
        <br />
        <h1 className={`${title()} font-inter`}>
          {
            <span className="font-mono">
              <Typewriter
                words={[
                  "Digital Excellence with Web and Flutter Apps",
                  "Your Imagination, Our Code",
                ]}
                loop={3}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          }
        </h1>
      </div>
      <div className="absolute flex-col justify-center p-6 top-80 item-center">
        <h1 className={" font-bold text-center text-3xl"}>
          Check Out Our Projects
        </h1>
        <Project />
      </div>
    </section>
  );
}
