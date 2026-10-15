import Link from "next/link";
import Footer from "@/components/Footer";
import { ArrowRight, BuildIcon, KeyIcon, PenIcon, PinIcon, SearchIcon } from "@/components/Icons";

const STEPS = [
  { title: "Discover", desc: "Understanding your needs and goals.", Icon: SearchIcon },
  { title: "Design", desc: "Turning ideas into smart designs.", Icon: PenIcon },
  { title: "Build", desc: "Executing with precision.", Icon: BuildIcon },
  { title: "Deliver", desc: "Handing over a finished space.", Icon: KeyIcon },
];

function StepArrow() {
  return (
    <svg width="56" height="12" viewBox="0 0 56 12" fill="none" className="text-shd-ink hidden md:block shrink-0" aria-hidden>
      <path d="M0 6h52" stroke="currentColor" strokeWidth="1.6" />
      <path d="M48 1.5 54 6l-6 4.5Z" fill="currentColor" />
    </svg>
  );
}

export default function ProcessPage() {
  return (
    <>
      <section className="section-wrap pt-16 md:pt-20 pb-20">
        <span className="eyebrow">Our Process</span>
        <h1 className="headline text-[2.5rem] md:text-[3.2rem] leading-[1.1] mt-5 text-shd-ink">
          A simpler way
          <br />
          to build.
        </h1>
        <p className="mt-6 text-[14px] text-shd-ink/70 leading-relaxed max-w-[300px]">
          Our proven process ensures clarity, quality and timely delivery.
        </p>

        <ol className="mt-16 grid grid-cols-2 md:flex md:items-start gap-y-12">
          {STEPS.map(({ title, desc, Icon }, i) => (
            <li key={title} className="contents">
              <div className="flex flex-col items-center text-center md:flex-1">
                <Icon size={26} className="text-shd-ink/70" />
                <PinIcon size={26} className="text-shd-ink/80 mt-4" />
                <div className="text-xl font-semibold text-shd-ink mt-5">{title}</div>
                <p className="text-[13px] text-shd-ink/60 mt-2 max-w-[150px] leading-relaxed">{desc}</p>
              </div>
              {i < STEPS.length - 1 && (
                <div className="hidden md:flex items-center h-[110px]">
                  <StepArrow />
                </div>
              )}
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-shd-line">
        <div className="section-wrap py-14 md:py-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="eyebrow">Have a project in mind?</span>
            <h2 className="headline text-3xl md:text-[2.2rem] mt-4 text-shd-ink">Let&apos;s start the conversation.</h2>
          </div>
          <Link href="/contact" className="btn-outline w-fit">
            Start your project <ArrowRight />
          </Link>
        </div>
      </section>

      <Footer variant="light" />
    </>
  );
}
