"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";

import { title } from "@/components/primitives";
import Project from "@/components/project";

// Dynamically import typewriter
const Typewriter = dynamic(
  () => import("react-simple-typewriter").then((mod) => mod.Typewriter),
  { ssr: false }
);

// Animation variants
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const zoomIn = {
  initial: { scale: 0.95, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "backOut" },
  },
};

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const scrollToProjects = () => {
    const section = document.getElementById("projects-section");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-space-grotesk text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center  px-6 text-center ">
        <div className="max-w-6xl w-full ">
          <motion.h1
            className={`${title()} text-7xl md:text-8xl lg:text-9xl tracking-tight`}
            variants={fadeUp}
            initial="initial"
            animate={isMounted ? "animate" : "initial"}
          >
            Code
            <span
              className={`${title({ color: "violet" })} ml-2 text-7xl md:text-8xl lg:text-9xl tracking-tight`}
            >
              X
            </span>
          </motion.h1>
          <br />
          <motion.h2
            className={`${title()} text-4xl md:text-5xl lg:text-6xl font-light tracking-tight`}
            variants={fadeUp}
            initial="initial"
            animate={isMounted ? "animate" : "initial"}
          >
            Crafting Excellence
          </motion.h2>
          <motion.div
            className="text-xl md:text-2xl text-gray-300 h-20 py-12"
            variants={fadeUp}
            initial="initial"
            animate={isMounted ? "animate" : "initial"}
          >
            <Typewriter
              words={[
                "Digital Excellence with Web and Flutter Apps",
                "<Your Imagination, Our Code>",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={40}
              delaySpeed={1000}
            />
          </motion.div>
          <motion.div
            className="mt-10 flex flex-col items-center cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            onClick={scrollToProjects}
            aria-label="Scroll to projects"
          >
            <p className="text-sm text-gray-400 mb-1 animate-pulse">
              See Projects
            </p>
            <ChevronDown size={36} className="text-violet-400/80" />
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects-section" className="py-20">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={fadeUp}
          initial="initial"
          animate={isMounted ? "animate" : "initial"}
        >
          <motion.h2
            className="text-4xl font-bold text-center mb-12"
            variants={zoomIn}
            initial="initial"
            animate={isMounted ? "animate" : "initial"}
          >
            Explore Our Recent Work
          </motion.h2>
          <Project />
        </motion.div>
      </section>
    </div>
  );
}
