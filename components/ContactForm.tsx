"use client";

import { useState, FormEvent } from "react";
import { ArrowRight, ChevronDown } from "@/components/Icons";

const PROJECT_TYPES = ["Architectural Design", "Construction", "Interiors", "Renovation", "Civil Works", "Other"];
const TIMELINES = ["Immediate", "1-3 Months", "3-6 Months", "Just Exploring"];

function Select({ name, placeholder, options }: { name: string; placeholder: string; options: string[] }) {
  return (
    <div className="relative">
      <select name={name} required defaultValue="" className="field appearance-none pr-10 invalid:text-shd-ink/50">
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="text-shd-ink">
            {o}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-shd-ink/70" />
    </div>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      projectType: (form.elements.namedItem("projectType") as HTMLSelectElement).value,
      timeline: (form.elements.namedItem("timeline") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input name="name" required placeholder="Your Name" className="field" />
      <input name="email" type="email" required placeholder="Email Address" className="field" />
      <input name="phone" type="tel" required placeholder="Phone Number" className="field" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Select name="projectType" placeholder="Project Type" options={PROJECT_TYPES} />
        <Select name="timeline" placeholder="Timeline" options={TIMELINES} />
      </div>
      <textarea name="message" required rows={5} placeholder="Your Message" className="field resize-none" />

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full !bg-shd-darker hover:!bg-black disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
        {status !== "loading" && <ArrowRight />}
      </button>

      {status === "success" && (
        <p className="text-sm text-shd-dark">Thanks! We&apos;ll get back to you shortly.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-700">Something went wrong. Please call us instead.</p>
      )}
    </form>
  );
}
