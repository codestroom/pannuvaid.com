import Link from "next/link";
import { FaLeaf } from "react-icons/fa";

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center bg-hero-radial px-5">
      <div className="text-center">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-brand-gradient text-white">
          <FaLeaf size={28} />
        </span>
        <h1 className="mt-6 font-display text-6xl font-bold gradient-text">404</h1>
        <p className="mt-3 text-lg text-brand-800/70 dark:text-brand-200/60">
          The page you're looking for couldn't be found.
        </p>
        <Link href="/" className="btn-primary mt-8">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
