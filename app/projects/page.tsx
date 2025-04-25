import { title } from "@/components/primitives";
import Project from "@/components/project";

export default function AboutPage() {
  return (
    <div className="  -mt-4   flex flex-col items-center font-space-grotesk">
      <h1
        className={`${title()} text-4xl sm:text-5xl md:text-6xl font-thin bg-gradient-to-r bg-clip-text`}
      >
        Projects
      </h1>
      <div>
        <Project />{" "}
      </div>
    </div>
  );
}
