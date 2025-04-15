import React from "react";
import Socials from "@/components/Socials";
import Link from "next/link";
import { Divider } from "@nextui-org/divider";

export const footer = () => {
  const quickLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className=" mt-16 bg-gradient-to-b from-gray-950 to-black pt-10 pb-6 font-space-grotesk">
      <Divider className="opacity-40" />
      <div className="container mx-auto px-4 mt-4">
        {/* Top section with logo and quick links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 border-b border-gray-800/30 pb-8">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold text-white mb-4">CodeX</h2>
            <p className="text-gray-400 text-sm mb-4 text-center md:text-left">
              Building exceptional digital experiences through innovative
              solutions and cutting-edge technology.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <Link
                  href={link.href}
                  key={link.name}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
            <p className="text-gray-400 mb-2">hello@codex.com</p>
            <p className="text-gray-400 mb-4">+1 (555) 123-4567</p>
            <p className="text-gray-400 text-sm">
              123 Tech Plaza,
              <br />
              Innovation District,
              <br />
              San Francisco, CA 94103
            </p>
          </div>
        </div>

        {/* Middle section with "Let's Connect" */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-pirata mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-violet-200/80 to-violet-400/60">
            Let's Connect
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            We're always open to new opportunities and collaborations. Feel free
            to reach out and let's create something amazing together!
          </p>
          <div className="flex justify-center gap-8 mb-8">
            <Socials />
          </div>
          <button className="bg-gradient-to-r from-violet-600/90 to-indigo-500/90 hover:from-violet-600 hover:to-indigo-500 text-white font-medium py-2 px-6 rounded-md transition-all duration-300 shadow-md">
            Get in Touch
          </button>
        </div>

        {/* Bottom section with copyright */}
        <div className="text-center pt-6 border-t border-gray-800/30">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} CodeX. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 mt-3 text-xs text-gray-600">
            <Link
              href="/privacy"
              className="hover:text-gray-400 transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <span>|</span>
            <Link
              href="/terms"
              className="hover:text-gray-400 transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
