"use client";

import { title } from "@/components/primitives";
import Form from "@/components/form";

export default function ContactPage() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 font-space-grotesk">
      <div className="text-center mb-8 sm:mb-12 -mt-24">
        <h1 className={`${title()} text-4xl sm:text-5xl md:text-6xl font-thin bg-gradient-to-r bg-clip-text`}>
          Contact Us
        </h1>
        <p className="text-default-500 max-w-2xl mx-auto mt-4 mb-8 sm:mb-12 px-4">
          We'd love to hear from you. Fill out the form below or use our contact
          information to get in touch.
        </p>
      </div>
      <Form />
    </div>
  );
}