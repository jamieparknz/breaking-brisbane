import { cn } from "@/lib/utils";

export function Section({ id, className, children, dark = false, labelledBy }: {
  id?: string; className?: string; children: React.ReactNode; dark?: boolean; labelledBy?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn(dark && "dark bg-ink text-foreground", "py-20 sm:py-28", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">{children}</div>
    </section>
  );
}

/** Heading left, lede pushed right and down: asymmetric on purpose. */
export function SectionHead({ id, title, lede, className }: { id: string; title: React.ReactNode; lede?: React.ReactNode; className?: string }) {
  return (
    <div className={cn("mb-12 grid gap-6 md:mb-16 md:grid-cols-12", className)}>
      <h2 id={id} className="text-h2 md:col-span-7">{title}</h2>
      {lede && <p className="max-w-md text-lg leading-relaxed text-muted-foreground md:col-span-4 md:col-start-9 md:self-end">{lede}</p>}
    </div>
  );
}
