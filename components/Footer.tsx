import React from "react";
import Socials from "@/components/Socials";
export const footer = () => {
  return (
    <section className="bg-black py-4">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-4xl font-pirata mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Let's Connect
        </h3>
        <p className="text-gray-400 mb-8">
          I'm always open to new opportunities and collaborations. Feel free to
          reach out!
        </p>
        <div className="flex justify-center gap-8 mb-8">
          <Socials />
        </div>
        <p className="text-gray-500">
          &copy; {new Date().getFullYear()} Nash Fernandes. All rights reserved.
        </p>
      </div>
    </section>
  );
};
