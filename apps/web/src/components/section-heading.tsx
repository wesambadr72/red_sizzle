interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

/**
 * Shared section intro: the logo's red leg-bar motif carried forward as the
 * section marker, followed by the label and the condensed display heading.
 */
export default function SectionHeading({
  label,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p
        className={`flex items-center gap-3 text-sm font-semibold tracking-[0.3em] text-brand uppercase ${
          centered ? "justify-center" : ""
        }`}
      >
        <span aria-hidden="true" className="h-[3px] w-10 bg-brand" />
        {label}
        {centered && <span aria-hidden="true" className="h-[3px] w-10 bg-brand" />}
      </p>
      <h2 className="font-display mt-4 text-4xl leading-[1.05] font-bold tracking-tight text-white uppercase sm:text-5xl">
        {title}
      </h2>
      {description && <p className="mt-5 text-base leading-relaxed text-steel">{description}</p>}
    </div>
  );
}
