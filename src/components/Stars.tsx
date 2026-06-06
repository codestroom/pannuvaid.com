import { FaStar } from "react-icons/fa";

export function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5 text-gold-400">
      {Array.from({ length: count }).map((_, i) => (
        <FaStar key={i} size={15} />
      ))}
    </div>
  );
}
