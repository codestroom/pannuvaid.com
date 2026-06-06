import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Logo({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "md" | "lg";
}) {
  return (
    <Link
      href="/"
      className={cn("flex items-center", className)}
      aria-label={`${site.name} home`}
    >
      <span className="rounded-xl bg-white/95 px-2.5 py-1.5 shadow-sm ring-1 ring-brand-100/70 dark:ring-white/10">
        <Image
          src="/logo.png"
          alt="Pannu Vaid Ayurveda logo"
          width={548}
          height={200}
          priority
          className={cn(
            "w-auto object-contain",
            size === "lg" ? "h-14 sm:h-16" : "h-11 sm:h-12"
          )}
        />
      </span>
    </Link>
  );
}
