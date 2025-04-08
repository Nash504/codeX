import { title } from "@/components/primitives";
import { Card, CardBody } from "@nextui-org/card";
import { Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6">
      <div className="text-center mb-12">
        <h1 className={title({ color: "violet" })}>Contact Us</h1>
        <p className="text-lg text-default-600 mt-2">
          We'd love to hear from you. Reach out using the contact information
          below.
        </p>
      </div>

      <Card className="shadow-md w-full max-w-lg mx-auto">
        <CardBody className="p-6">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-violet-500/10 rounded-full">
                <Mail size={24} className="text-violet-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email Us</h3>
                <p className="text-default-500">contact@example.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3  bg-violet-500/10 rounded-full">
                <Phone size={24} className="text-primary text-violet-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Call Us</h3>
                <p className="text-default-500">(555) 123-4567</p>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
