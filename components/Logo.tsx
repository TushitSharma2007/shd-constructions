import Image from "next/image";
import Link from "next/link";

// Brand logo. "compact" = emblem + text wordmark (navbar);
// "full" = the complete logo artwork with tagline (footer).
// tone="light" swaps the navy for cream, for use on dark backgrounds.
export default function Logo({
  tone = "dark",
  variant = "compact",
}: {
  tone?: "dark" | "light";
  variant?: "compact" | "full";
}) {
  const light = tone === "light";

  if (variant === "full") {
    return (
      <Link href="/" className="block w-fit" aria-label="SHD Constructions home">
        <Image
          src={light ? "/brand/shd-logo-light.png" : "/brand/shd-logo.png"}
          alt="SHD Constructions — Shree Hari Home Decor and Construction. Design, Build, Decorate."
          width={900}
          height={707}
          className="h-auto w-[210px]"
        />
      </Link>
    );
  }

  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="SHD Constructions home">
      <Image
        src={light ? "/brand/shd-mark-light.png" : "/brand/shd-mark.png"}
        alt=""
        width={379}
        height={300}
        priority
        className="h-[52px] w-auto"
      />
      <span className="leading-none">
        <span className="block font-serif text-[17px] tracking-[0.04em] uppercase">
          <span className="text-shd-gold">SHD</span>{" "}
          <span className={light ? "text-shd-cream" : "text-shd-navy"}>Constructions</span>
        </span>
        <span className="block text-[7.5px] tracking-[0.3em] uppercase text-shd-gold mt-1.5">
          Design &middot; Build &middot; Decorate
        </span>
      </span>
    </Link>
  );
}
