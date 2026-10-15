import Link from "next/link";
import Logo from "@/components/Logo";
import { ADDRESS_LINES } from "@/lib/site";

const COMPANY = [
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Process", href: "/process" },
  { label: "Why SHD", href: "/why-us" },
];

const SERVICES = ["Architecture", "Construction", "Interiors", "Renovation", "Project Management"];

export default function Footer({ variant = "light" }: { variant?: "light" | "dark" }) {
  const dark = variant === "dark";
  const heading = `text-[10px] tracking-[0.2em] uppercase font-medium mb-4 ${
    dark ? "text-shd-gold" : "text-shd-ink/50"
  }`;

  return (
    <footer
      className={
        dark ? "bg-shd-darker text-shd-cream/70" : "bg-shd-cream text-shd-ink/70 border-t border-shd-line"
      }
    >
      <div className="section-wrap py-14 grid grid-cols-2 md:grid-cols-[1.6fr_1fr_1.1fr_1.4fr] gap-10 text-[13px]">
        <div className="col-span-2 md:col-span-1">
          <Logo tone={dark ? "light" : "dark"} />
          <p className={`mt-5 leading-relaxed ${dark ? "text-shd-cream/60" : "text-shd-ink/60"}`}>
            Shree Hari Home Decor and Construction
            <br />
            Design &nbsp;&middot;&nbsp; Build &nbsp;&middot;&nbsp; Decorate
          </p>
        </div>

        <div>
          <div className={heading}>Company</div>
          <ul className="space-y-2.5">
            {COMPANY.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={dark ? "hover:text-shd-cream" : "hover:text-shd-ink"}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className={heading}>Services</div>
          <ul className="space-y-2.5">
            {SERVICES.map((item) => (
              <li key={item}>
                <Link href="/services" className={dark ? "hover:text-shd-cream" : "hover:text-shd-ink"}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-2 md:col-span-1">
          <div className={heading}>Contact</div>
          <ul className="space-y-2.5">
            <li>
              <a href="tel:+911234567890">+91 12345 67890</a>
            </li>
            <li>
              <a href="mailto:info@shdconstructions.com">info@shdconstructions.com</a>
            </li>
            <li className="leading-relaxed">
              {ADDRESS_LINES.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </li>
            <li>Mon - Sat: 9:30 AM - 6:30 PM</li>
          </ul>
        </div>
      </div>

      <div className={`border-t ${dark ? "border-white/10" : "border-shd-line"}`}>
        <div className="section-wrap py-5 flex flex-col sm:flex-row justify-between gap-2 text-[11px] opacity-60">
          <span>&copy; {new Date().getFullYear()} SHD Constructions. All rights reserved.</span>
          <span>Bhopal, Madhya Pradesh, India</span>
        </div>
      </div>
    </footer>
  );
}
