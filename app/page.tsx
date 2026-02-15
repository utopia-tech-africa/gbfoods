import { AreaCard } from "@/app/components/area-card";
import { EVENT_AREAS } from "@/app/lib/venue";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-stone-50 dark:bg-stone-950">
      {/* Background gradient and subtle pattern */}
      <div
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(251,191,36,0.15),transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(251,191,36,0.08),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,rgb(0_0_0/0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgb(0_0_0/0.02)_1px,transparent_1px)] bg-size-[24px_24px] dark:bg-stone-900/30"
        aria-hidden
      />

      <main className="relative mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <header className="mb-14 text-center sm:mb-16">
          <p className="animate-fade-in text-sm font-medium uppercase tracking-widest text-amber-600 dark:text-amber-400">
            Event Guide
          </p>
          <h1 className="animate-fade-in mt-3 text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100 sm:text-5xl md:text-6xl [animation-delay:80ms] [animation-fill-mode:backwards]">
            Find your way
          </h1>
          <p className="animate-fade-in mx-auto mt-4 max-w-xl text-lg text-stone-600 [animation-delay:160ms] [animation-fill-mode:backwards] dark:text-stone-400">
            Coffee break, dining, and conference sessions are in different areas.
            Tap below to open directions.
          </p>
        </header>

        <section
          className="grid gap-5 sm:gap-6 md:grid-cols-3"
          aria-label="Event areas"
        >
          {EVENT_AREAS.map((area, index) => (
            <AreaCard key={area.id} area={area} index={index} />
          ))}
        </section>

        <p className="mt-10 text-center text-sm text-stone-500 dark:text-stone-500">
          All areas are at the same venue. Buttons open your maps app for
          directions.
        </p>
      </main>
    </div>
  );
}
