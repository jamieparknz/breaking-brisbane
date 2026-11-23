import Link from "next/link";
import { site, isPlaceholder } from "@/content/site";

export function SiteFooter() {
  const ig = !isPlaceholder(site.instagram);
  return (
    <footer className="dark overflow-hidden bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pt-16 pb-8 sm:px-6 md:grid-cols-12">
        <p className="max-w-sm text-lg text-white/75 md:col-span-5">
          Weekend breaking classes on the {site.area}, taught by {site.instructor}. Serving {site.suburbsServed.slice(0, -1).join(", ")} and {site.suburbsServed.at(-1)}.
        </p>
        <nav aria-label="Footer" className="flex flex-col gap-2 md:col-span-3 md:col-start-7">
          <Link href="/classes/" className="hover:underline">Timetable and prices</Link>
          <Link href="/faq/" className="hover:underline">FAQ</Link>
          <Link href="/#register" className="hover:underline">Book a free class</Link>
          <a href={site.practiceApp.url} className="hover:underline">{site.practiceApp.name} practice app</a>
        </nav>
        <div className="md:col-span-3">
          {ig ? <a href={`https://instagram.com/${site.instagram}`} className="hover:underline">Instagram @{site.instagram}</a> : <span className="text-white/60">Instagram coming soon</span>}
        </div>
      </div>
      <p aria-hidden className="text-display mx-auto max-w-7xl px-4 pt-6 text-[clamp(4rem,17vw,15.5rem)] leading-[0.78] text-white sm:px-6">{site.brand}</p>
      <div className="mx-auto max-w-7xl px-4 py-6 text-xs text-white/55 sm:px-6">© {new Date().getFullYear()} {site.brand}. Brisbane, Queensland.</div>
    </footer>
  );
}
