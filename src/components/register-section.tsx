import { Section } from "@/components/section";
import { RegisterForm } from "@/components/register-form";
import { site } from "@/content/site";

export function RegisterSection() {
  return (
    <Section id="register" dark labelledBy="register-title">
      <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
        <div>
          <h2 id="register-title" className="text-h2">Register interest</h2>
          <p className="mt-6 max-w-sm text-lg leading-relaxed text-muted-foreground">
            Leave your details and {site.instructor} will let you know when the first classes are locked in. Your first class is free.
          </p>
        </div>
        <RegisterForm />
      </div>
    </Section>
  );
}
