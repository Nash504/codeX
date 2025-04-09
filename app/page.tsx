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
import { Image } from "@nextui-org/image";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-2 py-8 md:py-10">
      <div className="absolute justify-center inline-block max-w-lg text-center top-36 ">
        <h1 className={title()}>Codex:&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>Crafting&nbsp;</h1>
        <br />
        <h1 className={title()}>
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
        <div className="grid grid-cols-1 gap-10 py-8 md:grid-cols-2 lg:grid-cols-3">
          {siteConfig.project.map((item, key) => (
            <Card
              key={key}
              className="max-w-[400px] border-2 border-white shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
            >
              <CardHeader className="flex gap-3">
                <div className="flex flex-col">
                  <p className="text-2xl font-mono">{item.title}</p>
                  <p className="text-md font-mono  text-default-500">
                    {item.url}
                  </p>
                </div>
              </CardHeader>
              <Divider className="bg-white" />
              <CardBody>
                <p>{item.description}</p>
              </CardBody>
              <Divider />
              <CardFooter>
                <Link isExternal showAnchorIcon href={item.more}>
                  Visit Documentation
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
