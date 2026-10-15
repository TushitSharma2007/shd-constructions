import Image from "next/image";
import Footer from "@/components/Footer";
import { ArrowRight, BulbIcon, ClockIcon, DocIcon, NetworkIcon, ShieldIcon } from "@/components/Icons";
import { DIRECTORS } from "@/lib/site";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

const STATS = [
  { value: "150+", label: "Projects Completed" },
  { value: "100+", label: "Happy Clients" },
  { value: "15+", label: "Years of Experience" },
  { value: "08+", label: "Cities Served" },
];

const PHILOSOPHY = [
  {
    label: "Our Vision",
    text: "To be a leading design-build company known for creating spaces that enhance lives.",
  },
  {
    label: "Our Mission",
    text: "Deliver exceptional spaces through design excellence, quality and commitment.",
  },
  {
    label: "Our Values",
    text: "Integrity, transparency, quality and client-first approach.",
  },
];

const WHY = [
  { title: "End-to-end Solutions", Icon: NetworkIcon },
  { title: "On-time Delivery", Icon: ClockIcon },
  { title: "Transparent Process", Icon: DocIcon },
  { title: "Quality Assurance", Icon: ShieldIcon },
  { title: "Client First Approach", Icon: BulbIcon },
];

function img(id: string, w = 900) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
}

export default function AboutPage() {
  return (
    <>
      {/* hero: text + flush image */}
      <section className="grid md:grid-cols-[1fr_1.15fr]">
        <div className="wrap-pl pr-8 md:pr-12 py-16 md:py-20 flex flex-col justify-center">
          <span className="eyebrow">About SHD</span>
          <h1 className="headline text-[2.5rem] md:text-[3.3rem] leading-[1.08] mt-5 text-shd-ink">
            Building more
            <br />
            than structures.
            <br />
            We build
            <br />
            relationships.
          </h1>
          <p className="mt-6 text-[14px] text-shd-ink/70 leading-relaxed max-w-[340px]">
            SHD Constructions is a design-build company creating exceptional spaces across residential, commercial and
            interiors.
          </p>
          <p className="mt-4 text-[14px] text-shd-ink/70 leading-relaxed max-w-[340px]">
            Our journey is built on trust, quality, transparency and a passion for excellence.
          </p>
          <a href="#philosophy" className="link-arrow mt-9 text-shd-ink w-fit">
            Our story <ArrowRight />
          </a>
        </div>
        <div className="relative min-h-[380px] md:min-h-[580px]">
          <Image
            src={img("photo-1600585154526-990dced4db0d", 1600)}
            alt="Contemporary home designed and built by SHD"
            fill
            priority
            sizes="(min-width: 768px) 55vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* stat bar */}
      <div className="bg-shd-dark text-shd-cream">
        <div className="section-wrap grid grid-cols-2 md:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`text-center py-10 px-3 border-white/15 ${i % 2 === 1 ? "border-l" : ""} ${
                i === 2 ? "md:border-l" : ""
              } ${i > 1 ? "border-t md:border-t-0" : ""}`}
            >
              <div className="font-serif text-3xl md:text-[2.3rem]">{s.value}</div>
              <div className="text-[12px] text-shd-cream/60 mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* philosophy */}
      <section id="philosophy" className="section-wrap py-20 scroll-mt-24">
        <span className="eyebrow">Our Philosophy</span>
        <h2 className="headline text-3xl md:text-[2.4rem] leading-[1.15] mt-4 text-shd-ink">
          Design with purpose.
          <br />
          Build with integrity.
        </h2>

        <div className="grid md:grid-cols-3 mt-12">
          {PHILOSOPHY.map((p, i) => (
            <div
              key={p.label}
              className={`py-6 md:py-2 md:px-10 border-shd-line ${i > 0 ? "border-t md:border-t-0 md:border-l" : "md:pl-0"}`}
            >
              <div className="text-[11px] tracking-[0.16em] uppercase font-semibold text-shd-ink/70">{p.label}</div>
              <p className="text-[14px] text-shd-ink/70 mt-4 leading-relaxed max-w-[260px]">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* team */}
      <section className="section-wrap pb-20">
        <span className="eyebrow">Meet the Directors</span>
        <h2 className="headline text-3xl md:text-[2.4rem] leading-[1.15] mt-4 mb-10 text-shd-ink">
          The minds behind
          <br />
          meaningful spaces.
        </h2>

        <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-[620px]">
          {DIRECTORS.map((member) => (
            <div key={member.name}>
              <div className="aspect-[1/0.92] rounded-md bg-shd-card border border-shd-line flex items-center justify-center">
                <span className="font-serif text-5xl md:text-6xl text-shd-ink/70" aria-hidden>
                  {initials(member.name)}
                </span>
              </div>
              <div className="pt-4 text-center">
                <div className="font-semibold text-[14px] text-shd-ink">{member.name}</div>
                <div className="text-[12px] text-shd-ink/60 mt-1">{member.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* why choose */}
      <section className="bg-shd-dark text-shd-cream">
        <div className="section-wrap py-16 md:py-20">
          <span className="eyebrow-gold">Why Choose SHD</span>
          <h2 className="headline text-3xl md:text-[2.4rem] mt-4 mb-12">One team. Complete solutions.</h2>
          <div className="grid grid-cols-2 md:grid-cols-5">
            {WHY.map(({ title, Icon }, i) => (
              <div
                key={title}
                className={`flex flex-col items-center text-center px-4 py-8 md:py-4 border-white/15 ${
                  i > 0 ? "md:border-l" : ""
                } ${i % 2 === 1 ? "border-l" : ""} ${i > 1 ? "border-t md:border-t-0" : ""}`}
              >
                <Icon size={30} className="text-shd-gold" />
                <div className="mt-5 text-[13px] text-shd-cream/85 max-w-[110px] leading-snug">{title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer variant="light" />
    </>
  );
}
