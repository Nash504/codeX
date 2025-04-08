import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";

export default function Project() {
  return (
    <div suppressHydrationWarning className="max-w-6xl p-6 mx-auto mb-14">
      <h1 className="flex items-center text-6xl font-semibold tracking-tighter gap-9">
        Project - ByteSize
      </h1>
      <div className="p-5 mx-auto">
        <Image
          isZoomed
          alt="ByteSize jpg"
          src="https://i.imgur.com/TrWLy2D.png"
        />
      </div>
      <div className="space-y-4 ">
        <p className="text-2xl font-semibold">
          ByteSize uses AI to turn your notes into flashcards in seconds. Simply
          upload a file or paste text, and it’ll automatically generate
          study-ready cards to help you learn faster and more effectively.
        </p>

        <div className="pt-4 border-t border-gray-300">
          <h3 className="mb-2 text-xl font-semibold">How It Works:</h3>
          <ul className="list-disc list-inside">
            <li className="text-lg">
              Input Your Content: Upload a document or paste any study material
              into ByteSize.
            </li>
            <li className="text-lg">
              AI Processing with Gemini: The app uses Google’s Gemini API to
              analyze the text and identify key information.
            </li>
            <li className="text-lg">
              Instant Flashcards: Based on the AI's analysis, ByteSize generates
              clear, concise flashcards to help you revise quickly and
              effectively.
            </li>
          </ul>
        </div>

        <p className="mt-4 text-xl">
          <strong>Tech Stack:</strong> Next.js,Tailwind CSS,ShadCN
        </p>

        <p className="mt-4 text-xl">
          <strong>About the Project:</strong> We created ByteSize to make
          revision faster and easier during our internal exams. It’s an
          AI-powered flashcard generator that quickly turns any text or notes
          into bite-sized flashcards, helping students study smarter and more
          efficiently.
        </p>

        <p className="mt-4 text-xl">
          <strong>Developed By:</strong> Srijan K,Nash Fernandes.
        </p>
      </div>
    </div>
  );
}
