import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { ChevronLeft } from "lucide-react";
export default function Project() {
  return (
    <div
      suppressHydrationWarning
      className="max-w-6xl space-y-4 mb-14 font-space-grotesk"
    >
      <Link href="/projects" className="absolute top-4 left-4 z-10 text-white">
        <ChevronLeft size={36} /> Back to Projects
      </Link>
      <h1 className="flex items-start py-3 text-6xl font-semibold tracking-tighter gap-9">
        Project - Oasis Ticketing System
      </h1>
      <div className="mx-auto ">
        <Image alt="BinSense Dashboard" src="oasis.jpeg" />
      </div>

      <div className="mx-auto space-y-4 ">
        <p className="text-2xl font-semibold">
          Oasis is a custom-built ticketing system designed to streamline TEDx
          event management by automating ticket sales, attendee data collection,
          and providing real-time insights. Developed using Next.js and
          Supabase, it replaces inefficient past methods and ensures a seamless
          experience for both organizers and attendees.
        </p>

        <div className="pt-4 border-t border-gray-300">
          <h3 className="mb-2 text-xl font-semibold">Key Features:</h3>
          <ul className="list-disc list-inside">
            <li className="text-lg">
              Automated Ticket Sales: Supports seamless online ticket
              purchasing.
            </li>
            <li className="text-lg">
              Real-Time Attendee Management: Tracks and manages event attendees
              efficiently.
            </li>
            <li className="text-lg">
              Payment Integration: Secure transactions via Razorpay API.
            </li>
            <li className="text-lg">
              Role-Based Access Control: Secure authentication powered by Clerk.
            </li>
          </ul>
        </div>

        <p className="mt-4 text-xl">
          <strong>Technologies Used:</strong> Next.js, Supabase, Clerk, Razorpay
          API.
        </p>

        <p className="mt-4 text-xl">
          <strong>Project Status:</strong> The Oasis Ticketing System is
          currently live and actively used for TEDx events, enhancing the
          ticketing and event management experience.
        </p>
      </div>
    </div>
  );
}
