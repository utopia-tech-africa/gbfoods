"use client";

import type { EventArea } from "@/app/lib/venue";
import { getMapUrl } from "@/app/lib/venue";

const ICONS: Record<EventArea["id"], React.ReactNode> = {
  coffee: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-10"
      aria-hidden
    >
      <path d="M8 2v4M12 2v4M16 2v4" />
      <path d="M6 6v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6" />
      <path d="M6 10h12" />
      <path d="M9 18h6" />
    </svg>
  ),
  dining: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-10"
      aria-hidden
    >
      <path d="M4 2v20M20 2v20" />
      <path d="M4 12h16" />
      <path d="M8 6v12M16 6v12" />
    </svg>
  ),
  conference: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-10"
      aria-hidden
    >
      <path d="M2 6h20v12H2z" />
      <path d="M7 10h2M15 10h2M7 14h4M13 14h2" />
    </svg>
  ),
};

type AreaCardProps = {
  area: EventArea;
  index: number;
};

export function AreaCard({ area, index }: AreaCardProps) {
  const mapUrl = getMapUrl(area);

  return (
    <article
      className="group/card area-card relative overflow-hidden rounded-2xl border border-stone-200/80 bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#ff5900]/40 hover:shadow-lg hover:shadow-[#ff5900]/20 focus-within:ring-2 focus-within:ring-[#ff5900]/60 focus-within:ring-offset-2 dark:border-stone-700/80 dark:bg-stone-900/50 dark:hover:border-[#ff5900]/50 dark:hover:shadow-[#ff5900]/15"
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <div className="absolute right-0 top-0 h-24 w-24 translate-x-4 -translate-y-4 rounded-full bg-[#ff5900]/10 transition-transform duration-300 group-hover/card:scale-150 group-hover/card:bg-[#ff5900]/20" />
      <div className="relative flex flex-col gap-4">
        <div className="flex size-14 items-center justify-center rounded-xl bg-[#ff5900]/15 text-[#ff5900] transition-colors duration-300 group-hover/card:bg-[#ff5900]/25 group-hover/card:text-[#ff5900] dark:bg-[#ff5900]/20 dark:group-hover/card:bg-[#ff5900]/30">
          {ICONS[area.id]}
        </div>
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-stone-900 dark:text-stone-100">
            {area.title}
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
            {area.description}
          </p>
        </div>
        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn inline-flex w-fit items-center gap-2 rounded-xl bg-[#ff5900] px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:scale-[1.02] hover:bg-[#e64d00] active:scale-[0.98] dark:hover:bg-[#ff6b1a]"
        >
          <span>Get directions</span>
          <svg
            className="size-4 transition-transform duration-200 group-hover/btn:translate-x-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </article>
  );
}
