import type { Metadata } from "next";
import { ClassesBlock, BringAndSafety } from "@/components/sections";
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
      <BringAndSafety />
      <RegisterSection />
    </>
  );
}
