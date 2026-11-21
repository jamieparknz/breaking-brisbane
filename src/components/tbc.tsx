import { isPlaceholder } from "@/content/site";
import { cn } from "@/lib/utils";

/** Renders a config value, or a quiet "TBC" chip when it is still a placeholder. */
export function Tbc({ value, className, label = "TBC" }: { value: string; className?: string; label?: string }) {
  if (!isPlaceholder(value)) return <>{value}</>;
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border border-dashed border-current/40 px-1.5 align-baseline font-sans text-[0.8em] font-medium tracking-normal normal-case opacity-70",
        className,
      )}
      title="To be confirmed"
    >
      {label}
    </span>
  );
}
