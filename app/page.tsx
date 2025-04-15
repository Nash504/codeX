"use client";
import { title } from "@/components/primitives";
import { Typewriter } from "react-simple-typewriter";
import Project from "@/components/project";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const sloganVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const projectsTitleVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.2, ease: "easeOut" },
  },
};

const eyeCatchingProjectsTitle = {
  initial: { scale: 0.9, opacity: 0 },
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
    const projectsSection = document.getElementById("projects-section");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="font-space-grotesk p-0">
      <section className="flex flex-col items-center justify-center min-h-screen py-16 md:py-24 relative">
        <div className="max-w-6xl mx-auto text-center px-6">
          <div className="space-y-8 mb-12">
            <div className="flex items-center justify-center">
              <motion.h1
                variants={sloganVariants}
                initial="initial"
                animate={isMounted ? "animate" : "initial"}
                className={`${title()} text-7xl md:text-8xl lg:text-9xl tracking-tight`}
              >
                Codex:
              </motion.h1>
            </div>
            <motion.h2
              className={`${title({ color: "violet" })} text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight`}
              variants={sloganVariants}
              initial="initial"
              animate={isMounted ? "animate" : "initial"}
            >
              Crafting Excellence
            </motion.h2>
            <div className="h-24 mt-8">
              <h3 className="text-3xl md:text-4xl font-semibold text-gray-100">
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

          <motion.div
            className="absolute bottom-16 left-0 right-0 flex justify-center cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            onClick={scrollToProjects}
          >
            <ChevronDown size={36} className="text-violet-400/80" />
          </motion.div>
        </div>
      </section>

      <section id="projects-section" className="py-20">
        <motion.div
          className="max-w-6xl mx-auto px-6"
          variants={projectsTitleVariants}
          initial="initial"
          animate={isMounted ? "animate" : "initial"}
        >
          <motion.h2
            className="text-4xl font-bold flex items-center justify-center gap-2 mb-12"
            variants={eyeCatchingProjectsTitle}
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
