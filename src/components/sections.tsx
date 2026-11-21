import Image from "next/image";
import Link from "next/link";
import { Check, ShieldCheck, Smartphone } from "lucide-react";
import { site, groups, pricing, isPlaceholder } from "@/content/site";
import { Section, SectionHead } from "@/components/section";
import { Tbc } from "@/components/tbc";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import trainShot from "@/assets/app/01-train.png";
import movesShot from "@/assets/app/06-book-moves.png";
import roundShot from "@/assets/app/03-round.png";

const moves = [
  { name: "Toprock", body: "The standing steps that open every round. Groove, timing and style." },
  { name: "Footwork", body: "Moving on the floor with control: the six step, threads and your own variations." },
  { name: "Freezes", body: "Holding shapes like the baby freeze and chair freeze, built up step by step." },
  { name: "Power basics", body: "An intro to spins and rotations, only with proper progressions and mats." },
  { name: "Musicality", body: "Hearing the beat and the breaks, and dancing to the music, not over it." },
  { name: "Cypher culture", body: "Cyphers, battle etiquette, respect, and where hip hop comes from." },
];

export function Learn() {
  return (
    <Section id="learn" labelledBy="learn-title">
      <SectionHead
        id="learn-title"
        title="What you learn"
        lede="Every class runs the same arc: warm up, toprock, footwork, freezes, a power basic, then a cypher with music and respect."
      />
      <dl className="border-t border-ink">
        {moves.map((m) => (
          <div key={m.name} className="grid gap-2 border-b border-line py-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] md:items-baseline md:gap-12">
            <dt className="font-display text-4xl uppercase leading-none sm:text-5xl">{m.name}</dt>
            <dd className="max-w-prose text-lg text-muted-foreground">{m.body}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-8 text-sm text-muted-foreground">Breaking made its Olympic debut at Paris 2024.</p>
    </Section>
  );
}

export function WhoFor() {
  return (
    <Section id="who" labelledBy="who-title" className="bg-white">
      <SectionHead id="who-title" title="Who it's for" lede="Small groups split by age. Total beginners welcome in every group." />
      <Tabs defaultValue={groups[0].id} className="gap-8">
        <TabsList className="!h-auto w-fit max-w-full flex-wrap justify-start gap-1 rounded-lg bg-muted p-1">
          {groups.map((g) => (
            <TabsTrigger key={g.id} value={g.id} className="!h-10 flex-none rounded-md px-4 text-sm data-[state=active]:bg-ink data-[state=active]:text-paper data-[state=active]:shadow-none">{g.name}</TabsTrigger>
          ))}
        </TabsList>
        {groups.map((g) => (
          <TabsContent key={g.id} value={g.id} className="mt-4 grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-end">
            <div>
              <p className="font-display text-6xl uppercase leading-none sm:text-7xl">Ages {g.ages}</p>
              <p className="mt-4 max-w-md text-xl leading-relaxed">{g.focus}</p>
            </div>
            <ul className="space-y-3 text-base">
              <li className="flex gap-3"><Check className="mt-1 size-4 shrink-0" aria-hidden />Levels: beginner first, with harder options as you progress</li>
              <li className="flex gap-3"><Check className="mt-1 size-4 shrink-0" aria-hidden />Warm up and cool down every class</li>
              <li className="flex gap-3"><Check className="mt-1 size-4 shrink-0" aria-hidden />{g.kids ? "Parents welcome to watch. Parent stays on site for under 8s." : "Come solo or bring a friend. No fitness test."}</li>
              {g.kids && <li className="flex gap-3"><ShieldCheck className="mt-1 size-4 shrink-0" aria-hidden />Kids classes start once Blue Card and insurance are in place</li>}
            </ul>
          </TabsContent>
        ))}
      </Tabs>
    </Section>
  );
}

export function Timetable() {
  return (
    <Card className="dark gap-0 overflow-hidden rounded-xl border border-border bg-ink py-0 ring-0 text-foreground shadow-none">
      <CardHeader className="border-b border-border px-6 py-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <CardTitle className="font-display text-3xl font-normal uppercase">Weekend timetable</CardTitle>
          <Badge variant="outline" className="border-signal text-signal">Starting soon</Badge>
        </div>
        <CardDescription className="mt-2 text-muted-foreground">
          <Tbc value={site.dayTime} label="Day TBC" /> at <Tbc value={site.venue} label="Venue TBC" />, {site.area}. Terms <Tbc value={site.termDates} />.
        </CardDescription>
      </CardHeader>
      <CardContent className="px-0">
        <table className="w-full text-left">
          <caption className="sr-only">Class times by group</caption>
          <thead className="text-xs text-muted-foreground">
            <tr><th scope="col" className="px-6 py-3 font-medium">Time</th><th scope="col" className="px-6 py-3 font-medium">Group</th><th scope="col" className="hidden px-6 py-3 font-medium sm:table-cell">Focus</th></tr>
          </thead>
          <tbody>
            {groups.map((g) => (
              <tr key={g.id} className="border-t border-border">
                <td className="px-6 py-5 font-display text-2xl text-signal"><Tbc value={g.time} /></td>
                <th scope="row" className="px-6 py-5 text-base font-medium">{g.name}</th>
                <td className="hidden px-6 py-5 text-sm text-muted-foreground sm:table-cell">{g.focus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}

export function Pricing() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {pricing.map((p) => {
        const featured = p.id === "term";
        return (
          <Card key={p.id} className={featured ? "rounded-xl border border-ink bg-ink text-paper shadow-none ring-0 [--card-spacing:--spacing(6)]" : "rounded-xl border border-line shadow-none ring-0 [--card-spacing:--spacing(6)]"}>
            <CardHeader>
              <CardTitle className="text-base font-medium">{p.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="flex h-16 items-end font-display text-6xl leading-none">
                {isPlaceholder(p.price) ? <Tbc value={p.price} className="text-3xl" /> : p.price}
              </p>
              <p className={featured ? "mt-3 min-h-5 text-sm text-paper/70" : "mt-3 min-h-5 text-sm text-muted-foreground"}>{p.unit}</p>
            </CardContent>
            <CardFooter className={featured ? "mt-auto border-t border-paper/15 bg-transparent py-5 text-sm text-paper/80" : "mt-auto border-t border-line bg-transparent py-5 text-sm text-muted-foreground"}>
              <p>{p.note}</p>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}

export function ClassesBlock({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
  const H = headingLevel;
  return (
    <Section id="classes" labelledBy="classes-title">
      <div className="mb-12 grid gap-4 md:grid-cols-[1fr_minmax(0,28rem)] md:items-end md:gap-12">
        <H id="classes-title" className="text-h2">Classes and prices</H>
        <p className="text-lg leading-relaxed text-muted-foreground">Times, venue and prices are being locked in now. Register interest and you will hear first.</p>
      </div>
      <div className="grid gap-12">
        <Timetable />
        <Pricing />
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
    <Section id="safety" labelledBy="safety-title" className="bg-white">
      <div className="grid gap-16 md:grid-cols-2">
        <div>
          <h2 className="text-h2">What to bring</h2>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {bring.map((b) => (
              <li key={b} className="flex gap-3 py-4 text-lg"><Check className="mt-1.5 size-4 shrink-0" aria-hidden />{b}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 id="safety-title" className="text-h2">Safety</h2>
          <ul className="mt-8 space-y-3 text-lg">
            <li>Small groups, warm ups every class, mats under freezes.</li>
            <li>No inverted moves without the progressions first.</li>
            <li>Parents welcome to stay. Photos only with your consent.</li>
          </ul>
          <dl className="mt-8 divide-y divide-line rounded-lg border border-line">
            {status.map((s) => (
              <div key={s.label} className="flex items-center justify-between gap-4 px-4 py-3">
                <dt className="font-medium">{s.label}</dt>
                <dd className="text-sm text-muted-foreground">{s.ok ? "In place" : s.pending}</dd>
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
    { src: roundShot, alt: "Shadow Cypher round timer during a practice session" },
  ];
  return (
    <Section id="app" dark labelledBy="app-title" className="overflow-hidden">
      <div className="grid gap-16 md:grid-cols-[1fr_1.2fr] md:items-center">
        <div>
          <Badge variant="outline" className="mb-6 gap-1.5 border-border"><Smartphone className="size-3.5" aria-hidden />Free for students</Badge>
          <h2 id="app-title" className="text-h2">Practise between classes</h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            {site.practiceApp.name} is a free breaking practice app for students. Timed shadow sessions, a move book and
            rounds to drill what you learned on the weekend. It runs in your browser, no account needed.
          </p>
          <Button asChild size="lg" className="mt-8 h-12 bg-signal px-6 text-base text-ink hover:bg-signal/90">
            <a href={site.practiceApp.url}>Open {site.practiceApp.name}</a>
          </Button>
        </div>
        <div className="relative flex justify-center gap-4 md:justify-end">
          {shots.map((s, i) => (
            <div
              key={s.alt}
              className={[
                "aspect-[9/16.6] w-[44%] shrink-0 overflow-hidden rounded-[1.75rem] border border-border bg-black p-1.5 sm:w-48",
                i === 1 ? "-mt-0 md:-mt-10" : "mt-10",
                i === 2 ? "hidden sm:block" : "",
              ].join(" ")}
            >
              <Image src={s.src} alt={s.alt} sizes="(min-width: 640px) 192px, 44vw" className="h-full w-full rounded-[1.35rem] object-cover object-top" placeholder="blur" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function AboutJamie() {
  return (
    <Section id="about" labelledBy="about-title">
      <div className="grid gap-10 md:grid-cols-[1fr_1.3fr]">
        <h2 id="about-title" className="text-h2">Meet {site.instructor}</h2>
        <div className="space-y-4 text-lg leading-relaxed">
          <p>
            {site.instructor} is a Korean Australian breaker based in Brisbane. His classes focus on safe progressions,
            confidence, music and respect for hip hop culture.
          </p>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line text-base">
            <div className="bg-paper p-4"><dt className="text-sm text-muted-foreground">Years breaking</dt><dd className="mt-1 font-medium"><Tbc value={site.years} /></dd></div>
            <div className="bg-paper p-4"><dt className="text-sm text-muted-foreground">Crew</dt><dd className="mt-1 font-medium"><Tbc value={site.crew} /></dd></div>
          </dl>
          {!isPlaceholder(site.bio) && <p className="text-muted-foreground">{site.bio}</p>}
        </div>
      </div>
    </Section>
  );
}

export function CtaBand() {
  return (
    <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-line p-6">
      <p className="text-lg">Still have a question?</p>
      <Button asChild size="lg" variant="outline" className="h-11"><Link href="/#register">Ask when you register</Link></Button>
    </div>
  );
}
