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
    <header className="sticky top-0 z-50 border-b border-ink/15 bg-paper/95 text-ink backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-display text-2xl font-black uppercase leading-none">
          <span aria-hidden className="inline-block h-2.5 w-5 bg-signal" />
          {site.brand}
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="px-3 py-2 text-sm font-medium underline-offset-4 hover:underline">
              {n.label}
            </Link>
          ))}
          <Button asChild variant="tape" size="lg" className="ml-3 h-10 px-5 text-sm">
            <Link href="/#register">Book a free class</Link>
          </Button>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="size-11 md:hidden" aria-label="Open menu">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-xs border-ink bg-paper text-ink">
            <SheetHeader>
              <SheetTitle className="font-display text-3xl font-black uppercase">{site.brand}</SheetTitle>
            </SheetHeader>
            <nav aria-label="Mobile" className="flex flex-col gap-1 px-4">
              {nav.map((n) => (
                <SheetClose asChild key={n.href}>
                  <Link href={n.href} className="border-b border-line py-3 font-display text-3xl font-extrabold uppercase">{n.label}</Link>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Button asChild variant="tape" size="lg" className="mt-6 h-13">
                  <Link href="/#register">Book a free class</Link>
                </Button>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
