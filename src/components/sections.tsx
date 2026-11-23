import Image from "next/image";
import Link from "next/link";
import { site, groups, pricing, isPlaceholder, jamiePhoto, asset } from "@/content/site";
import { Section, SectionHead } from "@/components/section";
import { Tbc } from "@/components/tbc";
import { Button } from "@/components/ui/button";
import { CypherPlan } from "@/components/cypher-plan";
import trainShot from "@/assets/app/01-train.png";
import movesShot from "@/assets/app/06-book-moves.png";

// The class arc is a real sequence, so it is numbered.
const arc = [
  { name: "Warm up", body: "Joints, wrists and shoulders first. Every class." },
  { name: "Toprock", body: "The standing steps that open every round. Groove, timing and style." },
  { name: "Footwork", body: "Moving on the floor with control: the six step, threads and your own variations." },
  { name: "Freezes", body: "Holding shapes like the baby freeze and chair freeze, built up step by step." },
  { name: "Power basics", body: "An intro to spins and rotations, only with proper progressions and mats." },
  { name: "Cypher", body: "Music on, circle up. Hearing the breaks, battle etiquette, respect, and where hip hop comes from." },
];

export function Learn() {
  return (
    <Section id="learn" labelledBy="learn-title" className="bg-white">
      <SectionHead id="learn-title" title={<>Every class,<br />same arc</>} lede="An hour that builds from the ground up. Beginners do the first version of each part; you get harder options as you progress." />
      <ol className="grid border-t-2 border-ink md:grid-cols-2 md:gap-x-16">
        {arc.map((m, i) => (
          <li key={m.name} className="grid grid-cols-[3.5rem_1fr] items-baseline gap-x-4 border-b border-line py-6 sm:grid-cols-[5rem_1fr]">
            <span className="font-display text-4xl font-black text-signal sm:text-5xl" aria-hidden>{i + 1}</span>
            <div>
              <h3 className="font-display text-4xl font-extrabold uppercase leading-none sm:text-5xl">{m.name}</h3>
              <p className="mt-2 max-w-md text-base leading-relaxed text-muted-foreground">{m.body}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-8 text-sm text-muted-foreground">Breaking made its Olympic debut at Paris 2024.</p>
    </Section>
  );
}

export function Timetable() {
  return (
    <div>
      <p className="mb-4 max-w-xl text-lg text-white/75">
        <Tbc value={site.dayTime} label="Day TBC" /> at <Tbc value={site.venue} label="venue TBC" />, {site.area}. Term dates <Tbc value={site.termDates} />.
      </p>
      <table className="w-full border-collapse text-left">
        <caption className="sr-only">Class times by group</caption>
        <thead>
          <tr className="border-y border-white/25 text-sm text-white/60">
            <th scope="col" className="py-3 pr-4 font-medium">Time</th>
            <th scope="col" className="py-3 pr-4 font-medium">Group</th>
            <th scope="col" className="hidden py-3 font-medium md:table-cell">What we focus on</th>
          </tr>
        </thead>
        <tbody>
          {groups.map((g) => (
            <tr key={g.id} className="border-b border-white/25 align-top">
              <td className="w-28 py-6 pr-4 font-display text-4xl font-extrabold sm:w-40 sm:text-5xl"><Tbc value={g.time} /></td>
              <th scope="row" className="py-6 pr-4 font-normal">
                <span className="block font-display text-4xl font-extrabold uppercase leading-none sm:text-5xl">{g.name}</span>
                <span className="mt-2 block text-base text-white/70 md:hidden">{g.focus}</span>
                <span className="mt-2 block text-sm text-white/60">{g.kids ? "Parents welcome to watch. Starts once Blue Card and insurance are in place." : "Come solo or bring a friend. No fitness test."}</span>
              </th>
              <td className="hidden max-w-xs py-6 text-lg leading-snug text-white/80 md:table-cell">{g.focus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Pricing() {
  return (
    <div>
      <h3 className="font-display text-3xl font-extrabold uppercase">Prices</h3>
      <dl className="mt-4 border-t border-white/25">
        {pricing.map((p) => (
          <div key={p.id} className="grid grid-cols-[1fr_auto] gap-x-6 border-b border-white/25 py-5">
            <dt className="text-lg font-medium">{p.name}<span className="mt-1 block text-sm font-normal text-white/60">{p.note}</span></dt>
            <dd className="text-right">
              <span className="font-display text-5xl font-black leading-none">{isPlaceholder(p.price) ? <Tbc value={p.price} className="text-2xl" /> : p.price}</span>
              {p.unit && <span className="block text-sm text-white/60">{p.unit}</span>}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function ClassesBlock({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
  const H = headingLevel;
  return (
    <Section id="classes" dark labelledBy="classes-title" className="grain">
      <div className="mb-12 grid gap-6 md:grid-cols-12">
        <H id="classes-title" className="text-h2 md:col-span-8">Weekend<br />timetable</H>
        <p className="max-w-sm text-lg leading-relaxed text-white/70 md:col-span-4 md:self-end">Small groups split by age. Total beginners welcome in every group. Times and venue are being locked in now.</p>
      </div>
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-8"><Timetable /></div>
        <div className="lg:col-span-4">
          <Pricing />
          <Button asChild variant="tape" size="lg" className="mt-8 h-13 w-full px-7"><Link href="/#register">Book a free class</Link></Button>
        </div>
      </div>
    </Section>
  );
}

const bring = [
  "Clean indoor sneakers with flat soles",
  "Comfy clothes you can move in, no zips or buckles",
  "A full water bottle",
  "Anything we should know about injuries or medical needs",
];

export function BringAndSafety() {
  const status = [
    { label: "Blue Card", ok: site.blueCardHeld, pending: "Kids classes start once issued" },
    { label: "Public liability insurance", ok: site.insuranceInPlace, pending: "Being arranged" },
    { label: "First aid certificate", ok: site.firstAidCurrent, pending: "Being arranged" },
  ];
  return (
    <Section id="safety" labelledBy="safety-title">
      <div className="grid gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <h2 className="text-h2">Bring</h2>
          <ul className="mt-8 border-t-2 border-ink">
            {bring.map((b) => <li key={b} className="border-b border-line py-4 text-lg">{b}</li>)}
          </ul>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <h2 id="safety-title" className="text-h2">Safety</h2>
          <p className="mt-8 max-w-lg text-xl leading-snug">
            Small groups, warm ups every class, mats under freezes. No inverted moves without the progressions first.
            Parents welcome to stay. Photos only with your consent.
          </p>
          <dl className="mt-8 border-t-2 border-ink">
            {status.map((s) => (
              <div key={s.label} className="flex items-baseline justify-between gap-4 border-b border-line py-3">
                <dt className="font-medium">{s.label}</dt>
                <dd className={s.ok ? "text-sm font-medium" : "text-sm text-muted-foreground"}>{s.ok ? "In place" : s.pending}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}

export function PracticeApp() {
  const shots = [
    { src: movesShot, alt: "Shadow Cypher move book listing toprock, footwork and freezes" },
    { src: trainShot, alt: "Shadow Cypher training screen with a suggested 15 minute foundations session" },
  ];
  return (
    <Section id="app" labelledBy="app-title" className="overflow-hidden bg-white">
      <div className="grid gap-14 md:grid-cols-12 md:items-center">
        <div className="md:col-span-5">
          <h2 id="app-title" className="text-h2">Practise between classes</h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            {site.practiceApp.name} is a free practice app for students. Timed shadow sessions, a move book and
            rounds to drill what you learned on the weekend. Runs in your browser, no account needed.
          </p>
          <Button asChild variant="line" size="lg" className="mt-8 h-13 px-7"><a href={site.practiceApp.url}>Open {site.practiceApp.name}</a></Button>
        </div>
        <div className="flex gap-4 md:col-span-6 md:col-start-7 md:justify-end">
          {shots.map((s, i) => (
            <div key={s.alt} className={`aspect-[9/16.6] w-1/2 max-w-56 shrink-0 overflow-hidden rounded-[1.6rem] border-[6px] border-ink bg-ink ${i ? "mt-12" : ""}`}>
              <Image src={s.src} alt={s.alt} sizes="(min-width: 768px) 224px, 45vw" className="h-full w-full rounded-[1.1rem] object-cover object-top" placeholder="blur" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function AboutJamie() {
  const years = isPlaceholder(site.years) ? null : site.years;
  const crew = isPlaceholder(site.crew) ? null : site.crew;
  return (
    <Section id="about" labelledBy="about-title" className="grain">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          {jamiePhoto ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={asset(jamiePhoto)} alt={`${site.instructor} breaking`} loading="lazy" className="aspect-[4/5] w-full object-cover grayscale" />
          ) : (
            <div className="aspect-square w-full max-w-md bg-white p-6 md:p-10"><CypherPlan className="h-full w-full text-ink" /></div>
          )}
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <h2 id="about-title" className="text-h2">Hi, I&apos;m {site.instructor}</h2>
          <div className="mt-8 space-y-5 text-xl leading-relaxed">
            <p>I&apos;m a Korean Australian breaker based in Brisbane.{years && ` I've been breaking for ${years} years.`}{crew && ` I rep ${crew}.`}</p>
            {!isPlaceholder(site.bio) && <p>{site.bio}</p>}
            <p>My classes are about safe progressions, confidence, music and respect for hip hop culture. You don&apos;t need to be fit or flexible to start. You need to turn up.</p>
          </div>
          {(!years || !crew) && (
            <dl className="mt-10 grid grid-cols-2 border-t-2 border-ink text-base">
              <div className="border-b border-line py-3"><dt className="text-sm text-muted-foreground">Years breaking</dt><dd className="mt-1 font-medium"><Tbc value={site.years} /></dd></div>
              <div className="border-b border-line py-3"><dt className="text-sm text-muted-foreground">Crew</dt><dd className="mt-1 font-medium"><Tbc value={site.crew} /></dd></div>
            </dl>
          )}
        </div>
      </div>
    </Section>
  );
}

export function CtaBand() {
  return (
    <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t-2 border-ink pt-6">
      <p className="text-lg">Still have a question?</p>
      <Button asChild variant="line" size="lg" className="h-12"><Link href="/#register">Ask when you register</Link></Button>
    </div>
  );
}
