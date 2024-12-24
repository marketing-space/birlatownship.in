"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { getSiteConfig } from "@/lib/config";
import { useModal } from "@/lib/stores/use-modal-store";
import { cn } from "@/lib/utils";
import { submitForm } from "@/lib/utils/form-submission";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Loader2, Phone } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { PhoneInput } from "./ui/phone-input";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z
    .string()
    .email({
      message: "Please enter a valid email address.",
    })
    .optional()
    .or(z.literal("")),
  phone: z
    .string({
      message: "Please enter a valid phone number.",
    })
    .min(10, {
      message: "Please enter a valid phone number.",
    }),
});

type EnquireSectionProps = {
  showFreeVisitButton?: boolean;
  showCallUsButton?: boolean;
  isModal?: boolean;
  onSubmit?: () => void;
  className?: string;
};

export default function EnquireSection({
  showFreeVisitButton = true,
  showCallUsButton = true,
  className,
  isModal = false,
  onSubmit,
}: EnquireSectionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", phone: "" },
    mode: "onChange",
  });

  const { onOpen } = useModal();
  const { enquire, formSubmission } = getSiteConfig();

  async function handleSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true);
      console.log(
        process.env.NEXT_PUBLIC_LEAD_COLLECTION_MODE,
        "LEAD_COLLECTION_MODE"
      );
      await submitForm({
        name: values.name,
        email: values.email || "",
        phone: values.phone,
      });

      onSubmit?.();
    } catch (error) {
      console.error("Form submission error:", error);
      // Show error toast
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <aside
      className={cn(
        "bg-white shadow-lg h-full overflow-y-auto px-4 py-2 flex flex-col justify-between",
        isModal && "rounded-lg px-6 py-4 h-full",
        className
      )}
    >
      <div className="flex flex-col h-full">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          {enquire.title}
        </h2>

        {/* Quick Call Action */}
        {showCallUsButton && (
          <Button
            className="flex w-full items-center justify-start gap-2 h-auto py-3 mb-4"
            onClick={() => window.open(`tel:${enquire.callUs.phone}`)}
          >
            <div className="flex items-center gap-2 rounded-full bg-white text-primary p-2">
              <Phone className="h-4 w-4" />
            </div>
            <div className="flex flex-col items-start text-left">
              <span className="text-xs">{enquire.callUs.title}</span>
              <span className="text-sm font-medium">
                {enquire.callUs.phone}
              </span>
            </div>
          </Button>
        )}

        {/* Vtiger Form */}
        <Form {...form}>
          <form
            id={formSubmission.crm.formId}
            name={formSubmission.crm.name}
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-4"
            acceptCharset="utf-8"
            encType="multipart/form-data"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Enter your name"
                      {...field}
                      required
                      className={cn(
                        "bg-white border-gray-200",
                        form.formState.errors.name && "border-red-500 !ring-0"
                      )}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="flex flex-col items-start">
                  <FormControl className="w-full">
                    <PhoneInput
                      defaultCountry="IN"
                      placeholder="Enter phone number"
                      {...field}
                      required
                      className={cn(
                        "bg-white border-gray-200",
                        form.formState.errors.phone && "border-red-500 !ring-0"
                      )}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Enter your email (optional)"
                      {...field}
                      type="email"
                      className="bg-white border-gray-200"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </form>
        </Form>

        {/* Site Visit Button */}
        {showFreeVisitButton && (
          <div className="flex flex-col items-center justify-center mt-4">
            <Image
              src={enquire.bookFreeVisit.image.src}
              alt={enquire.bookFreeVisit.image.alt}
              width={200}
              height={200}
              className="rounded-lg"
            />
            <Button
              className="w-full mt-4 bg-primary relative overflow-hidden group"
              onClick={() =>
                onOpen("enquiry", {
                  title: enquire.bookFreeVisit.cta.title,
                  description: enquire.bookFreeVisit.cta.description,
                })
              }
              disabled={isSubmitting}
            >
              <motion.div
                className="absolute -inset-full w-[200%] h-[200%] bg-gradient-to-tr from-transparent via-white/30 to-transparent -rotate-45"
                animate={{
                  transform: [
                    "translateX(-100%) rotate(-45deg)",
                    "translateX(50%) rotate(-45deg)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex items-center justify-center w-full"
              >
                {enquire.bookFreeVisit.cta.title}
              </motion.div>
            </Button>
          </div>
        )}
      </div>
    </aside>
  );
}
