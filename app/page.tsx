"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Code, Zap, Send } from "lucide-react";
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

  const scrollToSection = (id:string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  // Services data
  const services = [
    {
      icon: <Code size={24} />,
      title: "Web Development",
      description: "Custom web applications with modern technologies."
    },
    {
      icon: <Zap size={24} />,
      title: "Flutter Apps",
      description: "Cross-platform mobile applications with native feel."
    },
  ];

  return (
    <div className="font-space-grotesk text-white">
      {/* Simple Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">
            Code<span className="text-violet-400">X</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <button onClick={() => scrollToSection("hero-section")} className="hover:text-violet-400 transition-colors">Home</button>
            <button onClick={() => scrollToSection("services-section")} className="hover:text-violet-400 transition-colors">Services</button>
            <button onClick={() => scrollToSection("projects-section")} className="hover:text-violet-400 transition-colors">Projects</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero-section" className="flex flex-col items-center justify-center min-h-screen px-6 text-center pt-20">
        <div className="max-w-6xl w-full -mt-72">
          <motion.h1
            className={`${title()} text-8xl md:text-8xl lg:text-8xl tracking-tight `}
            variants={fadeUp}
            initial="initial"
            animate={isMounted ? "animate" : "initial"}
          >
            Code
            <span
              className={`${title({ color: "violet" })} text-6xl md:text-8xl lg:text-[8rem] tracking-tight`}
            >
              X
            </span>
          </motion.h1>
          <motion.div
            className="text-xl md:text-3xl text-gray-300 h-20 py-6 md:py-12"
            variants={fadeUp}
            initial="initial"
            animate={isMounted ? "animate" : "initial"}
          >
            {isMounted && (
              <Typewriter
                words={[
                  "<Digital Excellence with Web and Flutter Apps/>",
                  "<Your Imagination, Our Code/>",
                ]}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={40}
                delaySpeed={1000}
              />
            )}
          </motion.div>
          
          <motion.div 
            className="mt-12"
            variants={fadeUp}
            initial="initial"
            animate={isMounted ? "animate" : "initial"}
          >
          <button 
  onClick={() => scrollToSection("projects-section")} 
  className="border border-violet-600 text-violet-600 hover:bg-violet-600/50 hover:text-white font-bold py-3 px-8 rounded-full transition-colors"
>
  View Our Work
</button>

          </motion.div>
          
          <motion.div
            className="mt-24 flex flex-col items-center cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            onClick={() => scrollToSection("services-section")}
            aria-label="Scroll to services"
          >
            <p className="text-sm text-gray-400 mb-1">Scroll Down</p>
            <ChevronDown size={28} className="text-violet-400/80" />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services-section" className="py-20 bg-black w-full">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We provide digital solutions tailored to your needs.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="bg-black/50 border border-violet-500/10 rounded-xl p-6 hover:border-violet-500/30 transition-all"
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <div className="bg-violet-500/10 w-12 h-12 rounded-lg flex items-center justify-center text-violet-400 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects-section" className="py-20">
        <motion.div
          className="max-w-6xl mx-auto px-6"
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            variants={zoomIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Our Recent Work
          </motion.h2>
          <Project />
        </motion.div>
      </section>

     
     
    </div>
  );
}