import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { ArrowRight } from "@/components/Icons";

type Cell =
  | { type: "text"; n: string; title: string; desc: string }
  | { type: "image"; img: string; alt: string };

// checkerboard: text / image alternate across a 3-column grid
const GRID: Cell[] = [
  { type: "text", n: "01", title: "Architectural Design", desc: "Thoughtful designs that inspire and function beautifully." },
  { type: "image", img: "photo-1486406146926-c627a92ad1ab", alt: "Contemporary glass and steel facade" },
  { type: "text", n: "02", title: "Construction", desc: "Quality construction with precision and attention to detail." },

  { type: "image", img: "photo-1600210492486-724fe5c67fb0", alt: "Living room interior" },
  { type: "text", n: "03", title: "Interiors & Decor", desc: "Interiors that reflect your style and enhance living." },
  { type: "image", img: "photo-1600573472550-8090b5e0745e", alt: "Double-height interior with open staircase" },

  { type: "text", n: "04", title: "Renovation", desc: "Breathing new life into existing spaces with smart solutions." },
  { type: "image", img: "photo-1618221195710-dd6b41faaea6", alt: "Renovated living space" },
  { type: "text", n: "05", title: "Project Management", desc: "Planning, coordination and execution under one roof." },

  { type: "image", img: "photo-1504307651254-35680f356dfd", alt: "Structure under construction" },
  { type: "text", n: "06", title: "Civil Works", desc: "Strong and reliable foundations for every structure." },
  { type: "image", img: "photo-1600607687644-c7171b42498f", alt: "Finished interior with natural light" },
];

function img(id: string, w = 800) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
}

export default function ServicesPage() {
  return (
    <>
      <section className="section-wrap pt-16 md:pt-20 pb-12">
        <span className="eyebrow">Our Services</span>
        <h1 className="headline text-[2.5rem] md:text-[3.2rem] leading-[1.1] mt-5 text-shd-ink">
          Complete solutions
          <br />
          for every space.
        </h1>
        <p className="mt-6 text-[14px] text-shd-ink/70 leading-relaxed max-w-[360px]">
          From architecture and construction to interiors and project management, we handle it all for you.
        </p>
      </section>

      <div className="section-wrap grid grid-cols-1 sm:grid-cols-3 gap-1.5">
        {GRID.map((cell, i) =>
          cell.type === "image" ? (
            <div key={i} className="relative min-h-[240px] md:min-h-[300px] overflow-hidden rounded-[4px] bg-shd-card">
              <Image src={img(cell.img)} alt={cell.alt} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
            </div>
          ) : (
            <Link
              key={i}
              href="/contact"
              className="group bg-shd-card rounded-[4px] p-8 md:p-10 min-h-[240px] md:min-h-[300px] flex flex-col justify-between hover:bg-shd-sand transition-colors"
            >
              <div>
                <div className="text-xs text-shd-ink/60">{cell.n}</div>
                <div className="text-lg font-medium mt-5 text-shd-ink">{cell.title}</div>
                <p className="text-[13px] text-shd-ink/60 mt-4 max-w-[200px] leading-relaxed">{cell.desc}</p>
              </div>
              <span className="arrow-dot self-end group-hover:bg-shd-dark group-hover:text-shd-cream group-hover:border-shd-dark">
                <ArrowRight />
              </span>
            </Link>
          )
        )}
      </div>

      <section className="section-wrap pt-2 pb-20">
        <div className="bg-shd-dark text-shd-cream rounded-[4px] px-8 md:px-14 py-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="font-medium text-[15px]">Need a solution that&apos;s not listed?</div>
            <p className="text-shd-cream/60 text-[13px] mt-1.5">Let&apos;s discuss your unique requirements.</p>
          </div>
          <Link
            href="/contact"
            className="btn-outline !border-shd-cream/40 !text-shd-cream hover:!bg-shd-cream hover:!text-shd-ink !px-10 w-fit"
          >
            Talk to us <ArrowRight />
          </Link>
        </div>
      </section>

      <Footer variant="light" />
    </>
  );
}
