"use client";

import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Mail, Phone, Send, MapPin } from "lucide-react";
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Tooltip } from "@nextui-org/tooltip";
import { sendEmail } from "../serverAction/sendMail";

const ContactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must not exceed 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Form() {
  const [formStatus, setFormStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  type FormData = {
    name: string;
    email: string;
    phone?: string;
    message: string;
  };

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<FormData>();

  async function onSubmit(formData: FormData): Promise<void> {
    try {
      const validated = ContactFormSchema.safeParse(formData);
      if (!validated.success) {
        setFormStatus({
          success: false,
          message: "Please fill in all the required fields correctly.",
        });
        return;
      }

      const response = await sendEmail(
        formData.name,
        formData.message,
        formData.email
      );

      if (response.success) {
        setFormStatus({
          success: true,
          message:
            "Your message has been sent successfully. We'll be in touch soon!",
        });
        reset();
      } else {
        setFormStatus({
          success: false,
          message:
            "An error occurred while sending your message. Please try again.",
        });
      }
    } catch (error) {
      setFormStatus({
        success: false,
        message: "Something went wrong. Please try again later.",
      });
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
      {/* Contact Form Card */}
      <div className="w-full order-2 md:order-1">
        <Card className="bg-black/50 shadow-md border-2 border-violet-500/10 w-full h-full">
          <CardHeader className="pb-0 flex-col items-start pt-6 px-4 sm:px-6">
            <h2 className="text-xl sm:text-2xl font-bold">Send us a message</h2>
            <p className="text-default-500 text-sm sm:text-base">We'll get back to you soon.</p>
          </CardHeader>
          <CardBody className="py-5 px-4 sm:px-6">
            <form
              className="flex flex-col gap-4 sm:gap-5 w-full"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="w-full">
                <Input
                  type="text"
                  label="Name"
                  placeholder="Enter your name"
                  variant="bordered"
                  radius="sm"
                  isInvalid={!!errors.name}
                  errorMessage={errors.name?.message}
                  {...register("name", { required: "Name is required" })}
                  classNames={{
                    inputWrapper: "w-full",
                    input: "w-full",
                  }}
                  fullWidth
                />
              </div>

              <div className="w-full">
                <Input
                  type="email"
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                  radius="sm"
                  isInvalid={!!errors.email}
                  errorMessage={errors.email?.message}
                  {...register("email", { required: "Email is required" })}
                  classNames={{
                    inputWrapper: "w-full",
                    input: "w-full",
                  }}
                  fullWidth
                />
              </div>

              <div className="w-full">
                <Input
                  type="tel"
                  label="Phone (optional)"
                  placeholder="Enter your phone number"
                  variant="bordered"
                  radius="sm"
                  {...register("phone")}
                  classNames={{
                    inputWrapper: "w-full",
                    input: "w-full",
                  }}
                  fullWidth
                />
              </div>

              <div className="w-full">
                <Textarea
                  label="Message"
                  placeholder="How can we help you?"
                  variant="bordered"
                  radius="sm"
                  minRows={3}
                  maxRows={6}
                  isInvalid={!!errors.message}
                  errorMessage={errors.message?.message}
                  {...register("message", {
                    required: "Message is required",
                  })}
                  classNames={{
                    inputWrapper: "w-full",
                    input: "w-full",
                  }}
                  fullWidth
                />
              </div>

              {formStatus.message && (
                <div
                  className={`p-3 rounded-md w-full text-sm ${
                    formStatus.success
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {formStatus.message}
                </div>
              )}

              <Button
                disabled={isSubmitting}
                color="secondary"
                className="mt-2 bg-violet-600 text-white font-medium py-5 sm:py-6 w-full"
                type="submit"
                size="lg"
                radius="sm"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center w-full">
                    <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <>
                    <Send size={16} className="mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>

      {/* Contact Information Card */}
      <div className="w-full order-1 md:order-2">
        <Card className="bg-black/50 shadow-md border-2 border-violet-500/10 w-full">
          <CardHeader className="pb-0 pt-6 px-4 sm:px-6">
            <h2 className="text-xl sm:text-2xl font-bold">Contact Information</h2>
          </CardHeader>
          <CardBody className="p-4 sm:p-6">
            <div className="flex flex-col gap-6 sm:gap-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-violet-500/10 rounded-full flex-shrink-0">
                  <Mail size={20} className="text-violet-600" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold">Email Us</h3>
                  <Tooltip content="Click to copy" placement="bottom">
                    <p
                      className="text-violet-600 text-sm sm:text-base cursor-pointer hover:underline"
                      onClick={() => {
                        navigator.clipboard.writeText("codexcon.inc@gmail.com");
                        setFormStatus({
                          success: true,
                          message: "Email copied to clipboard!",
                        });
                        setTimeout(() => setFormStatus({}), 2000);
                      }}
                    >
                    codexcon.inc@gmail.com
                    </p>
                  </Tooltip>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-violet-500/10 rounded-full flex-shrink-0">
                  <Phone size={20} className="text-violet-600" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold">Call Us</h3>
                  <Tooltip content="Click to copy" placement="bottom">
                    <p
                      className="text-violet-600 text-sm sm:text-base cursor-pointer hover:underline"
                      onClick={() => {
                        navigator.clipboard.writeText("+91 99018 81652");
                        setFormStatus({
                          success: true,
                          message: "Phone number copied to clipboard!",
                        });
                        setTimeout(() => setFormStatus({}), 2000);
                      }}
                    >
                     +91 99018 81652
                    </p>
                  </Tooltip>
                </div>
              </div>

            
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}