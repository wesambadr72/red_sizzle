import { FAQ_ITEMS } from "@/lib/content";
import Accordion from "@/components/accordion";
import SectionHeading from "@/components/section-heading";

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-16 border-t border-white/5 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal">
          <SectionHeading
            label="Support"
            title="Questions? We've Got You."
            description="The answers lifters ask about most before they press play on their first lesson."
          />
        </div>

        <div className="reveal mt-16 items-start gap-x-16 gap-y-0 md:grid md:grid-cols-2">
          <Accordion items={FAQ_ITEMS.slice(0, 3)} />
          <Accordion items={FAQ_ITEMS.slice(3)} />
        </div>
      </div>
    </section>
  );
}
