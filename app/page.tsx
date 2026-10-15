import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import BuildingSketch from "@/components/BuildingSketch";
import { ArrowRight, ClockIcon, CubeIcon, HeartHomeIcon, UsersIcon } from "@/components/Icons";

function img(id: string, w = 1200) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
}

const PILLARS = [
  { title: "Quality Materials", desc: "Built for longevity.", Icon: CubeIcon },
  { title: "Expert Team", desc: "Experienced professionals.", Icon: UsersIcon },
  { title: "On-Time Delivery", desc: "Timelines we respect.", Icon: ClockIcon },
  { title: "Client Satisfaction", desc: "Relationships that last.", Icon: HeartHomeIcon },
];

type Tile =
  | { kind: "service"; n: string; title: string; desc: string; tone: "dark" | "sand" }
  | { kind: "image"; img: string; alt: string };

// 4 x 2 mosaic, the intro text sits in the first cell
const SERVICE_TILES: Tile[] = [
  { kind: "service", n: "01", title: "Architectural Design", desc: "Creative design that inspires.", tone: "dark" },
  { kind: "image", img: "photo-1504307651254-35680f356dfd", alt: "Building under construction" },
  { kind: "service", n: "03", title: "Interiors & Decor", desc: "Interiors that reflect your lifestyle.", tone: "dark" },
  { kind: "service", n: "04", title: "Renovation", desc: "Transforming spaces with purpose.", tone: "sand" },
  { kind: "service", n: "05", title: "Project Management", desc: "Planning, coordination and execution.", tone: "dark" },
  { kind: "service", n: "06", title: "Civil Works", desc: "Strong foundations that last.", tone: "dark" },
];

const PROJECTS = [
  { title: "Modern Residence", place: "Bhopal", img: "photo-1600585154340-be6161a56a0c" },
  { title: "Luxury Interior", place: "Indore", img: "photo-1600607687939-ce8a6c25118c" },
  { title: "Commercial Space", place: "Bhopal", img: "photo-1600566753086-00f18fb6b3ea" },
  { title: "Premium Villa", place: "Bhopal", img: "photo-1600596542815-ffad4c1539a9" },
];

export default function HomePage() {
  return (
    <>
      {/* ---------- connected hero tiles ---------- */}
      <div className="grid md:grid-cols-[1fr_1.2fr] gap-1 bg-shd-cream">
        {/* row 1 */}
        <div className="bg-shd-dark text-shd-cream wrap-pl pr-8 md:pr-12 py-16 md:py-20 flex flex-col justify-center min-h-[440px] md:min-h-[520px]">
          <span className="eyebrow-gold">Welcome to SHD</span>
          <h1 className="headline text-[2.6rem] md:text-[3.6rem] leading-[1.05] mt-5">
            Building
            <br />
            better spaces
            <br />
            together.
          </h1>
          <p className="mt-6 text-[14px] text-shd-cream/70 leading-relaxed max-w-[300px]">
            We create thoughtful spaces that are functional, beautiful and built to last for generations.
          </p>
          <Link href="/about" className="link-arrow mt-8 w-fit">
            About our company <ArrowRight />
          </Link>
        </div>
        <div className="relative min-h-[360px] md:min-h-[520px] overflow-hidden">
          <Image
            src={img("photo-1600585154340-be6161a56a0c", 1600)}
            alt="Modern residence in Bhopal"
            fill
            priority
            sizes="(min-width: 768px) 55vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 p-7 md:p-9 text-white">
            <p className="text-[10px] tracking-[0.2em] uppercase text-white/70">Featured Project</p>
            <p className="text-lg font-medium mt-2 leading-snug">
              Modern Residence
              <br />
              Bhopal
            </p>
            <Link href="/projects" className="link-arrow mt-3 text-[10px] text-white/80">
              View project <ArrowRight width={12} height={12} />
            </Link>
          </div>
        </div>

        {/* row 2 */}
        <Link
          href="/projects"
          className="group bg-shd-paper wrap-pl pr-8 md:pr-12 py-10 flex flex-col justify-center min-h-[230px]"
        >
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="font-serif text-5xl text-shd-ink">150+</div>
              <p className="text-[13px] text-shd-ink/60 mt-3">Projects Completed</p>
            </div>
            <span className="arrow-dot group-hover:bg-shd-dark group-hover:text-shd-cream group-hover:border-shd-dark">
              <ArrowRight />
            </span>
          </div>
        </Link>
        <div className="relative min-h-[230px] overflow-hidden">
          <Image
            src={img("photo-1600210492486-724fe5c67fb0", 1400)}
            alt="Warm living room interior"
            fill
            sizes="(min-width: 768px) 55vw, 100vw"
            className="object-cover"
          />
        </div>

        {/* row 3 */}
        <Link
          href="/why-us"
          className="group bg-shd-sand wrap-pl pr-8 md:pr-12 py-10 flex flex-col justify-center min-h-[250px]"
        >
          <span className="eyebrow">Our Commitment</span>
          <div className="flex items-end justify-between gap-6 mt-4">
            <p className="headline text-2xl md:text-[1.75rem] leading-snug text-shd-ink max-w-[300px]">
              Quality materials, transparent processes and timely delivery.
            </p>
            <span className="arrow-dot group-hover:bg-shd-dark group-hover:text-shd-cream group-hover:border-shd-dark">
              <ArrowRight />
            </span>
          </div>
        </Link>
        <div className="relative min-h-[250px] bg-shd-dark overflow-hidden flex items-end justify-end">
          <BuildingSketch className="w-[88%] max-w-[620px] text-shd-gold opacity-50 translate-y-6" />
        </div>
      </div>

      {/* ---------- quality pillars ---------- */}
      <div className="bg-shd-paper border-y border-shd-line">
        <div className="section-wrap grid grid-cols-2 md:grid-cols-4">
          {PILLARS.map(({ title, desc, Icon }, i) => (
            <div
              key={title}
              className={`flex flex-col items-center text-center px-4 py-10 md:py-12 border-shd-line ${
                i % 2 === 1 ? "border-l" : ""
              } ${i > 1 ? "border-t md:border-t-0" : ""} ${i === 2 ? "md:border-l" : ""}`}
            >
              <Icon size={26} className="text-shd-ink/70" />
              <div className="mt-5 text-[11px] tracking-[0.14em] uppercase font-semibold text-shd-ink max-w-[110px]">
                {title}
              </div>
              <p className="text-[13px] text-shd-ink/60 mt-2 max-w-[120px] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ---------- who we are ---------- */}
      <section className="section-wrap py-20 md:py-24 grid md:grid-cols-[1fr_1.4fr] gap-10 items-center">
        <div>
          <span className="eyebrow">Who We Are</span>
          <h2 className="headline text-4xl md:text-[2.9rem] leading-[1.1] mt-5 text-shd-ink">
            One team.
            <br />
            Every stage
            <br />
            of your space.
          </h2>
          <p className="mt-6 text-[14px] text-shd-ink/70 leading-relaxed max-w-[330px]">
            SHD Constructions brings architecture, construction, interiors and project execution together under one
            roof.
          </p>
          <p className="mt-4 text-[14px] text-shd-ink/70 leading-relaxed max-w-[330px]">
            We believe great spaces are created when thoughtful design meets disciplined execution.
          </p>
          <Link href="/about" className="link-arrow mt-8 text-shd-ink">
            Discover SHD <ArrowRight />
          </Link>
        </div>
        <BuildingSketch className="w-full text-shd-ink/70" />
      </section>

      {/* ---------- services mosaic ---------- */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 border-t border-shd-line">
        <div className="bg-shd-paper wrap-pl pr-8 py-12 flex flex-col justify-center min-h-[240px]">
          <span className="eyebrow">Our Services</span>
          <h2 className="headline text-3xl md:text-[2.1rem] leading-[1.15] mt-4 text-shd-ink">
            Everything your
            <br />
            space needs.
          </h2>
          <p className="text-[13px] text-shd-ink/60 mt-4">From the first drawing to the final detail.</p>
        </div>

        {SERVICE_TILES.map((tile, i) => {
          if (tile.kind === "image") {
            return (
              <div key={i} className="relative min-h-[240px] overflow-hidden rounded-[3px]">
                <Image src={img(tile.img, 800)} alt={tile.alt} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover grayscale-[35%]" />
              </div>
            );
          }
          const dark = tile.tone === "dark";
          return (
            <Link
              key={tile.n}
              href="/services"
              className={`group relative p-8 min-h-[240px] flex flex-col rounded-[3px] transition-colors ${
                dark ? "bg-shd-dark text-shd-cream hover:bg-[#2b3a2f]" : "bg-shd-sand text-shd-ink hover:bg-[#e1d9cb]"
              }`}
            >
              <div className={`text-xs ${dark ? "text-shd-gold" : "text-shd-ink/60"}`}>{tile.n}</div>
              <div className="text-lg font-medium mt-5 leading-snug max-w-[160px]">{tile.title}</div>
              <p className={`text-[13px] mt-3 max-w-[170px] leading-relaxed ${dark ? "text-shd-cream/60" : "text-shd-ink/60"}`}>
                {tile.desc}
              </p>
            </Link>
          );
        })}

        <Link
          href="/services"
          className="group bg-shd-darker text-shd-cream p-8 min-h-[240px] flex items-center justify-center rounded-[3px] hover:bg-black transition-colors"
        >
          <span className="link-arrow leading-relaxed">
            View all
            <br />
            services <ArrowRight />
          </span>
        </Link>
      </section>

      {/* ---------- selected work ---------- */}
      <section className="bg-shd-darker text-shd-cream mt-1">
        <div className="section-wrap py-14 md:py-16">
          <div className="flex justify-end mb-6">
            <Link href="/projects" className="link-arrow text-[10px] text-shd-cream/80 hover:text-shd-cream">
              View all projects <ArrowRight width={12} height={12} />
            </Link>
          </div>
          <div className="grid lg:grid-cols-[1fr_3.2fr] gap-8 items-start">
            <div>
              <span className="text-[10.5px] tracking-[0.2em] uppercase text-shd-cream/50">Selected Work</span>
              <h2 className="headline text-3xl md:text-[2.2rem] leading-[1.15] mt-4">
                Spaces we&apos;re
                <br />
                proud to build.
              </h2>
              <Link href="/projects" className="link-arrow mt-6 text-[10px] text-shd-cream/60 hover:text-shd-cream">
                Explore our work <ArrowRight width={12} height={12} />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5">
              {PROJECTS.map((p) => (
                <Link key={p.title} href="/projects" className="group relative aspect-[4/5] overflow-hidden rounded-[3px]">
                  <Image
                    src={img(p.img, 700)}
                    alt={p.title}
                    fill
                    sizes="(min-width: 768px) 20vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <p className="text-[13px] font-medium">{p.title}</p>
                    <p className="text-[11px] text-white/60 mt-0.5">{p.place}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="bg-shd-dark text-shd-cream relative overflow-hidden">
        <div className="section-wrap py-16 md:py-20 relative z-10">
          <span className="eyebrow-gold">Have a project in mind?</span>
          <h2 className="headline text-3xl md:text-[2.6rem] leading-tight mt-4 max-w-xl">
            Let&apos;s build something meaningful.
          </h2>
          <p className="mt-5 text-[14px] text-shd-cream/70 max-w-sm leading-relaxed">
            Tell us about your space, requirements and vision. We&apos;ll help you understand the next step.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/contact" className="btn-primary !bg-shd-cream !text-shd-ink hover:!bg-white">
              Start your project <ArrowRight />
            </Link>
            <a
              href="tel:+911234567890"
              className="btn-outline !border-shd-cream/40 !text-shd-cream hover:!bg-shd-cream hover:!text-shd-ink"
            >
              Call us
            </a>
          </div>
        </div>
        <BuildingSketch className="absolute right-[2%] bottom-[-12%] w-[52%] max-w-[640px] text-shd-gold opacity-60 hidden md:block" />
      </section>

      <Footer variant="dark" />
    </>
  );
}
