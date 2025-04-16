import { Image } from "@nextui-org/image";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
export default function Project() {
  return (
    <div suppressHydrationWarning className="mb-14 font-space-grotesk">
      <Link href="/projects" className="absolute top-4 left-4 z-10 text-white">
        <ChevronLeft size={36} />
        Back to Projects
      </Link>
      <div>
        <h1 className="flex items-center py-3 text-6xl font-semibold tracking-tighter gap-9">
          Project - BinSense Waste Analytics
        </h1>
        <div className="mx-auto ">
          <Image
            isZoomed
            alt="BinSense Dashboard"
            src="https://www.upwork.com/att/download/portfolio/persons/uid/964929488448684032/profile/projects/files/84851d89-9003-43f7-b631-f460891e90ad"
          />
        </div>
      </div>
      <div className="max-w-6xl p-6 mx-auto space-y-4">
        <p className="text-2xl font-semibold">
          BinSense is an AI-powered waste management system designed to analyze
          waste metrics and categorize waste types, including e-waste, toxic
          waste, wet waste, and dry waste. It integrates with IoT-enabled waste
          bins to automate data collection and segregation, aiming to reduce
          landfill waste and enhance sustainability practices.
        </p>

        <div className="pt-4 border-t border-gray-300">
          <h3 className="mb-2 text-xl font-semibold">Key Features:</h3>
          <ul className="list-disc list-inside">
            <li className="text-lg">
              AI-Powered Waste Classification: Utilizes large language models to
              analyze and categorize waste into different types.
            </li>
            <li className="text-lg">
              IoT Integration: Connects with smart waste bins to automate data
              collection and segregation.
            </li>
            <li className="text-lg">
              Real-Time Waste Tracking: Monitors waste generation and
              categorization through a user-friendly dashboard.
            </li>
            <li className="text-lg">
              Automated Reports: Generates detailed reports on waste management
              trends and efficiency.
            </li>
          </ul>
        </div>

        <p className="mt-4 text-xl">
          <strong>Technologies Used:</strong> Next.js, ShadCN, Supabase, Gemini
          AI.
        </p>

        <p className="mt-4 text-xl">
          <strong>Project Status:</strong> BinSense is currently under
          development, focusing on integrating AI analytics with IoT waste bins
          to provide real-time waste tracking and automated segregation.
        </p>
      </div>
    </div>
  );
}
