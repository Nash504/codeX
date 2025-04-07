import { Image } from "@nextui-org/image";

export default function Project() {
  return (
    <div
      suppressHydrationWarning
      className="max-w-6xl p-6 mx-auto space-y-4 mb-14"
    >
      <h1 className="flex items-start text-6xl font-semibold tracking-tighter gap-9">
        Project - Note Vault
      </h1>
      <div className="mx-auto ">
        <Image
          isZoomed
          alt="Note Vault Interface"
          src="https://www.deiondz.in/project/notevault.png"
        />
      </div>

      <div className="space-y-4">
        <p className="text-2xl font-semibold">
          Note Vault is a user-friendly web application designed to serve as a
          centralized hub for storing and accessing college notes. It aims to
          streamline the organization and accessibility of academic materials
          for students. Built using Next.js, Tailwind CSS, and the NextUI
          component library, this platform offers a seamless experience for
          storing lecture notes, past papers, and study resources.
        </p>

        <div className="pt-4 border-t border-gray-300">
          <h3 className="mb-2 text-xl font-semibold">Key Features:</h3>
          <ul className="list-disc list-inside">
            <li className="text-lg">
              Note Storage: Easily upload, organize, and categorize lecture
              notes by subject, topic, or date.
            </li>
            <li className="text-lg">
              Previous Year Question Papers: Access a repository of past year
              question papers sorted by courses and subjects.
            </li>
            <li className="text-lg">
              User-Friendly Interface: Utilizes NextUI components for a visually
              appealing and intuitive user interface.
            </li>
            <li className="text-lg">
              Search and Filter: Efficiently search for specific notes or papers
              using keywords or filters.
            </li>
            <li className="text-lg">
              Responsive Design: Ensures usability across various devices and
              screen sizes for convenience.
            </li>
          </ul>
        </div>

        <p className="mt-4 text-xl">
          <strong>Technologies Used:</strong> Next.js, Tailwind CSS, NextUI.
        </p>

        <p className="mt-4 text-xl">
          <strong>Project Status:</strong> The Note Vault is currently live and
          actively used by students to manage and access their academic
          resources efficiently.
        </p>
      </div>
    </div>
  );
}
