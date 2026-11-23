import Link from "next/link";
import { site, heroVideo, asset } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Tbc } from "@/components/tbc";
import { MoveStrip } from "@/components/move-strip";

function Facts({ light = false }: { light?: boolean }) {
  return (
    <dl className={`grid grid-cols-2 gap-x-6 gap-y-3 border-t pt-4 text-sm sm:grid-cols-3 ${light ? "border-white/30" : "border-ink"}`}>
      <div><dt className="opacity-70">When</dt><dd className="font-medium"><Tbc value={site.dayTime} /></dd></div>
      <div><dt className="opacity-70">Where</dt><dd className="font-medium"><Tbc value={site.venue} />, {site.area}</dd></div>
      <div><dt className="opacity-70">First class</dt><dd className="font-medium">Free</dd></div>
    </dl>
  );
}

function Ctas() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button asChild variant="tape" size="lg" className="h-13 px-7"><Link href="/#register">Book a free class</Link></Button>
      <Button asChild variant="line" size="lg" className="h-13 px-7"><Link href="/classes/">Timetable and prices</Link></Button>
    </div>
  );
}

/** Video hero: only when site.heroVideo is set. Reduced motion hides the video and shows the poster. */
function VideoHero({ src, poster }: { src: string; poster: string }) {
  return (
    <section aria-labelledby="hero-title" className="dark relative isolate flex min-h-[88svh] items-end overflow-hidden bg-ink text-white">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={asset(poster)} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" fetchPriority="high" />
      <video className="hero-video absolute inset-0 -z-10 h-full w-full object-cover" src={asset(src)} poster={asset(poster)} autoPlay muted loop playsInline preload="auto" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
      <div className="mx-auto w-full max-w-7xl px-4 pb-10 sm:px-6 sm:pb-14">
        <h1 id="hero-title" className="text-display text-[clamp(5rem,19vw,17rem)]">Learn<br />to break</h1>
        <div className="mt-8 grid gap-8 md:grid-cols-12 md:items-end">
          <p className="max-w-md text-lg leading-relaxed md:col-span-5">Weekend breaking classes for {site.blueCardHeld ? "kids, teens and adult beginners" : "adult beginners"}, taught by {site.instructor}. No experience needed.</p>
          <div className="md:col-span-7 md:justify-self-end"><Ctas /></div>
        </div>
        <div className="mt-10"><Facts light /></div>
      </div>
    </section>
  );
}

export function Hero() {
  if (heroVideo) return <VideoHero {...heroVideo} />;
  return (
    <section aria-labelledby="hero-title" className="grain overflow-hidden bg-paper text-ink">
      <div className="mx-auto max-w-7xl px-4 pt-8 pb-12 sm:px-6 sm:pt-12 md:pb-16">
        <p className="flex justify-between gap-4 text-sm font-medium">
          <span>Weekend breaking classes</span>
          <span className="text-right">{site.area}</span>
        </p>
        <h1 id="hero-title" className="text-display mt-6 text-[clamp(5.2rem,24vw,21rem)] md:mt-4 md:text-[clamp(8rem,16.5vw,17rem)]">
          <span className="block">Learn</span>
          <span className="block md:pl-[18%]">to break</span>
        </h1>
        <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-12 md:items-end md:gap-8">
          <div className="md:col-span-5">
            <p className="max-w-md text-xl leading-snug">
              {site.blueCardHeld ? "Kids, teens and adult beginners." : "Adult beginners, with kids and teens classes opening soon."} Toprock, footwork, freezes and the culture behind them, taught by {site.instructor}. Start from zero.
            </p>
            <div className="mt-8"><Ctas /></div>
          </div>
          <div className="md:col-span-7">
            <MoveStrip className="text-ink" />
          </div>
        </div>
        <div className="mt-12"><Facts /></div>
      </div>
    </section>
  );
}
