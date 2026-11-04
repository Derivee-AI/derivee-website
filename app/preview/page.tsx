import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import styles from "./preview.module.css";

export const metadata: Metadata = {
  title: "Derivée - Art Direction",
  description: "Internal art-direction review for Derivée.",
};

const comps = [
  {
    number: "01",
    name: "The Night Book",
    href: "/",
    description:
      "Selected. Black, brass, serif type, and an illustrative order book. The full site is live at the root.",
    swatches: ["#08090B", "#D4A249", "#F6F5F1"],
    className: styles.night,
    logo: true,
    selected: true,
  },
  {
    number: "02",
    name: "The Banknote",
    href: "/preview/banknote",
    description:
      "Warm paper, engraved type, copper, and deep green. Kept for reference.",
    swatches: ["#F1EBDD", "#10251B", "#B87333", "#C7432E"],
    className: styles.banknote,
    logo: false,
    selected: false,
  },
  {
    number: "03",
    name: "The Lagos Machine",
    href: "/preview/lagos-machine",
    description:
      "Asphalt, concrete, safety orange, and bridge geometry. Kept for reference.",
    swatches: ["#111111", "#B9B4AA", "#FF5A1F", "#2F5D50"],
    className: styles.machine,
    logo: false,
    selected: false,
  },
];

export default function PreviewIndexPage() {
  return (
    <main className={styles.page}>
      <div className={styles.grain} aria-hidden="true" />

      <header className={styles.header}>
        <div className={styles.brand}>
          <Image
            src="/brand/derivee-white.png"
            alt="Derivée"
            width={549}
            height={173}
            priority
            className={styles.logo}
          />
        </div>
        <span className={styles.meta}>Hero comps / internal review</span>
      </header>

      <section className={styles.intro}>
        <p className={styles.eyebrow}>Night Book selected</p>
        <h1 className={styles.title}>
          The <em>Night Book.</em>
        </h1>
        <p className={styles.sub}>
          This direction is now the full site at the root. The other two
          directions are kept below as reference.
        </p>
      </section>

      <section className={styles.grid} aria-label="Hero comps">
        {comps.map((comp) => (
          <Link key={comp.href} href={comp.href} className={`${styles.card} ${comp.className}`}>
            <div className={styles.cardTop}>
              <span className={styles.number}>
                {comp.number}
                {comp.selected ? (
                  <em className={styles.selected}>Selected</em>
                ) : null}
              </span>
              <span className={styles.cardArrow}>
                <Arrow />
              </span>
            </div>
            <div className={styles.preview}>
              {comp.logo ? (
                <Image
                  src="/brand/derivee-white.png"
                  alt=""
                  width={549}
                  height={173}
                  className={styles.previewLogo}
                />
              ) : (
                <span className={styles.previewWord}>DERIVÉE</span>
              )}
              <span className={styles.previewLine} />
              <span className={styles.previewCaption}>NAIRA / LAGOS / 24H</span>
            </div>
            <div className={styles.cardBody}>
              <h2>{comp.name}</h2>
              <p>{comp.description}</p>
              <div className={styles.swatches} aria-label="Palette">
                {comp.swatches.map((swatch) => (
                  <span key={swatch} style={{ backgroundColor: swatch }} />
                ))}
              </div>
            </div>
          </Link>
        ))}
      </section>

      <footer className={styles.footer}>
        <span>Derivée / Lagos / 2026</span>
        <span>For institutional counterparties only</span>
      </footer>
    </main>
  );
}
