import { title } from "@/components/primitives";
import Project from "@/components/project";

export default function AboutPage() {
  return (
    <div className=" flex flex-col items-center font-space-grotesk">
      <h1
        className={`${title()} text-5xl md:text-6xl lg:text-7xl font-thin mb-4  text-white`}
      >
        Projects
      </h1>
      <div>
        <Project />{" "}
      </div>
    </div>
  );
}
