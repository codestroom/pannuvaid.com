import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumb: { label: string; href?: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-hero-radial pb-10 pt-32 sm:pt-40">
      <div className="container-px">
        <Reveal>
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-1 text-xs text-brand-800/60 dark:text-brand-200/50">
              {breadcrumb.map((b, i) => (
                <li key={i} className="flex items-center gap-1">
                  {b.href ? (
                    <Link href={b.href} className="hover:text-brand-600">
                      {b.label}
                    </Link>
                  ) : (
                    <span className="font-medium text-brand-700 dark:text-brand-300">
                      {b.label}
                    </span>
                  )}
                  {i < breadcrumb.length - 1 && <FiChevronRight size={12} />}
                </li>
              ))}
            </ol>
          </nav>
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-lg text-brand-800/70 dark:text-brand-200/60">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
