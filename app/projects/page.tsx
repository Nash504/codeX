import { title } from "@/components/primitives";
import Project from "@/components/project";

export default function AboutPage() {
  return (
    <div className=" flex flex-col items-center font-mono">
      <h1
        className={title({ color: "violet" })}
        style={{ paddingBottom: "2rem" }}
      >
        Projects
      </h1>
      <div>
        <Project />{" "}
      </div>
    </div>
  );
}
