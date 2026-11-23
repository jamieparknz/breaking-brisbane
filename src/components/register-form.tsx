"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { site, groups, isPlaceholder } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  name: z.string().trim().min(2, "Enter your first name"),
  email: z.string().trim().email("Enter an email address like name@example.com"),
  group: z.string().min(1, "Choose a group"),
  experience: z.string().min(1, "Choose an experience level"),
  message: z.string().max(800, "Keep it under 800 characters").optional(),
  consent: z.boolean().refine((v) => v, "Tick this box so we can contact you"),
});
type Values = z.infer<typeof schema>;

export function RegisterForm() {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", group: "", experience: "", message: "", consent: false },
  });

  async function onSubmit(values: Values) {
    if (isPlaceholder(site.formEndpoint)) {
      setStatus("error");
      return;
    }
    try {
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(values),
      });
      setStatus(res.ok ? "sent" : "error");
      if (res.ok) form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="border-l-4 border-signal pl-6 py-2">
        <p className="text-h2">You&apos;re on the list</p>
        <p className="mt-3 text-muted-foreground">{site.instructor} will email you when times and the venue are confirmed.</p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} noValidate className="grid gap-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField control={form.control} name="name" render={({ field }) => (
            <FormItem>
              <FormLabel>First name</FormLabel>
              <FormControl><Input autoComplete="given-name" className="h-11" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="email" render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl><Input type="email" autoComplete="email" className="h-11" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="group" render={({ field }) => (
            <FormItem>
              <FormLabel>Group</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl><SelectTrigger className="h-11 w-full data-[size=default]:h-11"><SelectValue placeholder="Choose a group" /></SelectTrigger></FormControl>
                <SelectContent>
                  {groups.map((g) => <SelectItem key={g.id} value={g.name}>{g.name}</SelectItem>)}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="experience" render={({ field }) => (
            <FormItem>
              <FormLabel>Experience</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl><SelectTrigger className="h-11 w-full data-[size=default]:h-11"><SelectValue placeholder="Choose a level" /></SelectTrigger></FormControl>
                <SelectContent>
                  <SelectItem value="New to breaking">New to breaking</SelectItem>
                  <SelectItem value="Some experience">Some experience</SelectItem>
                  <SelectItem value="Been breaking a while">Been breaking a while</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )} />
        </div>
        <FormField control={form.control} name="message" render={({ field }) => (
          <FormItem>
            <FormLabel>Anything we should know? <span className="font-normal text-muted-foreground">(optional)</span></FormLabel>
            <FormControl><Textarea rows={4} {...field} /></FormControl>
            <FormDescription>Injuries, medical needs or questions. Please don&apos;t share a child&apos;s surname.</FormDescription>
            <FormMessage />
          </FormItem>
        )} />
        <FormField control={form.control} name="consent" render={({ field }) => (
          <FormItem className="flex flex-row items-start gap-3">
            <FormControl><Checkbox checked={field.value} onCheckedChange={(v) => field.onChange(v === true)} className="mt-0.5 size-5" /></FormControl>
            <div className="grid gap-1">
              <FormLabel className="font-normal leading-snug">I&apos;m the parent or guardian, or 18 or older, and happy to be contacted about classes.</FormLabel>
              <FormMessage />
            </div>
          </FormItem>
        )} />
        {status === "error" && (
          <p role="alert" className="border-l-4 border-destructive p-4 text-sm text-destructive">
            {isPlaceholder(site.formEndpoint)
              ? "Registrations open soon. The form isn't connected yet, so nothing was sent."
              : "That didn't send. Check your connection and try again."}
          </p>
        )}
        <Button type="submit" variant="tape" size="lg" disabled={form.formState.isSubmitting} className="h-13 w-full sm:w-auto sm:justify-self-start sm:px-8">
          {form.formState.isSubmitting && <Loader2 className="size-4 animate-spin" aria-hidden />}
          Book my free class
        </Button>
        <p className="text-xs text-muted-foreground">Your details are only used to contact you about classes.</p>
      </form>
    </Form>
  );
}
