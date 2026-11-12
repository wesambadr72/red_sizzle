"use client";

import { Minus, Plus } from "lucide-react";
import { useId, useState } from "react";

interface AccordionItem {
  question: string;
  answer: string;
}

export default function Accordion({ items }: { items: readonly AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="divide-y divide-white/10 border-y border-white/10">
      {items.map((item, index) => {
        const open = openIndex === index;
        const buttonId = `${baseId}-trigger-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
                className="group flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-brand"
              >
                <span
                  className={`text-base font-semibold sm:text-lg ${
                    open ? "text-brand" : "text-white group-hover:text-brand"
                  }`}
                >
                  {item.question}
                </span>
                <span
                  aria-hidden="true"
                  className={`flex h-8 w-8 shrink-0 items-center justify-center border transition-colors ${
                    open
                      ? "border-brand bg-brand text-white"
                      : "border-white/20 text-steel group-hover:border-brand group-hover:text-brand"
                  }`}
                >
                  {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pr-12 pb-6 text-sm leading-relaxed text-steel">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
