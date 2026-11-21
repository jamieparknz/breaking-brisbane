import type { Metadata } from "next";
import { ClassesBlock, WhoFor, BringAndSafety } from "@/components/sections";
import { RegisterSection } from "@/components/register-section";

export const metadata: Metadata = {
  title: "Classes and prices",
  description: "Weekend breaking class groups, timetable and prices on Brisbane's north side.",
  alternates: { canonical: "./" },
};

export default function ClassesPage() {
  return (
    <>
      <ClassesBlock headingLevel="h1" />
      <WhoFor />
      <BringAndSafety />
      <RegisterSection />
    </>
  );
}
