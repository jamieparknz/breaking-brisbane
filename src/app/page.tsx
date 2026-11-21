import { Hero } from "@/components/hero";
import { Learn, WhoFor, ClassesBlock, BringAndSafety, PracticeApp, AboutJamie } from "@/components/sections";
import { RegisterSection } from "@/components/register-section";
import { Section, SectionHead } from "@/components/section";
import { FaqList } from "@/components/faq-list";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <Learn />
      <WhoFor />
      <ClassesBlock />
      <BringAndSafety />
      <PracticeApp />
      <AboutJamie />
      <RegisterSection />
      <Section id="faq" labelledBy="faq-title">
        <SectionHead id="faq-title" title="FAQ" lede={<>The common ones. <Link href="/faq/" className="underline underline-offset-4">See all questions</Link>.</>} />
        <FaqList limit={5} />
      </Section>
    </>
  );
}
