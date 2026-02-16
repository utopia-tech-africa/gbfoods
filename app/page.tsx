import Image from "next/image";
import { InteractiveOrangeBackground } from "@/app/components/interactive-orange-background";
import { AreaCard } from "@/app/components/area-card";
import { EVENT_AREAS } from "@/app/lib/venue";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <InteractiveOrangeBackground />

      <div className="relative flex min-h-screen flex-col">
        <header className="relative shrink-0 pt-4 pb-4 md:pt-6 md:pb-6">
          <Image
            src="/logo-ghana.png"
            alt="GB Foods Ghana"
            width={200}
            height={80}
            className="animate-fade-in mx-auto block h-14 w-auto md:h-16 [animation-fill-mode:backwards]"
            priority
          />
          <Image
            src="/conference-2026.png"
            alt="Commercial Conference 2026"
            width={400}
            height={120}
            className="animate-fade-in mx-auto mt-4 block h-16 w-auto md:mt-5 md:h-20 [animation-delay:60ms] [animation-fill-mode:backwards]"
          />
        </header>

        <main className="relative mx-auto flex flex-1 flex-col px-4 py-8 md:max-w-4xl md:px-6 md:py-12">
          <div className="mb-8 text-center md:mb-12">
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
            className="grid items-start gap-5 sm:gap-6 md:grid-cols-2 md:gap-8"
            aria-label="Event areas"
          >
            {EVENT_AREAS.map((area, index) => (
              <AreaCard key={area.id} area={area} index={index} />
            ))}
          </section>

          <p className="mt-8 shrink-0 text-center text-xs text-white/75 md:mt-10 md:text-sm">
            All areas are at the same venue. Buttons open your maps app for
            directions.
          </p>
        </main>

        <footer className="relative shrink-0 px-4 pb-8 pt-12 md:px-6 md:pb-12 md:pt-16">
          <Image
            src="/footer-banner.png"
            alt="Refuel to Win - Drive Growth. Lead with Proof."
            width={600}
            height={180}
            className="mx-auto block w-full max-w-xl object-contain"
          />
        </footer>
      </div>
    </div>
  );
}
