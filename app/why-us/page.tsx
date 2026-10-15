import Image from "next/image";
import Footer from "@/components/Footer";
import { ChatIcon, ClockIcon, ShieldIcon, UsersIcon } from "@/components/Icons";

function img(id: string, w = 1400) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
}

const FEATURES = [
  { title: "Quality Without Compromise", desc: "We use the best materials and proven construction practices.", Icon: ShieldIcon },
  { title: "Transparent Communication", desc: "Clear updates at every stage of your project.", Icon: ChatIcon },
];

const CARDS = [
  { title: "On-time Execution", desc: "We respect your time and deliver on schedule.", Icon: ClockIcon },
  { title: "End-to-end Support", desc: "One team with you from start to finish.", Icon: UsersIcon },
];

export default function WhyUsPage() {
  return (
    <>
      <section className="section-wrap pt-16 md:pt-20 pb-12 text-center">
        <span className="eyebrow">Why SHD</span>
        <h1 className="headline text-[2.5rem] md:text-[3.2rem] leading-tight mt-4 text-shd-ink">The SHD standard.</h1>
        <p className="mt-3 text-[14px] text-shd-ink/70">What you should expect from us.</p>
      </section>

      <section className="section-wrap grid md:grid-cols-[1.05fr_1fr] gap-1.5">
        <div className="relative min-h-[300px] md:min-h-[400px] rounded-[4px] overflow-hidden">
          <Image
            src={img("photo-1580587771525-78b9dba3b914")}
            alt="Modern multi-storey home built to the SHD standard"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="grid gap-1.5">
          {FEATURES.map(({ title, desc, Icon }) => (
            <div key={title} className="card-panel p-8 md:p-10 flex gap-6 items-start">
              <Icon size={28} className="text-shd-ink/70 shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-[15px] text-shd-ink">{title}</div>
                <p className="text-[13px] text-shd-ink/60 mt-3 leading-relaxed max-w-[280px]">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-wrap pt-1.5 pb-20 grid grid-cols-1 md:grid-cols-[0.8fr_1.1fr_1.1fr] gap-1.5">
        <div className="card-panel p-10 flex flex-col items-center justify-center text-center min-h-[200px]">
          <div className="font-serif text-5xl text-shd-ink">100+</div>
          <div className="text-[13px] text-shd-ink/60 mt-3">Happy Clients</div>
        </div>
        {CARDS.map(({ title, desc, Icon }) => (
          <div key={title} className="card-panel p-10 min-h-[200px]">
            <Icon size={28} className="text-shd-ink/70" />
            <div className="headline text-[1.4rem] text-shd-ink mt-5">{title}</div>
            <p className="text-[13px] text-shd-ink/60 mt-3 leading-relaxed max-w-[240px]">{desc}</p>
          </div>
        ))}
      </section>

      <Footer variant="light" />
    </>
  );
}
