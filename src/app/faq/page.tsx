import type { Metadata } from "next";
import { Section } from "@/components/section";
import { FaqList } from "@/components/faq-list";
import { CtaBand } from "@/components/sections";
import { faq } from "@/content/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Questions about weekend breaking classes in Brisbane: ages, safety, venue and the free practice app.",
  alternates: { canonical: "./" },
};

export default function FaqPage() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <Section labelledBy="faq-title">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <h1 id="faq-title" className="text-h2 mb-12">Questions</h1>
      <FaqList />
      <CtaBand />
    </Section>
  );
}
