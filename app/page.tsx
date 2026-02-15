import { InteractiveOrangeBackground } from "@/app/components/interactive-orange-background";
import { AreaCard } from "@/app/components/area-card";
import { EVENT_AREAS } from "@/app/lib/venue";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <InteractiveOrangeBackground />

      <main className="relative mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <header className="mb-14 text-center sm:mb-16">
          <p className="animate-fade-in text-sm font-medium uppercase tracking-widest text-[#ff5900] [animation-fill-mode:backwards]">
            Event Guide
          </p>
          <h1 className="animate-fade-in mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl [animation-delay:80ms] [animation-fill-mode:backwards] drop-shadow-sm">
            Find your way
          </h1>
          <p className="animate-fade-in mx-auto mt-4 max-w-xl text-lg text-white/85 [animation-delay:160ms] [animation-fill-mode:backwards]">
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

        <p className="mt-10 text-center text-sm text-white/75">
          All areas are at the same venue. Buttons open your maps app for
          directions.
        </p>
      </main>
    </div>
  );
}
