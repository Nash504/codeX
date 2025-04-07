import { title } from "@/components/primitives";
import Project from "@/components/project";

export default function AboutPage() {
  return (
    <div className=" flex flex-col items-center">
      <h1 className={title()}>Projects</h1>
      <div>
        <Project />{" "}
      </div>
    </div>
  );
}
