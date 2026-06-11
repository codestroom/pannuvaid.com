import { FaLeaf } from "react-icons/fa";
import { trustBadges } from "@/lib/site";

export function TrustMarquee() {
  const items = [...trustBadges, "Samrala, Punjab", "Time-Tested Formulations"];

  const strip = (ariaHidden: boolean) => (
    <div aria-hidden={ariaHidden} className="flex shrink-0 items-center">
      {items.map((badge) => (
        <span
          key={badge}
          className="mx-6 inline-flex items-center gap-3 whitespace-nowrap font-display text-sm sm:text-base font-bold uppercase tracking-[0.18em] text-brand-800/70 dark:text-brand-200/50"
        >
          <FaLeaf className="text-brand-500/60 dark:text-brand-500/40" size={13} />
          {badge}
        </span>
      ))}
    </div>
  );

  return (
    <div
      className="relative mt-16 select-none overflow-hidden border-y border-brand-100/40 bg-brand-50/40 py-5 dark:border-brand-900/30 dark:bg-[#081008]/60 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
    >
      <div className="flex w-max animate-marquee">
        {strip(false)}
        {strip(true)}
      </div>
    </div>
  );
}
