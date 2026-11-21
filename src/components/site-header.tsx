import Link from "next/link";
import { Menu } from "lucide-react";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const nav = [
  { href: "/#learn", label: "What you learn" },
  { href: "/classes/", label: "Classes and prices" },
  { href: "/#app", label: "Practice app" },
  { href: "/faq/", label: "FAQ" },
];

export function SiteHeader() {
  return (
    <header className="dark sticky top-0 z-50 border-b border-border bg-ink text-foreground">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-display text-xl uppercase tracking-wide">
          <span aria-hidden className="inline-block size-3 rounded-full bg-signal" />
          {site.brand}
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
              {n.label}
            </Link>
          ))}
          <Button asChild size="lg" className="ml-2 bg-signal text-ink hover:bg-signal/90">
            <Link href="/#register">Register interest</Link>
          </Button>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="size-11 md:hidden" aria-label="Open menu">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="dark w-full max-w-xs border-border bg-ink text-foreground">
            <SheetHeader>
              <SheetTitle className="font-display text-2xl uppercase">{site.brand}</SheetTitle>
            </SheetHeader>
            <nav aria-label="Mobile" className="flex flex-col gap-1 px-4">
              {nav.map((n) => (
                <SheetClose asChild key={n.href}>
                  <Link href={n.href} className="rounded-md py-3 text-lg">{n.label}</Link>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Button asChild size="lg" className="mt-4 h-12 bg-signal text-base text-ink hover:bg-signal/90">
                  <Link href="/#register">Register interest</Link>
                </Button>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
