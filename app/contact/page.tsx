// page.tsx
"use client";

import { title } from "@/components/primitives";
import Form from "@/components/form"; // Fixed import - no curly braces and proper capitalization

export default function ContactPage() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-4 font-space-grotesk">
      <div className="text-center mb-4">
        <h1
          className={`${title()} text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r font-thin bg-clip-text `}
        >
          Contact Us
        </h1>
        <p className="text-default-500 max-w-2xl mx-auto mt-4 mb-16">
          We'd love to hear from you. Fill out the form below or use our contact
          information to get in touch.
        </p>
      </div>
      <Form />{" "}
      {/* Form component placed outside the text-center div for proper alignment */}
    </div>
  );
}
