import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { ChevronLeft } from "lucide-react";
export default function Project() {
  return (
    <div
      suppressHydrationWarning
      className="max-w-6xl p-6 mx-auto mb-14 font-space-grotesk"
    >
      <Link href="/projects" className="absolute top-4 left-4 z-10 text-white">
        <ChevronLeft size={36} /> Back to Projects
      </Link>
      <h1 className="flex items-center text-6xl font-semibold tracking-tighter gap-9">
        Project - Spatial
      </h1>
      <div className="p-5 mx-auto">
        <Image alt="Spatial Screenshot" src="spatial.jpeg" />
      </div>
      <div className="space-y-4 ">
        <p className="text-2xl font-semibold">
          Spatial is a real-time crowd monitoring system designed to prevent
          overcrowding by analyzing Bluetooth signals from nearby devices. The
          project aims to enhance public safety and optimize crowd management.
        </p>

        <div className="pt-4 border-t border-gray-300">
          <h3 className="mb-2 text-xl font-semibold">How It Works:</h3>
          <ul className="list-disc list-inside">
            <li className="text-lg">
              Captures Bluetooth signals emitted by mobile devices and
              headphones.
            </li>
            <li className="text-lg">
              Uses a Raspberry Pi to collect and process real-time data.
            </li>
            <li className="text-lg">
              Data is sent to a Next.js frontend via Flask APIs and stored in
              Supabase.
            </li>
            <li className="text-lg">
              Provides live crowd estimates to prevent overcrowding incidents.
            </li>
          </ul>
        </div>

        <p className="mt-4 text-xl">
          <strong>Tech Stack:</strong> Next.js (Frontend), Supabase (Database),
          Flask (API), Raspberry Pi 3 with Bleak (Bluetooth Data Collection).
        </p>

        <p className="mt-4 text-xl">
          <strong>About the Project:</strong> This project was developed for an
          exposition at St. Aloysius (Deemed to be University) to address the
          issue of bus overcrowding in Mangalore. By estimating passenger counts
          in real-time, it aims to prevent accidents caused by overloaded buses.
        </p>

        <p className="mt-4 text-xl">
          <strong>Developed By:</strong> Jonathan Correa, Deion Dsouza & Daniel
          Lewis.
        </p>
      </div>
    </div>
  );
}
