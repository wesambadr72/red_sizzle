import { Clock, Mail, MapPin } from "lucide-react";

import { CONTACT } from "@/lib/content";
import ContactForm from "@/components/contact-form";
import SectionHeading from "@/components/section-heading";

const DETAILS = [
  { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: MapPin, label: "Location", value: CONTACT.location },
  { icon: Clock, label: "Hours", value: CONTACT.hours },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-16 border-t border-white/5 bg-navy-deep py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal">
          <SectionHeading
            label="Get In Touch"
            title="Let's Build Something Stronger."
            description="Questions about programs, coaching, or partnerships — tell us where you are in your training and we'll point you to the right starting point."
          />
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div className="reveal" data-delay="100">
            <dl className="space-y-8">
              {DETAILS.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-brand/40 bg-brand/10">
                    <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="text-xs font-semibold tracking-[0.25em] text-steel uppercase">
                      {label}
                    </dt>
                    <dd className="mt-1 text-base font-medium text-white">
                      {href ? (
                        <a
                          href={href}
                          className="underline-offset-4 transition-colors hover:text-brand hover:underline"
                        >
                          {value}
                        </a>
                      ) : (
                        value
                      )}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>

            <div className="relative mt-12 border border-brand/50 bg-brand/10 p-8">
              <span aria-hidden="true" className="absolute top-0 left-0 h-[3px] w-16 bg-brand" />
              <p className="font-display text-xl leading-snug font-bold tracking-wide text-white uppercase sm:text-2xl">
                {CONTACT.callout}
              </p>
            </div>
          </div>

          <div className="reveal" data-delay="200">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
