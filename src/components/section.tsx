import { cn } from "@/lib/utils";

export function Section({ id, className, children, dark = false, labelledBy }: {
  id?: string; className?: string; children: React.ReactNode; dark?: boolean; labelledBy?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn(dark && "dark bg-ink text-foreground", "py-20 sm:py-28", className)}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">{children}</div>
    </section>
  );
}

export function SectionHead({ id, title, lede, className }: { id: string; title: React.ReactNode; lede?: React.ReactNode; className?: string }) {
  return (
    <div className={cn("mb-12 grid gap-4 md:grid-cols-[1fr_minmax(0,28rem)] md:items-end md:gap-12", className)}>
      <h2 id={id} className="text-h2">{title}</h2>
      {lede && <p className="text-lg leading-relaxed text-muted-foreground">{lede}</p>}
    </div>
  );
}
