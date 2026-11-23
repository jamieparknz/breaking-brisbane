import Link from "next/link";
import { Hero } from "@/components/hero";
import { Watch } from "@/components/watch";
import { Learn, ClassesBlock, BringAndSafety, PracticeApp, AboutJamie } from "@/components/sections";
import { RegisterSection } from "@/components/register-section";
import { Section, SectionHead } from "@/components/section";
import { FaqList } from "@/components/faq-list";

export default function Home() {
  return (
    <>
      <Hero />
      <Watch />
      <Learn />
      <ClassesBlock />
      <AboutJamie />
      <BringAndSafety />
      <PracticeApp />
      <RegisterSection />
      <Section id="faq" labelledBy="faq-title">
        <SectionHead id="faq-title" title="FAQ" lede={<>The common ones. <Link href="/faq/" className="underline underline-offset-4">See all questions</Link>.</>} />
        <FaqList limit={5} />
      </Section>
    </>
  );
}
