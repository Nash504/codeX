import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";

export default function Project() {
  return (
    <div suppressHydrationWarning className=" mb-14">
      <div>
        <h1 className=" flex items-center gap-9 text-6xl font-semibold tracking-tighter">
          <Image
            width={100}
            isZoomed
            alt="NextUI Fruit Image with Zoom"
            src="/logo.png"
          />
          Project - Codex
        </h1>
        <div className="mx-auto p-5">
          <Image isZoomed alt="NextUI Fruit Image with Zoom" src="/code.png" />
        </div>
      </div>
      <div className="max-w-6xl mx-auto p-6 space-y-4">
        <p className="text-2xl font-semibold">
          At Codex, we are passionate about transforming ideas into reality
          through the power of code. With expertise in web and Flutter app
          development, we bring innovation and precision to every project.
          Whether you're dreaming of a dynamic web application or a cutting-edge
          Flutter mobile app, we're here to turn your vision into a digital
          masterpiece.
        </p>

        <p className=" border-t py-2  mt-4 text-xl">
          <strong>Tech Stack and Tools Used:</strong> NextJS, React,
          TailwindCSS, GitHub, TypeScript .
        </p>
      </div>
    </div>
  );
}
