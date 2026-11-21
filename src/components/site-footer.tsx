import Link from "next/link";
import { AtSign } from "lucide-react";
import { site, isPlaceholder } from "@/content/site";

export function SiteFooter() {
  const ig = !isPlaceholder(site.instagram);
  return (
    <footer className="dark border-t border-border bg-ink text-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-4xl uppercase leading-none">{site.brand}</p>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Weekend breaking classes on the {site.area}, taught by {site.instructor}.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-col gap-2 text-sm">
          <Link href="/classes/" className="text-muted-foreground hover:text-foreground">Classes and prices</Link>
          <Link href="/faq/" className="text-muted-foreground hover:text-foreground">FAQ</Link>
          <Link href="/#register" className="text-muted-foreground hover:text-foreground">Register interest</Link>
          <a href={site.practiceApp.url} className="text-muted-foreground hover:text-foreground">{site.practiceApp.name} practice app</a>
        </nav>
        <div className="text-sm">
          {ig ? (
            <a href={`https://instagram.com/${site.instagram}`} className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <AtSign className="size-4" aria-hidden /> @{site.instagram}
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 text-muted-foreground">
              <AtSign className="size-4" aria-hidden /> Instagram coming soon
            </span>
          )}
        </div>
      </div>
      <div className="mx-auto max-w-6xl border-t border-border px-4 py-6 text-xs text-muted-foreground sm:px-6">
        © {new Date().getFullYear()} {site.brand}. Brisbane, Queensland.
      </div>
    </footer>
  );
}
