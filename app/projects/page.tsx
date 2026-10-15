"use client";

import Image from "next/image";
import { useState } from "react";
import Footer from "@/components/Footer";
import { ArrowRight } from "@/components/Icons";

const CATEGORIES = ["All", "Residential", "Commercial", "Interiors", "Renovation"];
const PAGE_SIZE = 6;

const PROJECTS = [
  { title: "Modern Residence", place: "Bhopal", category: "Residential", img: "photo-1600585154340-be6161a56a0c" },
  { title: "Luxury Interior", place: "Indore", category: "Interiors", img: "photo-1600607687939-ce8a6c25118c" },
  { title: "Commercial Space", place: "Bhopal", category: "Commercial", img: "photo-1600566753086-00f18fb6b3ea" },
  { title: "Premium Villa", place: "Bhopal", category: "Residential", img: "photo-1600596542815-ffad4c1539a9" },
  { title: "Urban House", place: "Indore", category: "Renovation", img: "photo-1600047509807-ba8f99d2cdde" },
  { title: "Office Interior", place: "Bhopal", category: "Interiors", img: "photo-1497366216548-37526070297c" },
  { title: "Lakeview Bungalow", place: "Bhopal", category: "Residential", img: "photo-1613490493576-7fde63acd811" },
  { title: "Family Home Revamp", place: "Bhopal", category: "Renovation", img: "photo-1564013799919-ab600027ffc6" },
];

function img(id: string, w = 1200) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
}

export default function ProjectsPage() {
  const [active, setActive] = useState("All");
  const [visible, setVisible] = useState(PAGE_SIZE);
  const filtered = active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);
  const shown = filtered.slice(0, visible);

  return (
    <>
      <section className="section-wrap pt-16 md:pt-20 pb-10">
        <span className="eyebrow">Our Projects</span>
        <h1 className="headline text-[2.5rem] md:text-[3.2rem] leading-[1.1] mt-5 text-shd-ink">
          Spaces we&apos;re
          <br />
          proud to build.
        </h1>
        <p className="mt-6 text-[14px] text-shd-ink/70 leading-relaxed max-w-[320px]">
          A glimpse of our work across residential, commercial and interior projects.
        </p>

        <div className="flex flex-wrap gap-x-10 gap-y-3 mt-12 text-[13px]">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActive(cat);
                setVisible(PAGE_SIZE);
              }}
              className={`relative pb-1.5 transition-colors ${
                active === cat ? "text-shd-ink font-medium" : "text-shd-ink/60 hover:text-shd-ink"
              }`}
            >
              {cat}
              {active === cat && <span className="absolute left-0 right-0 bottom-0 h-px bg-shd-gold" />}
            </button>
          ))}
        </div>
      </section>

      <div className="section-wrap grid grid-cols-1 sm:grid-cols-2 gap-1.5">
        {shown.map((p) => (
          <div key={p.title} className="group relative aspect-[4/3] overflow-hidden rounded-[4px]">
            <Image
              src={img(p.img)}
              alt={`${p.title}, ${p.place}`}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-7 text-white">
              <p className="font-medium text-[15px]">{p.title}</p>
              <p className="text-[12px] text-white/65 mt-1">{p.place}</p>
            </div>
          </div>
        ))}
      </div>

      {shown.length === 0 && (
        <p className="text-center text-shd-ink/50 py-10">No projects in this category yet.</p>
      )}

      <div className="text-center pt-10 pb-20">
        {visible < filtered.length && (
          <button onClick={() => setVisible((v) => v + PAGE_SIZE)} className="btn-outline">
            Load more projects <ArrowRight />
          </button>
        )}
      </div>

      <Footer variant="light" />
    </>
  );
}
