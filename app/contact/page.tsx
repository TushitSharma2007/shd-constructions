import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import {
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
} from "@/components/Icons";
import { ADDRESS, MAP_EMBED_URL } from "@/lib/site";

const DETAILS = [
  { Icon: PhoneIcon, label: "+91 12345 67890", href: "tel:+911234567890" },
  { Icon: MailIcon, label: "info@shdconstructions.com", href: "mailto:info@shdconstructions.com" },
  { Icon: PinIcon, label: ADDRESS },
  { Icon: ClockIcon, label: "Mon - Sat: 9:30 AM - 6:30 PM" },
];

const SOCIALS = [
  { label: "Facebook", href: "#", Icon: FacebookIcon },
  { label: "Instagram", href: "#", Icon: InstagramIcon },
  { label: "LinkedIn", href: "#", Icon: LinkedInIcon },
];

export default function ContactPage() {
  return (
    <>
      <section className="section-wrap pt-16 md:pt-20 pb-20 grid md:grid-cols-[1fr_1.45fr] gap-12 md:gap-16">
        <div>
          <span className="eyebrow">Get in Touch</span>
          <h1 className="headline text-[2.5rem] md:text-[3.2rem] leading-[1.1] mt-5 text-shd-ink">
            Let&apos;s talk about
            <br />
            your project.
          </h1>
          <p className="mt-6 text-[14px] text-shd-ink/70 leading-relaxed max-w-[300px]">
            We&apos;d love to hear about your ideas, and how we can bring them to life.
          </p>

          <ul className="mt-10 space-y-5 text-[14px] text-shd-ink">
            {DETAILS.map(({ Icon, label, href }) => (
              <li key={label} className="flex items-start gap-4 leading-relaxed max-w-[360px]">
                <Icon size={20} className="text-shd-ink/80 shrink-0 mt-0.5" />
                {href ? (
                  <a href={href} className="hover:text-shd-dark hover:underline underline-offset-4">
                    {label}
                  </a>
                ) : (
                  label
                )}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex items-center gap-7 text-shd-ink">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a key={label} href={href} aria-label={label} className="hover:text-shd-gold transition-colors">
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="bg-shd-paper border border-shd-line rounded-[4px] p-5 md:p-6">
            <ContactForm />
          </div>
          <div className="h-[200px] md:h-[220px] rounded-[4px] overflow-hidden border border-shd-line">
            <iframe
              title="SHD Constructions location"
              src={MAP_EMBED_URL}
              className="w-full h-full border-0 grayscale-[70%] contrast-[0.95]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <Footer variant="light" />
    </>
  );
}
