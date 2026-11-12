"use client";

import { CONTACT } from "@/lib/content";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  email: z.email("Please enter a valid email address."),
  subject: z.string().trim().min(3, "Please add a subject."),
  message: z.string().trim().min(10, "Your message should be at least 10 characters."),
});

type ContactFields = z.infer<typeof contactSchema>;
type FieldErrors = Partial<Record<keyof ContactFields, string>>;

const INITIAL: ContactFields = { name: "", email: "", subject: "", message: "" };

const FIELDS: {
  name: keyof ContactFields;
  label: string;
  type: string;
  autoComplete?: string;
  placeholder: string;
}[] = [
  { name: "name", label: "Full Name", type: "text", autoComplete: "name", placeholder: "Jordan Mills" },
  { name: "email", label: "Email", type: "email", autoComplete: "email", placeholder: "you@example.com" },
  { name: "subject", label: "Subject", type: "text", placeholder: "Program question" },
];

export default function ContactForm() {
  const [values, setValues] = useState<ContactFields>(INITIAL);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const update = (field: keyof ContactFields, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = contactSchema.safeParse(values);

    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof ContactFields | undefined;
        if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setStatus("submitting");
    // Demo form: no backend is wired up. Simulate processing, then report honestly.
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex h-full min-h-80 flex-col items-center justify-center border border-white/10 bg-navy-deep p-10 text-center"
      >
        <CheckCircle2 className="h-12 w-12 text-brand" aria-hidden="true" />
        <p className="font-display mt-6 text-2xl font-bold tracking-wide text-white uppercase">
          Message validated
        </p>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-steel">
          Thanks, {values.name.split(" ")[0]} — your details all check out. This site is a
          live demo, so nothing was actually sent. Reach us directly at{" "}
          <a
            href={`mailto:${"hello@redsizzle.com"}`}
            className="font-medium text-brand underline-offset-4 hover:underline"
          >
            {CONTACT.email}
          </a>{" "}
          and we&apos;ll get back to you within one business day.
        </p>
        <button
          type="button"
          onClick={() => {
            setValues(INITIAL);
            setStatus("idle");
          }}
          className="mt-8 border border-white/25 px-6 py-3 text-xs font-semibold tracking-widest text-white uppercase transition-colors hover:border-brand hover:text-brand"
        >
          Send Another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="border border-white/10 bg-navy-deep p-8 sm:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {FIELDS.map((field, index) => {
          const error = errors[field.name];
          const isWide = field.name === "subject";
          return (
            <div key={field.name} className={isWide ? "sm:col-span-2" : undefined}>
              <label
                htmlFor={`contact-${field.name}`}
                className="mb-2 block text-xs font-semibold tracking-[0.2em] text-steel uppercase"
              >
                {field.label}
              </label>
              <input
                id={`contact-${field.name}`}
                name={field.name}
                type={field.type}
                autoComplete={field.autoComplete}
                placeholder={field.placeholder}
                value={values[field.name]}
                onChange={(e) => update(field.name, e.target.value)}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? `contact-${field.name}-error` : undefined}
                className={`w-full border bg-navy px-4 py-3 text-sm text-white placeholder:text-steel/50 focus:outline-none focus:ring-2 focus:ring-brand/60 ${
                  error ? "border-brand" : "border-white/15 focus:border-brand"
                }`}
              />
              {error && (
                <p
                  id={`contact-${field.name}-error`}
                  className="mt-2 text-xs font-medium text-brand"
                  role="alert"
                >
                  {error}
                </p>
              )}
            </div>
          );
        })}

        <div className="sm:col-span-2">
          <label
            htmlFor="contact-message"
            className="mb-2 block text-xs font-semibold tracking-[0.2em] text-steel uppercase"
          >
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            placeholder="Tell us about your training and what you're working toward…"
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
            className={`w-full resize-y border bg-navy px-4 py-3 text-sm text-white placeholder:text-steel/50 focus:outline-none focus:ring-2 focus:ring-brand/60 ${
              errors.message ? "border-brand" : "border-white/15 focus:border-brand"
            }`}
          />
          {errors.message && (
            <p
              id="contact-message-error"
              className="mt-2 text-xs font-medium text-brand"
              role="alert"
            >
              {errors.message}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-8 inline-flex w-full items-center justify-center gap-2 bg-brand px-7 py-4 text-sm font-semibold tracking-widest text-white uppercase transition-colors hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden="true" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
