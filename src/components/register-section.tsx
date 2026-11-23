import { Section } from "@/components/section";
import { RegisterForm } from "@/components/register-form";


export function RegisterSection() {
  return (
    <Section id="register" dark labelledBy="register-title" className="grain">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <h2 id="register-title" className="text-h2">Book a free class</h2>
          <p className="mt-6 max-w-sm text-lg leading-relaxed text-muted-foreground">
            Leave your details and I&apos;ll email you when the first classes are locked in. Your first class is free.
          </p>
        </div>
        <div className="md:col-span-6 md:col-start-7"><RegisterForm /></div>
      </div>
    </Section>
  );
}
