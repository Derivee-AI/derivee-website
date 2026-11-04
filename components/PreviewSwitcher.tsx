"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const comps = [
  { href: "/preview/night-book", label: "01 Night Book" },
  { href: "/preview/banknote", label: "02 Banknote" },
  { href: "/preview/lagos-machine", label: "03 Lagos Machine" },
];

export function PreviewSwitcher() {
  const pathname = usePathname();

  return (
    <nav className="preview-switcher" aria-label="Hero comps">
      <span className="switcher-label">Comps</span>
      {comps.map((comp) => (
        <Link
          key={comp.href}
          href={comp.href}
          aria-current={pathname === comp.href ? "page" : undefined}
        >
          {comp.label}
        </Link>
      ))}
    </nav>
  );
}
