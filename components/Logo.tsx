import Link from "next/link";

// Skyline mark + "SHD / CONSTRUCTIONS" wordmark
export default function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const ink = tone === "dark" ? "#1c211d" : "#f4f1eb";

  return (
    <Link href="/" className="flex items-end gap-1 shrink-0" aria-label="SHD Constructions home">
      <svg width="30" height="28" viewBox="0 0 30 28" fill="none" aria-hidden>
        <rect x="1" y="14" width="3" height="14" fill={ink} />
        <rect x="5" y="8" width="3" height="20" fill={ink} />
        <rect x="9" y="2" width="4" height="26" fill={ink} />
        <rect x="14" y="6" width="3" height="22" fill={ink} />
        <rect x="18" y="11" width="4" height="17" fill="#b8945a" />
        <rect x="23" y="16" width="3" height="12" fill={ink} />
        <rect x="0" y="27" width="30" height="1" fill={ink} />
      </svg>
      <span className="leading-none" style={{ color: ink }}>
        <span className="block font-serif text-[26px] leading-[0.85] tracking-tight">SHD</span>
        <span className="block text-[5.5px] tracking-[0.34em] mt-[3px] opacity-80">CONSTRUCTIONS</span>
      </span>
    </Link>
  );
}
