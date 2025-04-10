import { title } from "@/components/primitives";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Mail, Phone, Send } from "lucide-react";
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import {sendEmail} from "../../serverAction/sendMail";


const ContactFormSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(1),
});
export default function ContactPage() {
  type FormData = {
    name: string;
    email: string;
    message: string;
};

const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
} = useForm<FormData>();

interface EmailResponse {
    success: boolean;
}

async function onSubmit(formData: FormData): Promise<void> {
    const validated = ContactFormSchema.safeParse(formData);
    if (!validated.success) {
        console.log("Please fill in all the fields correctly.");
    } else {

        const value: EmailResponse = await sendEmail(
            formData.name,
            formData.message,
            formData.email
        );
        if (value.success) {
            
            console.log("Your message has been sent successfully.");
        } else {
        
          console.log("An error occurred while sending your message.");
        }
    }
    reset();
}







  return (
    <div className="w-full max-w-6xl mx-auto px-6 font-mono">
      <div className="text-center mb-12">
        <h1 className={title({ color: "violet" })}>Contact Us</h1>
        <p className="text-lg text-default-600 mt-4">
          We'd love to hear from you. Fill out the form below or use our contact
          information.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="shadow-md">
          <CardHeader className="pb-0 flex-col items-start">
            <h2 className="text-2xl font-bold">Send us a message</h2>
            <p className="text-default-500">We'll get back to you soon.</p>
          </CardHeader>
          <CardBody className="py-5">
            <form className="flex flex-col gap-4"
              onSubmit={handleSubmit(onSubmit)}>
              <Input
                type="text"
                label="Name"
                placeholder="Enter your name"
                variant="bordered"
              />
              <Input
                type="email"
                label="Email"
                placeholder="Enter your email"
                variant="bordered"
              />
              <Input
                type="tel"
                label="Phone"
                placeholder="Enter your phone number"
                variant="bordered"
              />
              <Textarea
                label="Message"
                placeholder="How can we help you?"
                variant="bordered"
                minRows={4}
              />
              <Button
                color="secondary"
                className="mt-2 bg-violet-500 text-white"
              >
                <Send size={18} className="mr-2" />
                Send Message
              </Button>
            </form>
          </CardBody>
        </Card>

        <Card className="shadow-md h-fit">
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
                <div className="p-3 bg-violet-500/10 rounded-full">
                  <Phone size={24} className="text-violet-500" />
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
    </div>
  );
}
