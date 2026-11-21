import { faq } from "@/content/faq";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FaqList({ limit }: { limit?: number }) {
  const items = limit ? faq.slice(0, limit) : faq;
  return (
    <Accordion type="single" collapsible className="border-t border-ink">
      {items.map((f, i) => (
        <AccordionItem key={f.q} value={`q${i}`} className="border-line">
          <AccordionTrigger className="py-5 text-left text-lg font-medium hover:no-underline">{f.q}</AccordionTrigger>
          <AccordionContent className="max-w-prose pb-6 text-base leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
