import { FaLeaf } from "react-icons/fa";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl text-left"
      }
    >
      {eyebrow && (
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-brand-700 dark:bg-brand-950/60 dark:text-brand-350 border border-brand-100/50 dark:border-brand-900/50 shadow-sm">
            <FaLeaf className="text-brand-500" size={11} />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={1}>
        <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-brand-950 dark:text-brand-50 sm:text-4xl md:text-[2.6rem] tracking-tight">
          {title}
        </h2>
      </Reveal>
      <Reveal delay={2}>
        <div
          className={`mt-5 flex items-center gap-2.5 ${
            align === "center" ? "justify-center" : "justify-start"
          }`}
          aria-hidden
        >
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-brand-400/70" />
          <FaLeaf className="text-gold-400/90" size={11} />
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-brand-400/70" />
        </div>
      </Reveal>
      {description && (
        <Reveal delay={2}>
          <p className="mt-4 text-base sm:text-lg text-brand-800/70 dark:text-brand-200/60 leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
