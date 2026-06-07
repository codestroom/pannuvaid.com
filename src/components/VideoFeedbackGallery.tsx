"use client";

import { useRef } from "react";
import Link from "next/link";
import { FiArrowRight, FiVolume2 } from "react-icons/fi";
import { videoFeedback } from "@/lib/content";
import { getProduct } from "@/lib/products";
import { Reveal } from "./Reveal";

export function VideoFeedbackGallery() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
      {videoFeedback.map((v, i) => (
        <Reveal key={v.src} delay={i}>
          <VideoCard video={v} />
        </Reveal>
      ))}
    </div>
  );
}

function VideoCard({ video }: { video: (typeof videoFeedback)[number] }) {
  const ref = useRef<HTMLVideoElement>(null);
  const product = getProduct(video.productSlug);

  // Browsers only allow autoplay when muted. We unmute on hover and
  // re-mute on leave so the grid stays quiet until the user engages.
  const enableSound = () => {
    const el = ref.current;
    if (!el) return;
    el.muted = false;
    el.volume = 1;
    void el.play();
  };
  const disableSound = () => {
    if (ref.current) ref.current.muted = true;
  };

  return (
    <div
      onMouseEnter={enableSound}
      onMouseLeave={disableSound}
      className="group relative z-0 overflow-hidden rounded-[1.75rem] border border-white/20 bg-black shadow-soft transition-all duration-300 hover:z-20 hover:-translate-y-1 hover:scale-[1.12] hover:shadow-2xl dark:border-white/10"
    >
      <div className="relative aspect-[9/16] w-full">
        <video
          ref={ref}
          src={video.src}
          poster={video.poster}
          muted
          autoPlay
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
        />

        {/* Readability gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-black/30" />

        {/* Hover-to-unmute hint */}
        <span className="pointer-events-none absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/45 px-2 py-1 text-[10px] font-bold text-white opacity-100 backdrop-blur transition-opacity duration-300 group-hover:opacity-0">
          <FiVolume2 size={12} /> Hover for sound
        </span>

        {/* Caption + Order Now */}
        <div className="absolute inset-x-0 bottom-0 p-3.5 text-left">
          <p className="text-[10px] font-extrabold uppercase tracking-wider text-brand-300">
            {video.condition}
          </p>
          <p className="mt-0.5 text-sm font-bold leading-tight text-white">
            {video.label}
          </p>

          {product && (
            <Link
              href={`/products/${product.slug}`}
              className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-brand-gradient px-3 py-2 text-xs font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Order Now
              <FiArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
