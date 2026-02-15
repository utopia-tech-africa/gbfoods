import Image from "next/image";
import { InteractiveOrangeBackground } from "@/app/components/interactive-orange-background";
import { AreaCard } from "@/app/components/area-card";
import { EVENT_AREAS } from "@/app/lib/venue";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-y-auto md:h-screen md:overflow-hidden">
      <InteractiveOrangeBackground />

      <div className="relative flex h-full min-h-screen flex-col md:h-screen">
        <header className="relative shrink-0 pt-4 pb-2 md:pt-5 md:pb-3">
          <Image
            src="/favicon.svg"
            alt="GB Foods"
            width={140}
            height={83}
            className="animate-fade-in mx-auto block h-12 w-auto md:h-14 [animation-fill-mode:backwards]"
            priority
          />
        </header>

        <main className="relative mx-auto flex min-h-0 flex-1 flex-col justify-center px-4 py-6 md:max-w-4xl md:px-6 md:py-8">
          <div className="mb-6 text-center md:mb-8">
            <p className="animate-fade-in text-xs font-medium uppercase tracking-widest text-[#ff5900] md:text-sm [animation-fill-mode:backwards]">
              Event Guide
            </p>
            <h1 className="animate-fade-in mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl md:mt-3 md:text-5xl [animation-delay:80ms] [animation-fill-mode:backwards] drop-shadow-sm">
              Find your way
            </h1>
            <p className="animate-fade-in mx-auto mt-2 max-w-xl text-sm text-white/85 md:mt-3 md:text-base [animation-delay:160ms] [animation-fill-mode:backwards]">
              Coffee break, dining, and conference sessions are in different
              areas. Tap below to open directions.
            </p>
          </div>

          <section
            className="grid items-start gap-4 sm:gap-5 md:grid-cols-3 md:gap-6"
            aria-label="Event areas"
          >
            {EVENT_AREAS.map((area, index) => (
              <AreaCard key={area.id} area={area} index={index} />
            ))}
          </section>

          <p className="mt-4 shrink-0 text-center text-xs text-white/75 md:mt-6 md:text-sm">
            All areas are at the same venue. Buttons open your maps app for
            directions.
          </p>
        </main>
      </div>
    </div>
  );
}
